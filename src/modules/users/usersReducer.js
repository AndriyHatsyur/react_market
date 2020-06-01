import * as actions from './authActions'

import { handleActions } from '@letapp/redux-actions'

const defaultState = {
  userFetch: {
    isLoading: false,
    isError: false,
    error: null,
  },

  getProducts: {
    isLoading: false,
    isError: false,
    error: null,
  },
}

export default handleActions(
  {
    [actions.fetchUser.start]: (state) => ({
      ...state,
      userFetch: {
        ...state.userFetch,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.fetchUser.success]: (state) => ({
      ...state,
      userFetch: {
        ...state.userFetch,
        isLoading: false,
      },
    }),
    [actions.fetchUser.error]: (state, action) => ({
      ...state,
      userFetch: {
        ...state.userFetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    // get products

    [actions.getUserProducts.start]: (state) => ({
      ...state,
      getProducts: {
        ...state.getProducts,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.getUserProducts.success]: (state) => ({
      ...state,
      getProducts: {
        ...state.getProducts,
        isLoading: false,
      },
    }),
    [actions.getUserProducts.error]: (state, action) => ({
      ...state,
      getProducts: {
        ...state.getProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  defaultState,
)
