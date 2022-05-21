export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aqsha-ber',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/modal.js',
    '~plugins/vmask.js',
    '~plugins/axios.js',
    '~plugins/click_outside.js',
    '~plugins/vuelidate.js',
    {src:"~plugins/watchWindow.js",mode:"client"},
    {src:"~plugins/token.js",mode:"client"},
    {src:"~plugins/perms.js",mode:"client"},
    {src:"~plugins/dateFns.js"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy:true
  },
  proxy:{
    "/api":{
      target:"https://bis.kreditomat.kz:4624",
      pathRewrite:{
        '^/api/':'/apiv2/'
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
