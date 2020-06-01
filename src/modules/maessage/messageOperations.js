import * as actions from './messageActions'
import { Api } from '../../api/Api'

import { messageShema, messageShemaList } from './../../api/Shemas'
import { normalize } from 'normalizr'
import { createMessage } from './messagesCreator'
import { getViewer } from '../viewer/viewerSelectors'

export const sendMessage = (chatId, text) => async (
  dispatch,
  getState,
) => {
  const owner = getViewer(getState())

  const message = createMessage({ chatId, ownerId: owner.id, text })

  const normalizeData = normalize(message, messageShema)

  try {
    dispatch(actions.sendMessage.start({ chatId, ...normalizeData }))

    const res = await Api.chat.sendMessage(chatId, text)

    const newNormalizeData = normalize(res.data, messageShema)

    dispatch(
      actions.sendMessage.success({
        chatId,
        oldId: message.id,
        ...newNormalizeData,
      }),
    )
  } catch (e) {
    dispatch(actions.sendMessage.error(e))
  }
}

export const fetchMessage = (chatId) => async (dispatch) => {
  try {
    dispatch(actions.fetchMessages.start())

    const res = await Api.chat.fetchMessages(chatId)

    const normalizeData = normalize(res.data, messageShemaList)

    const isNextPage = normalizeData.result.length < 20 ? false : true

    dispatch(
      actions.fetchMessages.success({
        chatId,
        isNextPage,
        ...normalizeData,
      }),
    )
  } catch (e) {
    dispatch(actions.fetchMessages.error(e))
  }
}

export const handleMessageRealtime = (evet) => (dispatch) => {
  if (evet.type === 'ADD') {
    const normalizeData = normalize(evet.message, messageShema)
    dispatch(
      actions.sendMessage.success({
        chatId: evet.message.chatId,
        ...normalizeData,
      }),
    )
  }
}

export const fetchMoreMessages = (chatId, from) => async (
  dispatch,
) => {
  try {
    dispatch(actions.fetchMore.start())

    const res = await Api.chat.fetchMoreMessages(chatId, from)

    const normalizeData = normalize(res.data, messageShemaList)

    const isNextPage = normalizeData.result.length < 20 ? false : true

    dispatch(
      actions.fetchMore.success({
        chatId,
        isNextPage,
        ...normalizeData,
      }),
    )
  } catch (e) {
    dispatch(actions.fetchMore.error(e))
  }
}
