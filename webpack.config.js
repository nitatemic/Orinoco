module.exports = {
  entry: {
    index: "./src/index/index.js",
    product: "./src/product/index.js",
    cart: "./src/cart/index.js",
    checkout: "./src/checkout/index.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
