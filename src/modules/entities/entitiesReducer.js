import * as actions from './../maessage/messageActions'

const defaultState = {
  products: {},
  users: {},
  chats: {},
  messages: {},
}

const entitiesReducer = (state = defaultState, action) => {
  if (action.payload && action.payload.entities) {
    const entitiesKeys = Object.keys(action.payload.entities)

    state = entitiesKeys.reduce(
      (accState, entityKey) => ({
        ...accState,
        [entityKey]: {
          ...accState[entityKey],
          ...action.payload.entities[entityKey],
        },
      }),
      state,
    )
  }

  if (action.type === actions.sendMessage.success().type) {
    state = {
      ...state,
      chats: {
        ...state.chats,
        [action.payload.chatId]: {
          ...state.chats[action.payload.chatId],
          message: action.payload.result,
        },
      },
    }
  }

  return state
}

export default entitiesReducer
