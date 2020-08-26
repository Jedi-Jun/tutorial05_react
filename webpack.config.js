const path = require('path');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development', // 실제 서비스 production
    devtool: 'eval', // 실제 서비스 hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        App: ['./client'],
    },  // 입력
    module: {
        rules: [
          {
            test: /\.jsx?/,
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            }
          }
        ]
      },
    output: {
        filename: 'App.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }, // 출력
    devServer: {
        contentBase: '.'
    }

}