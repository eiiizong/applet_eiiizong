module.exports = {
  printWidth: 120, // 代码单行长度
  tabWidth: 2, // tab键缩进为2空格
  useTabs: false, // 是否使用tabs缩进
  singleQuote: true, // 用单引号
  semi: false, // 句末是否加分号
  bracketSameLine: true, // 标签换行后>单独一行
  vueIndentScriptAndStyle: true,
  trailingComma: 'none', // 最后一个对象元素不加逗号
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: true, // jsx > 是否另起一行
  arrowParens: 'always', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false // 不需要自动在文件开头插入 @prettier
}
