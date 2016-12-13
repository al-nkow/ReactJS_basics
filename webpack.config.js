var webpack = require('webpack');
var path    = require('path'); // path of application

var DIST_DIR = path.resolve(__dirname, 'dist'); // dist folder
var SRC_DIR  = path.resolve(__dirname, 'src'); // src folder

var config = {
    entry: SRC_DIR + '/app/index.js', // точка входа
    output: { // результат
        path: DIST_DIR + '/app', // куда складываем
        filename: 'bundle.js', // собираем все в файл bundle.js
        publicPath: '/app/' // deploy
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;