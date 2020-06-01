import { createAsyncActions } from '@letapp/redux-actions'

export const fetchUser = createAsyncActions('user/FETCH')

export const getUserProducts = createAsyncActions('user/GET_PRODUCTS')
