module.exports = {
  plugins: [
    // relative paths are usually required so Prettier can find the plugin
    './node_modules/prettier-plugin-multiline-arrays/dist/index.js', // plugin added here
  ],
  multilineArraysLinePattern: "16",
  // multilineArraysWrapThreshold: 8,
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
};
