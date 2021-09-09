module.exports = {
  entry: {
    index: "./src/js/index/index.js",
    product: "./src/js/product/index.js",
    checkout: "./src/js/checkout/index.js",
    thankyou: "./src/js/thankyou/index.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
};
