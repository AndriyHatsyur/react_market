import { Api } from '../../api/Api'
import * as actions from './chatActions'

import { chatShema, chatShemaList } from './../../api/Shemas'
import { normalize } from 'normalizr'

export const createChat = (productId, message) => async (
  dispatch,
) => {
  try {
    dispatch(actions.createChat.start())

    const res = await Api.chat.create(productId, message)

    const normalizedData = normalize(res.data, chatShema)

    dispatch(actions.createChat.success(normalizedData))

    return res.data.id
  } catch (e) {
    dispatch(actions.createChat.error(e))
    throw e
  }
}

export const fetchChats = () => async (dispatch) => {
  try {
    dispatch(actions.fetchChats.start())

    const res = await Api.chat.fetchChats()

    const normalizedData = normalize(res.data, chatShemaList)

    dispatch(actions.fetchChats.success(normalizedData))
  } catch (e) {
    dispatch(actions.fetchChats.error(e))
  }
}
