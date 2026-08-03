const path = require('path');

module.exports = {
    mode: 'development',
    entry: './frontend/index.js',
    output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [ // para que a modularização funcione, devo add que os módulos devem ser compilados pelo commonjs
                    ['@babel/preset-env', { modules: 'commonjs' }]
                ],
                sourceType: 'module'
            }
        }
        },
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
        }
    ]
    },
    devtool: 'source-map'
};