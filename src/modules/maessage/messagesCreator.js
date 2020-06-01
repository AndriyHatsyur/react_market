import { v4 as uuid } from 'uuid'

export const createMessage = ({ chatId, ownerId, text }) => ({
  id: uuid(),
  chatId: chatId,
  ownerId: ownerId,
  text: text,
  read: true,
  createdAt: new Date().getTime(),
  updatedAt: null,
})
