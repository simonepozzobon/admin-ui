const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8082, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
        proxy: 'http://admin-ui.test'
    },
    configureWebpack: {
        plugins: [
            new PurgecssPlugin({
                paths: glob.sync([
                    path.join(__dirname, './src/**/*.vue'),
                    path.join(__dirname, './src/**/*.js')
                ])
            })
        ],
        externals: {
            // vue: 'vue',
            jQuery: 'jquery',
        },
    },
    chainWebpack: (config) => {
        // config.resolve.alias
        //     .set('vue$', 'vue/dist/vue.esm.js')
    },
    css: {
        extract: false,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/sass/_shared.scss";`
            }
        }
    },
}
