export const routes = {
  home: {
    path: '/',
    name: 'Home',
  },

  auth: {
    path: '/auth',
  },
  register: {
    path: '/auth/register',
    name: 'Register',
  },
  login: {
    path: '/auth/login',
    name: 'Login',
  },

  viewer: {
    path: '/account',
    editProfile: {
      path: '/account/edit',
      name: 'Edit profile',
    },
    sell: {
      path: '/account/sell',
      name: 'sell',
    },
  },

  products: {
    path: '/products',
    saved: {
      path: '/products/saved',
      name: 'Products saved',
    },
    detail: {
      path: '/products/:id',
    },
    contactsSeller: {
      path: '/products/:id/contacts-seller/',
    },
  },

  search: {
    path: '/search',
  },

  userProducts: {
    path: '/users/:id/products',
  },

  chats: {
    path: '/chats',
    messages: {
      path: '/chats/:id',
    },
  },
}
