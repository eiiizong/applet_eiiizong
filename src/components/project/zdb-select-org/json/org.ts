const orgList = [
  {
    orgtype: '01',
    orgname: '四川省',
    children: [
      {
        orgtype: '02',
        orgname: '成都市融资再担保有限责任公司',
        children: [
          { orgtype: '03', orgname: '公司领导', orglevel: 2, orgid: 111902, porgid: 111901 },
          { orgtype: '03', orgname: '业务部', orglevel: 2, orgid: 111903, porgid: 111901 },
          { orgtype: '03', orgname: '创新发展部', orglevel: 2, orgid: 111904, porgid: 111901 },
          { orgtype: '03', orgname: '资金财务部', orglevel: 2, orgid: 111905, porgid: 111901 },
          { orgtype: '03', orgname: '党群工作部', orglevel: 2, orgid: 111906, porgid: 111901 },
          { orgtype: '03', orgname: '资信评审部', orglevel: 2, orgid: 111907, porgid: 111901 },
          { orgtype: '03', orgname: '风控合规部', orglevel: 2, orgid: 111908, porgid: 111901 },
          { orgtype: '03', orgname: '综合管理部', orglevel: 2, orgid: 111909, porgid: 111901 },
          { orgtype: '03', orgname: '公共临时账户', orglevel: 2, orgid: 111910, porgid: 111901 }
        ],
        orglevel: 1,
        orgid: 111901,
        porgid: 1
      },
      {
        orgtype: '01',
        orgname: '成都市',
        children: [
          {
            orgtype: '11',
            orgname: '合作担保机构',
            children: [
              {
                orgtype: '11',
                orgname: '成都中小企业融资担保有限责任公司',
                orglevel: 3,
                orgid: 111951,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都小企业融资担保有限责任公司',
                orglevel: 3,
                orgid: 111953,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都金控融资担保有限公司',
                orglevel: 3,
                orgid: 111954,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都市现代农业融资担保有限公司',
                orglevel: 3,
                orgid: 111955,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都聚源中小企业融资担保有限公司',
                orglevel: 3,
                orgid: 111956,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都正信融资担保有限责任公司',
                orglevel: 3,
                orgid: 111957,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都经济技术开发区中小企业融资担保有限公司',
                orglevel: 3,
                orgid: 111958,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都市金牛国投融资担保有限公司',
                orglevel: 3,
                orgid: 111959,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都蜀都中小企业融资担保有限公司',
                orglevel: 3,
                orgid: 111960,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都武侯中小企业融资担保有限责任公司',
                orglevel: 3,
                orgid: 111961,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '简阳市中小企业融资担保有限公司',
                orglevel: 3,
                orgid: 1000001078,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '金堂县新农村建设融资担保有限公司',
                orglevel: 3,
                orgid: 1000001081,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '彭州市创业融资担保有限公司',
                orglevel: 3,
                orgid: 1000001082,
                porgid: 111947
              },
              {
                orgtype: '11',
                orgname: '成都市农村产权流转融资担保股份有限公司',
                orglevel: 3,
                orgid: 1000001092,
                porgid: 111947
              }
            ],
            orglevel: 2,
            orgid: 111947,
            porgid: 111918
          },
          {
            orgtype: '13',
            orgname: '合作银行',
            children: [
              {
                orgtype: '13',
                orgname: '成都银行股份有限公司',
                orglevel: 3,
                orgid: 111963,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '成都农村商业银行股份有限公司',
                orglevel: 3,
                orgid: 111964,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国工商银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111965,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国农业银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111966,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国银行股份有限公司四川省分行',
                orglevel: 3,
                orgid: 111967,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国建设银行股份有限公司四川省分行',
                orglevel: 3,
                orgid: 111968,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '交通银行股份有限公司四川省分行',
                orglevel: 3,
                orgid: 111969,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国邮政储蓄银行股份有限公司成都市分行',
                orglevel: 3,
                orgid: 111970,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '浙江民泰商业银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111971,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '重庆银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111972,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '招商银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111973,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '四川天府银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 111975,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '贵阳银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 1000001085,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '四川简阳农村商业银行股份有限公司',
                orglevel: 3,
                orgid: 1000001088,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '渣打银行（中国）有限公司成都分行',
                orglevel: 3,
                orgid: 1000001089,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '上海银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 1000001090,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '中国民生银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 1000001091,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '徽商银行股份有限公司成都分行',
                orglevel: 3,
                orgid: 1000001093,
                porgid: 111949
              },
              {
                orgtype: '13',
                orgname: '四川银行股份有限公司',
                orglevel: 3,
                orgid: 1000001094,
                porgid: 111949
              }
            ],
            orglevel: 2,
            orgid: 111949,
            porgid: 111918
          },
          {
            orgtype: '12',
            orgname: '合作小贷公司',
            children: [
              {
                orgtype: '12',
                orgname: '成都高新锦泓科技小额贷款有限责任公司',
                orglevel: 3,
                orgid: 111962,
                porgid: 111948
              },
              {
                orgtype: '12',
                orgname: '成都高新区高投科技小额贷款有限公司',
                orglevel: 3,
                orgid: 1000001086,
                porgid: 111948
              },
              {
                orgtype: '12',
                orgname: '成都市青羊区兴成小额贷款有限公司',
                orglevel: 3,
                orgid: 1000001087,
                porgid: 111948
              }
            ],
            orglevel: 2,
            orgid: 111948,
            porgid: 111918
          },
          {
            orgtype: '14',
            orgname: '合作保险机构',
            children: [
              {
                orgtype: '14',
                orgname: '锦泰财产保险股份有限公司',
                orglevel: 3,
                orgid: 111976,
                porgid: 111950
              }
            ],
            orglevel: 2,
            orgid: 111950,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '市本级',
            children: [
              { orgtype: '16', orgname: '审计单位', orglevel: 3, orgid: 111944, porgid: 111921 },
              { orgtype: '15', orgname: '外部律所', orglevel: 3, orgid: 111945, porgid: 111921 },
              {
                orgtype: '04',
                orgname: '财政金融监督管理局',
                orglevel: 3,
                orgid: 1000001080,
                porgid: 111921
              },
              { orgtype: '05', orgname: '市级部门', orgid: 111946, porgid: 111921 }
            ],
            orglevel: 2,
            orgid: 111921,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '天府新区',
            children: [{ orgtype: '04', orgname: '天府新区金融局', orglevel: 3, orgid: 1000001108, porgid: 111938 }],
            orglevel: 2,
            orgid: 111938,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '东部新区',
            children: [
              {
                orgtype: '04',
                orgname: '东部新区金融局',
                orglevel: 3,
                orgid: 1000001113,
                porgid: 1000001079
              }
            ],
            orglevel: 2,
            orgid: 1000001079,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '高新区',
            children: [{ orgtype: '04', orgname: '高新区金融局', orglevel: 3, orgid: 1000001101, porgid: 111922 }],
            orglevel: 2,
            orgid: 111922,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '锦江区',
            children: [
              { orgtype: '04', orgname: '锦江区金融局', orglevel: 3, orgid: 1000000281, porgid: 111923 },
              { orgtype: '05', orgname: '农业农村局', orgid: 1000000283, porgid: 111923 },
              { orgtype: '05', orgname: '商务局', orgid: 1000000284, porgid: 111923 }
            ],
            orglevel: 2,
            orgid: 111923,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '青羊区',
            children: [
              { orgtype: '04', orgname: '青羊区金融局', orglevel: 3, orgid: 1000001102, porgid: 111924 },
              { orgtype: '05', orgname: '商务局', orgid: 1100002517, porgid: 111924 },
              { orgtype: '05', orgname: '住建局', orgid: 1100002519, porgid: 111924 },
              { orgtype: '05', orgname: '经信局', orgid: 1100002520, porgid: 111924 },
              { orgtype: '05', orgname: '文广旅局', orgid: 1100002521, porgid: 111924 },
              { orgtype: '05', orgname: '卫健委', orgid: 1100002526, porgid: 111924 },
              { orgtype: '05', orgname: '人社局', orgid: 1100002527, porgid: 111924 },
              { orgtype: '05', orgname: '民政局', orgid: 1100002528, porgid: 111924 },
              { orgtype: '05', orgname: '财政局', orgid: 1100002529, porgid: 111924 },
              { orgtype: '05', orgname: '教育局', orgid: 1100002533, porgid: 111924 },
              { orgtype: '05', orgname: '发改委', orgid: 1100002534, porgid: 111924 },
              { orgtype: '05', orgname: '国资委', orgid: 1100002537, porgid: 111924 },
              { orgtype: '05', orgname: '博览局', orgid: 1100002539, porgid: 111924 },
              { orgtype: '05', orgname: '医保局', orgid: 1100002540, porgid: 111924 },
              { orgtype: '05', orgname: '投促局', orgid: 1100002541, porgid: 111924 }
            ],
            orglevel: 2,
            orgid: 111924,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '金牛区',
            children: [{ orgtype: '04', orgname: '金牛区金融局', orglevel: 3, orgid: 1000000874, porgid: 111925 }],
            orglevel: 2,
            orgid: 111925,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '武侯区',
            children: [{ orgtype: '04', orgname: '武侯区金融局', orglevel: 3, orgid: 1000001103, porgid: 111926 }],
            orglevel: 2,
            orgid: 111926,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '成华区',
            children: [{ orgtype: '04', orgname: '成华区金融局', orglevel: 3, orgid: 1000001104, porgid: 111927 }],
            orglevel: 2,
            orgid: 111927,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '龙泉驿区',
            children: [{ orgtype: '04', orgname: '龙泉驿区金融局', orglevel: 3, orgid: 1000001105, porgid: 111928 }],
            orglevel: 2,
            orgid: 111928,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '青白江区',
            children: [{ orgtype: '04', orgname: '青白江区金融局', orglevel: 3, orgid: 1000001095, porgid: 111929 }],
            orglevel: 2,
            orgid: 111929,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '新都区',
            children: [{ orgtype: '04', orgname: '新都区金融局', orglevel: 3, orgid: 1000001096, porgid: 111930 }],
            orglevel: 2,
            orgid: 111930,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '温江区',
            children: [{ orgtype: '04', orgname: '温江区金融局', orglevel: 3, orgid: 1000001097, porgid: 111931 }],
            orglevel: 2,
            orgid: 111931,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '双流区',
            children: [
              { orgtype: '04', orgname: '双流区金融局', orglevel: 3, orgid: 1000001098, porgid: 111932 },
              { orgtype: '05', orgname: '农业农村局', orgid: 1100002732, porgid: 111932 }
            ],
            orglevel: 2,
            orgid: 111932,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '郫都区',
            children: [{ orgtype: '04', orgname: '郫都区金融局', orglevel: 3, orgid: 1000001099, porgid: 111933 }],
            orglevel: 2,
            orgid: 111933,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '新津区',
            children: [
              { orgtype: '04', orgname: '新津区金融局', orglevel: 3, orgid: 1000001100, porgid: 111934 },
              { orgtype: '05', orgname: '经信局', orgid: 1100002790, porgid: 111934 },
              { orgtype: '05', orgname: '科技局', orgid: 1100002792, porgid: 111934 },
              { orgtype: '05', orgname: '民政局', orgid: 1100002798, porgid: 111934 },
              { orgtype: '05', orgname: '人社局', orgid: 1100002797, porgid: 111934 },
              { orgtype: '05', orgname: '交通运输局', orgid: 1100002795, porgid: 111934 },
              { orgtype: '05', orgname: '公园城市局', orgid: 1100002800, porgid: 111934 },
              { orgtype: '05', orgname: '农业农村局', orgid: 1100002786, porgid: 111934 },
              { orgtype: '05', orgname: '商务局', orgid: 1100002787, porgid: 111934 },
              { orgtype: '05', orgname: '文广旅局', orgid: 1100002791, porgid: 111934 }
            ],
            orglevel: 2,
            orgid: 111934,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '简阳市',
            children: [{ orgtype: '04', orgname: '简阳市金融局', orglevel: 3, orgid: 1000001112, porgid: 111943 }],
            orglevel: 2,
            orgid: 111943,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '都江堰市',
            children: [{ orgtype: '04', orgname: '都江堰市金融局', orglevel: 3, orgid: 1000001109, porgid: 111939 }],
            orglevel: 2,
            orgid: 111939,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '彭州市',
            children: [{ orgtype: '04', orgname: '彭州市金融局', orglevel: 3, orgid: 1000001115, porgid: 111940 }],
            orglevel: 2,
            orgid: 111940,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '邛崃市',
            children: [{ orgtype: '04', orgname: '邛崃市金融局', orglevel: 3, orgid: 1000001110, porgid: 111941 }],
            orglevel: 2,
            orgid: 111941,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '崇州市',
            children: [{ orgtype: '04', orgname: '崇州市金融局', orglevel: 3, orgid: 1000001111, porgid: 111942 }],
            orglevel: 2,
            orgid: 111942,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '金堂县',
            children: [{ orgtype: '04', orgname: '金堂县金融局', orglevel: 3, orgid: 1000001114, porgid: 111935 }],
            orglevel: 2,
            orgid: 111935,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '大邑县',
            children: [{ orgtype: '04', orgname: '大邑县金融局', orglevel: 3, orgid: 1000001106, porgid: 111936 }],
            orglevel: 2,
            orgid: 111936,
            porgid: 111918
          },
          {
            orgtype: '01',
            orgname: '蒲江县',
            children: [{ orgtype: '04', orgname: '蒲江县金融局', orglevel: 3, orgid: 1000001107, porgid: 111937 }],
            orglevel: 2,
            orgid: 111937,
            porgid: 111918
          }
        ],
        orglevel: 1,
        orgid: 111918,
        porgid: 1
      }
    ],
    orglevel: 0,
    orgid: 1,
    porgid: 1
  }
]

export default orgList
