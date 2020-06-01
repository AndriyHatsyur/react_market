import { schema } from 'normalizr'

export const userShema = new schema.Entity('users')

export const productShema = new schema.Entity('products', {
  owner: userShema,
})

export const messageShema = new schema.Entity('messages')

export const messageShemaList = [messageShema]

export const productListShema = new schema.Array(productShema)

export const chatShema = new schema.Entity('chats', {
  message: messageShema,
  product: productShema,
  participants: [userShema],
})

export const chatShemaList = [chatShema]
