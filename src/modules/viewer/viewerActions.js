import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions'

export const fetchViewer = createAsyncActions('viewer/FETCH_VIEWER')

export const removeViewer = createAction('viewer/REMOVE_VIEWER')

export const editViewer = createAsyncActions('viewer/EDIT_VIEWER')
