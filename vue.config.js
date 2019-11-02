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
        loaderOptions: {
            scss: {
                prependData: `@import "~@/sass/_shared.scss";`
            }
        }
    },
}
