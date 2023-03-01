import { openDocument, showLoading, hideLoading, base64ToArrayBuffer } from '@/utils/uni-api'
import { requestW016 } from '@/server/api'

/**
 * 预览 pdf
 * @param {string} chi050 必填。文件码值
 * @param {string} chi051 文件名称
 * @example
  previewPDFWeixin().then(res => {
	// 接口调用成功
  }).catch(err => {
	// 接口调用失败
  }).finally((res) => {
	// 接口调用完成
  })
 */
const previewPDFWeixin = (chi050: string, chi051 = '') => {
  showLoading()

  // 创建并打开文件
  const createAndOpenFile = (filePath: string, fileName: string, arrayBuffer: ArrayBuffer) => {
    const fs = wx.getFileSystemManager()
    // 获取历史文件列表
    fs.readdir({
      dirPath: filePath,
      success(res) {
        res.files.forEach((el) => {
          // 删除历史文件，删除时要注意文件名一定要和存的时候一样,不然会报没有unlink无文件权限问题
          fs.unlink({
            filePath: filePath + el,
            success() {
              // console.log('历史文件删除成功：', el, res)
            },
            fail(err) {
              // eslint-disable-next-line no-console
              console.error('历史文件删除失败：', el, err)
            }
          })
        })
        // 写入新文件
        fs.writeFile({
          filePath: filePath + fileName,
          data: arrayBuffer,
          success() {
            // console.log('写入新文件成功', res)
            // 打开文件
            openDocument(filePath + fileName, 'pdf').finally(() => {
              hideLoading()
            })
          },
          fail(err) {
            // eslint-disable-next-line no-console
            console.error('写入新文件失败', err)
          }
        })
      }
    })
  }

  // 下载文件
  const downloadTempFile = (base64Str: string, fileName: string) => {
    const arrayBuffer = base64ToArrayBuffer(base64Str)
    // 自定义政策文件存储路径
    const filePath = wx.env.USER_DATA_PATH + '/policyDocument/'
    const fs = wx.getFileSystemManager()
    // 判断文件/目录是否存在
    fs.access({
      path: filePath,
      success() {
        createAndOpenFile(filePath, fileName, arrayBuffer)
      },
      fail(err) {
        // 文件夹不存在 创建文件夹
        // eslint-disable-next-line no-console
        console.error('文件夹不存在', err)
        fs.mkdir({
          dirPath: filePath,
          success() {
            // 创建文件夹成功 并打开文件
            createAndOpenFile(filePath, fileName, arrayBuffer)
          },
          fail(err) {
            // 创建文件夹失败
            // eslint-disable-next-line no-console
            console.error('创建文件夹失败', err)
            hideLoading()
          }
        })
      }
    })
  }

  requestW016(chi050)
    .then((res) => {
      if (res) {
        const fileName = chi051 && chi051 != '' ? chi051 + '.pdf' : 'file.pdf'
        const base64Str = res
        downloadTempFile(base64Str, fileName)
      } else {
        hideLoading()
      }
    })
    .catch(() => {
      hideLoading()
    })
}

export { previewPDFWeixin }
