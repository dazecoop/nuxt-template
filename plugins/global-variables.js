/**
 * Global variables
 */
export default (context, inject) => {
  inject('siteName', process.env.NUXT_ENV_SITE_NAME)
  inject('siteDomain', process.env.NUXT_ENV_SITE_DOMAIN)
}
