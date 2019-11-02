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
        externals: {
            vue: 'vue',
            jQuery: 'jquery',
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.resolve(__dirname, 'src/assets/sass'))

        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
    },
}
