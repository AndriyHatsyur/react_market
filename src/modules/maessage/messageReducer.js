import * as actions from './messageActions'

import { handleActions } from '@letapp/redux-actions'

const defaultState = {
  sendMessage: {
    isLoading: false,
    isError: false,
    error: null,
  },

  fetchMessages: {
    isLoading: false,
    isError: false,
    error: null,
  },

  fetchMore: {
    isLoading: false,
    isError: false,
    error: null,
    isNextPage: false,
  },

  items: {
    // [chatId] : []
  },
}

export default handleActions(
  {
    [actions.sendMessage.start]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
      },
      items: {
        ...state.items,
        [action.payload.chatId]: [
          ...state.items[action.payload.chatId],
          action.payload.result,
        ],
      },
    }),
    [actions.sendMessage.success]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
      },
      items: {
        ...state.items,
        [action.payload.chatId]: [
          ...state.items[action.payload.chatId].filter(
            (id) => id !== action.payload.oldId,
          ),
          action.payload.result,
        ],
      },
    }),
    [actions.sendMessage.error]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    // fetch messages

    [actions.fetchMessages.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
      },
    }),
    [actions.fetchMessages.success]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
      },
      fetchMore: {
        ...state.fetchMore,
        isNextPage: action.payload.isNextPage,
      },
      items: {
        ...state.items,
        [action.payload.chatId]: action.payload.result.reverse(),
      },
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    //fetch more

    [actions.fetchMore.start]: (state) => ({
      ...state,
      fetchMore: {
        ...state.fetchMore,
        isLoading: true,
      },
    }),
    [actions.fetchMore.success]: (state, action) => ({
      ...state,
      fetchMore: {
        ...state.fetchMore,
        isLoading: false,
        isNextPage: action.payload.isNextPage,
      },
      items: {
        ...state.items,
        [action.payload.chatId]: state.items[action.payload.chatId]
          ? action.payload.result
              .reverse()
              .concat(state.items[action.payload.chatId])
          : action.payload.result.reverse(),
      },
    }),
    [actions.fetchMore.error]: (state, action) => ({
      ...state,
      fetchMore: {
        ...state.fetchMore,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  defaultState,
)
