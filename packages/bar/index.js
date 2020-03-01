import foo from '@very-geek/foo';

module.exports = function bar() {
  // prepend version info from foo package to the output
  return `${foo()} with @very-geek/bar@1.x`;
};
