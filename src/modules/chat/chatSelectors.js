import { createSelector } from 'reselect'
import { getMessagesEntities } from '../maessage/messageSelectors'
import { getProductEntities } from './../products/productsSelectors'
import { getUsersEntities } from '../users/usersSelectors'

const getChatsEntites = (state) => state.entities.chats

const getChatsIds = (state) => state.chats.items

export const getChatsSelector = createSelector(
  [
    getChatsIds,
    getChatsEntites,
    getProductEntities,
    getMessagesEntities,
    getUsersEntities,
  ],
  (chatIds, chats, products, messages, users) =>
    chatIds.map((id) => ({
      ...chats[id],
      message: messages[chats[id].message],
      product: products[chats[id].product],
      participant: users[chats[id].participants[0]],
    })),
)

export const getChatSelector = createSelector(
  (state, id) => {
    const chats = getChatsSelector(state)

    return chats.find((chat) => chat.id === +id)
  },
  (item) => item,
)
