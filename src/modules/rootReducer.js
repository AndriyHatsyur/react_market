import { combineReducers } from 'redux'
import app from './app/appReducer'
import auth from './auth/authReducer'
import viewer from './viewer/viewerReducer'
import entities from './entities/entitiesReducer'
import products from './products/productsReducer'
import messages from './maessage/messageReducer'

import chats from './chat/chatReducer'
export const rootReducer = combineReducers({
  app,
  auth,
  viewer,
  entities,
  products,
  chats,
  messages,
})
