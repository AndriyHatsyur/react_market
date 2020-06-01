import * as actions from './productsActions'

import { handleActions, combineActions } from '@letapp/redux-actions'

const defaultState = {
  latest: {
    isLoading: false,
    isError: false,
    error: null,
    items: [],
  },
  saved: {
    isLoading: false,
    isError: false,
    error: null,
    items: [],
  },
  savedUnsaved: {
    isLoading: false,
    isError: false,
    error: null,
  },
  search: {
    isLoading: false,
    isError: false,
    error: null,
    isNextPage: true,
    items: [],
  },
  addProduct: {
    isLoading: false,
    isError: false,
    error: null,
  },
  fetchProduct: {
    isLoading: false,
    isError: false,
    error: null,
  },
}

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    //saved products

    [actions.fetchSaved.start]: (state) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: true,
      },
    }),
    [actions.fetchSaved.success]: (state, action) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    //saved unsaved products

    [actions.savedUnsaved.start]: (state) => ({
      ...state,
      savedUnsaved: {
        ...state.savedUnsaved,
        isLoading: true,
      },
    }),
    [actions.savedUnsaved.success]: (state) => ({
      ...state,
      savedUnsaved: {
        ...state.savedUnsaved,
        isLoading: false,
      },
    }),
    [actions.savedUnsaved.error]: (state, action) => ({
      ...state,
      savedUnsaved: {
        ...state.savedUnsaved,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    // search

    [combineActions(
      actions.search.start,
      actions.fetchMoreSearchProduct.start,
    )]: (state) => ({
      ...state,
      search: {
        ...state.search,
        isLoading: true,
      },
    }),
    [actions.search.success]: (state, action) => ({
      ...state,
      search: {
        ...state.search,
        isLoading: false,
        isNextPage: action.payload.isNextPage,
        items: action.payload.result,
      },
    }),
    [combineActions(
      actions.search.error,
      actions.fetchMoreSearchProduct.error,
    )]: (state, action) => ({
      ...state,
      search: {
        ...state.search,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [actions.fetchMoreSearchProduct.success]: (state, action) => ({
      ...state,
      search: {
        ...state.search,
        isLoading: false,
        isNextPage: action.payload.isNextPage,
        items: [...state.search.items, ...action.payload.result],
      },
    }),

    // add product

    [actions.addProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
      },
    }),
    [actions.addProduct.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },
    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    // fetch product

    [actions.fetchProduct.start]: (state) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: true,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },

  defaultState,
)
