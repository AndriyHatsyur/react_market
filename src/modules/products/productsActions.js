import { createAsyncActions } from '@letapp/redux-actions'

export const fetchLatest = createAsyncActions('products/FETCH_LATEST')

export const fetchSaved = createAsyncActions('products/FETCH_SAVED')

export const savedUnsaved = createAsyncActions(
  'products/SAVED_UNSAVED',
)

export const search = createAsyncActions('products/SEARCH')

export const addProduct = createAsyncActions('products/ADD')

export const fetchProduct = createAsyncActions('products/FETCH')

export const fetchMoreSearchProduct = createAsyncActions(
  'products/FETCH_MORE_SEARCH',
)
