const GasPlugin = require("gas-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  target: ["web", "es2020"],  // アロー関数を function に置き換えるため
  context: __dirname,
  entry: "./src/app.ts",
  output: {
    path: `${__dirname}/public`,  // 書き出し先に GAS へのデプロイディレクトリを指定
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'  // typescript をトランスパイルするため
      }
    ]
  },
  resolve: {
    extensions: [".ts"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' })  // import でエイリアスを使うため
    ]
  },
  plugins: [
    new GasPlugin({ autoGlobalExportsFiles: ['**/*.ts'] })  // GAS 用のトランスパイルのため
  ],
  devtool: 'cheap-module-source-map'
}