const { defineConfig } = require('@vue/cli-service')
module.exports = {
    outputDir: './wwwroot/dist',
    lintOnSave: false,
    productionSourceMap: true,
    filenameHashing: false,
    css: {
        extract: {
            filename: '[name].css'
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: false,
            minimize: false
        },
        output: {
            filename: '[name].js'
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm-browser.js'
            }
        }
    },
}
