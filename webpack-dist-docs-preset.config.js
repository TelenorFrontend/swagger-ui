const path = require("path")
const styleRules = require("./webpack.dist-style.config.js")

let rules = [
  { test: /\.(worker\.js)(\?.*)?$/,
    use: [
      {
        loader: "worker-loader",
        options: {
          inline: true,
          name: "[name].js"
        }
      },
      { loader: "babel-loader" }
    ]
  }
]

module.exports = require("./make-webpack-config.js")(rules, {
  _special: {
    separateStylesheets: true,
    minimize: true,
    sourcemaps: true,
  },

  entry: {
    "swagger-ui-docs-preset": [
      "./src/polyfills",
      "./src/docs-preset/index.js"
    ]
  },

  output:  {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
    library: "SwaggerUIDocsPreset",
    libraryTarget: "umd",
    filename: "[name].js",
    chunkFilename: "js/[name].js",
  },

})
