import { Api } from './../../api/Api'
import * as actions from './appActions'
import { fetchViewer } from '../viewer/viewerOperations'
import SocketApi from '../../api/SocketApi'
import { handleMessageRealtime } from './../maessage/messageOperations'

export const init = () => async (dispatch) => {
  try {
    dispatch(actions.initializations.start())
    Api.init()
    SocketApi.handleMessages((message) => {
      dispatch(handleMessageRealtime(message))
    })
    await dispatch(fetchViewer())
    dispatch(actions.initializations.success())
  } catch (e) {
    dispatch(actions.initializations.error(e))
  }
}
