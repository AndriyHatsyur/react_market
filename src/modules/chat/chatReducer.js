import * as actions from './chatActions'

import { handleActions } from '@letapp/redux-actions'

const defaultState = {
  createChat: {
    isLoading: false,
    isError: false,
    error: null,
  },

  fetchChats: {
    isLoading: false,
    isError: false,
    error: null,
  },

  items: [],
}

export default handleActions(
  {
    [actions.createChat.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
      },
    }),
    [actions.createChat.success]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
      },
      items: [...state.items, action.payload.result],
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    // fetch chats

    [actions.fetchChats.start]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: true,
      },
    }),
    [actions.fetchChats.success]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
      },
      items: action.payload.result,
    }),
    [actions.fetchChats.error]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  defaultState,
)
