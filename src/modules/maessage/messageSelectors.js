import { createSelector } from 'reselect'

const getMessagesIds = (state, chatId) => state.messages.items[chatId]

export const getMessagesEntities = (state) => state.entities.messages

export const getMessagesSelector = createSelector(
  (state, chatId) => {
    const messagesIds = getMessagesIds(state, chatId) || []
    const messages = getMessagesEntities(state) || []

    return [...messagesIds.map((id) => messages[id])]
  },

  (items) => items,
)

export const isMessagesLoading = (state) =>
  state.messages.fetchMessages.isLoading

export const isMessgesHasNextPage = (state) =>
  state.messages.fetchMore.isNextPage
