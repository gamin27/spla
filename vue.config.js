module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  },
  pwa: {
    name: 'Spla AI',
    // themeColor: '#4DBA87',
    // msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    // swSrc is required in InjectManifest mode.
    // swSrc: 'dev/sw.js',
    // ...other Workbox options...
    // },
  },
}
