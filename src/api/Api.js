import axios from 'axios'
import { localStorage } from './../utils/localStorage/localStorage'
import SocketApi from './SocketApi'

export const Api = {
  _token: null,

  init() {
    try {
      const token = localStorage.token.get()
      if (token !== null) {
        this.setToken(token)
      }
    } catch (e) {
      console.log(e)
    }
  },

  _axiosSetToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },

  setToken(token) {
    this._token = token
    localStorage.token.set(token)
    this._axiosSetToken(token)
    SocketApi.init(token)
  },

  removeToken() {
    this._token = null
    this._axiosSetToken(null)
    localStorage.token.remove()
  },

  auth: {
    register: ({ email, password, fullName }) =>
      axios.post('/api/auth/register', { email, password, fullName }),

    login: ({ email, password }) =>
      axios.post('/api/auth/login', { email, password }),
  },

  viewer: {
    fetch: () => axios.get('/api/account'),
    editProfile: ({ fullName, avatar, phone }) =>
      axios.put('/api/account', {
        fullName,
        avatar,
        phone,
        location: null,
      }),
  },

  uploadImg: (image) => {
    const formData = new FormData()
    formData.append('image', image)
    return axios.post('/api/upload/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  products: {
    fetchLatest: () => axios.get('/api/products/latest?limit=20'),
    fetch: (id) => axios.get(`/api/products/${id}`),
    fetchSaved: () => axios.get('/api/products/saved'),
    addSaved: (id) => axios.post(`/api/products/${id}/saved`, {}),
    unSaved: (id) => axios.delete(`/api/products/${id}/saved`),
    search: (queri) => axios.get(`/api/products/search${queri}`),
    add: ({ title, description, photos, location, price }) =>
      axios.post('/api/products', {
        title,
        description,
        photos,
        location,
        price,
      }),
  },

  users: {
    get: (id) => axios.get(`/api/users/${id}`),
    getProducts: (id) => axios.get(`/api/users/${id}/products`),
  },

  chat: {
    create: (productId, message) =>
      axios.post(`/api/products/${productId}/createChat`, {
        message,
      }),
    fetchChats: () => axios.get('/api/chats'),

    fetchMessages: (chatId) =>
      axios.get(`/api/chats/${chatId}/messages`),

    fetchMoreMessages: (chatId, from) =>
      axios.get(`/api/chats/${chatId}/messages?from=${from}`),

    sendMessage: (chatId, message) =>
      axios.post(`/api/chats/${chatId}/messages`, { message }),
  },
}
