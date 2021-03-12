import cookieUniversal from 'cookie-universal'

export default ({ req, res, store }) => {
  const cookies = cookieUniversal(req, res)

  store.commit('preferences/setTheme', cookies.get('theme') || 'default')
}
