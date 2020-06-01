function getItem(key) {
  const item = window.localStorage.getItem(key)
  return JSON.parse(item)
}

function setItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const localStorage = {
  token: {
    get() {
      return getItem('token')
    },

    set(token) {
      setItem('token', token)
    },

    remove() {
      window.localStorage.removeItem('token')
    },
  },
}
