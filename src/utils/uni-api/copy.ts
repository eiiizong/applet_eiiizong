/**
 * 传入的参数是个对象
 * @param {object} option - 传入的对象参数
 * @param {string} option.name - 对象的 name 属性
 * @param {number} option.age - 对象的 age 属性
 */

/**
 * 传入的参数是个字符串组成的数组
 * @param {string[]} arr - 传入的对象参数
 */

/**
 * 表示某个参数是可选的
 * @param {number} a - 这是必填参数
 * @param {number} [b] - 这是可选参数
 * @param {number=} c - 可选参数的另一种表示
 */

/**
 * 表示可选参数的默认值
 * @param {number} a
 * @param {number} [b=3] - 默认值为 3
 */

/**
 * 参数类型的各种表示
 * @param {number} a - 类型为数字
 * @param {number|string} b - 类型为数字或字符串
 * @param {?number} c - 类型为数字或者为空（null）
 * @param {!number} d - 类型为数字且不为空
 * @param {*} e - 类型不做限制，即可以为任意类型
 */

/**
 * 表示具有任意多个参数的函数
 * 下面的函数返回所有传入参数的和
 * @param {...number} num - 参数个数任意，但是都是数字类型
 */
