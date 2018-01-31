var webpack = require("webpack");
var path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var S3Plugin = require("webpack-s3-plugin");

// const AWS_ACCESS_KEY_ID = " AKIAJ4VUDGDJ5DPJGAQA ";
// const AWS_SECRET_ACCESS_KEY = "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";

// if (process.env.TARGET_ENV !== "dev") {
//   var s3Plugin = new S3Plugin({});

//   plugins.push(s3Plugin);
// }

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map",
    publicPath:
      "https://apigateway.us-east-1.amazonaws.com/bracket-factory-site/"
  },
  //looking at pre-compiled components in source code
  devtool: "#source-map",
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  plugins: [
    new S3Plugin({
      exclude: /.*\.html$/,
      s3Options: {
        region: "us-east-1",
        accessKeyId: "AKIAJ4VUDGDJ5DPJGAQA",
        secretAccessKey: "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"
      },
      s3UploadOptions: {
        Bucket: "bracket-factory-site"
      }
      // optionally, upload to a sub-folder
      // basePath: "folder-1"
    }),
    new UglifyJsPlugin({
      include: /.*\.src/,
      sourceMap: true
    })
  ]
};

// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   devtool: "cheap-eval-source-map",
//   entry: "./docs/entry.js",
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "bundle.js"
//   },
//   resolve: {
//     alias: {
//       bfstyles: path.join(__dirname, "src")
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader"
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
//     })
//   ],
//   devServer: {
//     contentBase: "docs/"
//   }
// };
