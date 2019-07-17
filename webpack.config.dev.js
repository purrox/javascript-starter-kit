import path from 'path';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
      path.resolve(__dirname,'src/index')
  ],
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[],
  module:{
    rules:[
      {test:/\.js$/, exclude: /node_modules/, loader:['babel-loader'] },
      {test:/\.css$/, loader:['style','css'] }
    ]
  }

}
