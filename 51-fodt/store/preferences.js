import cookieUniversal from 'cookie-universal'

const cookies = cookieUniversal()

export const state = () => ({
  theme: null,
})

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme
  },
}

export const actions = {
  setTheme(app, theme) {
    app.commit('setTheme', theme)
    cookies.set('theme', theme)
  },
}
