import foo from '@very-geek/foo';

module.exports = function bar() {
  // prepend version info from foo package to the output
  // 为输出结果追加 foo 的版本信息
  return `${foo()} with @very-geek/bar@1.x`;
};
