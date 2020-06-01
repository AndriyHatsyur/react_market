import { Api } from '../../api/Api'
import * as actions from './viewerActions'
import { string } from 'prop-types'

export const fetchViewer = () => async (dispatch) => {
  try {
    dispatch(actions.fetchViewer.start())
    const response = await Api.viewer.fetch()
    dispatch(actions.fetchViewer.success(response.data))
  } catch (e) {
    dispatch(actions.fetchViewer.error(e.response.data.error))
  }
}

export const logout = () => (dispatch) => {
  dispatch(actions.removeViewer())
  Api.removeToken()
}

export const editProfile = ({ fullName, avatar, phone }) => async (
  dispatch,
) => {
  try {
    dispatch(actions.editViewer.start())
    if (typeof avatar === string) {
      const response = await Api.uploadImg(avatar)
      avatar = response.data
    }
    const res = await Api.viewer.editProfile({
      fullName,
      phone,
      avatar,
    })
    dispatch(actions.editViewer.success(res.data))
  } catch (e) {
    console.log(e.response.data.error)
    dispatch(actions.editViewer.error(e.response.data.error))
  }
}
