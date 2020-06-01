import { handleActions, combineActions } from '@letapp/redux-actions'
import * as actions from './viewerActions'
import * as authActions from './../auth/authActions'

const defaultState = {
  fethViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  editViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
  isAuth: false,
}

export default handleActions(
  {
    [actions.fetchViewer.start]: (state) => ({
      ...state,
      fethViewer: {
        ...state.fethViewer,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [combineActions(
      actions.fetchViewer.success,
      authActions.login.success,
      authActions.register.success,
      actions.editViewer.success,
    )]: (state, action) => ({
      ...state,
      fethViewer: {
        ...state.fethViewer,
        isLoading: false,
      },
      user: action.payload,
      isAuth: true,
    }),
    [actions.fetchViewer.error]: (state, action) => ({
      ...state,
      fethViewer: {
        ...state.fethViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      isAuth: false,
    }),
    [actions.removeViewer]: (state) => ({
      ...state,
      user: null,
      isAuth: false,
    }),

    [actions.editViewer.start]: (state) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.editViewer.success]: (state, action) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
      },
    }),
    [actions.editViewer.error]: (state, action) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      isAuth: false,
    }),
  },
  defaultState,
)
