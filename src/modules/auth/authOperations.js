import { Api } from '../../api/Api'
import * as actions from './authActions'
import SocketApi from '../../api/SocketApi'
import { handleMessageRealtime } from './../maessage/messageOperations'

export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(actions.login.start())
    const response = await Api.auth.login({ email, password })
    const { token, user } = response.data
    Api.setToken(token)
    SocketApi.handleMessages((message) => {
      dispatch(handleMessageRealtime(message))
    })
    dispatch(actions.login.success(user))
  } catch (e) {
    dispatch(actions.login.error(e.response.data.error))
  }
}

export const register = ({ fullName, email, password }) => async (
  dispatch,
) => {
  try {
    dispatch(actions.register.start())
    const response = await Api.auth.register({
      fullName,
      email,
      password,
    })
    const { token, user } = response.data
    Api.setToken(token)
    dispatch(actions.register.success(user))
  } catch (e) {
    dispatch(actions.register.error(e.response.data.error))
  }
}
