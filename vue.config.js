const fs = require('fs')
const path = require('path')

module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    },
    configureWebpack: {
        output: {
            filename: 'index.js',
            libraryTarget: 'umd'
            library: 'adminUi',
        },
        externals: {
            vue: 'vue',
            jQuery: 'jquery',
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.resolve(__dirname, 'src/assets/sass'))
    },
}
