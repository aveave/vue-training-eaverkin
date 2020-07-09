module.exports = {
    chainWebpack: config => {
        config.module
            .rule('graphql')
            .test(/\.graphql$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader')
            .end()

            .use('vue-style-loader')
            .loader('vue-style-loader')
            .end()
            
            .use('babel-loader')
            .loader('babel-loader')
            .end()
    }
}