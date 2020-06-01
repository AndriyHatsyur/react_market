import * as actions from './appActions'

import { handleActions } from '@letapp/redux-actions'

const defaultState = {
  isLoading: false,
  isError: false,
  error: null,
}

export default handleActions(
  {
    [actions.initializations.start]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.initializations.success]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [actions.initializations.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload,
    }),
  },
  defaultState,
)
