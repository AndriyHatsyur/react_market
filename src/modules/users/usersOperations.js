import { Api } from '../../api/Api'
import * as actions from './usersActions'

import { userShema, productListShema } from './../../api/Shemas'
import { normalize } from 'normalizr'

export const fetchUser = (id) => async (dispatch) => {
  try {
    dispatch(actions.fetchUser.start())
    const res = await Api.users.get(id)
    const normalizrData = normalize(res.data, userShema)

    dispatch(actions.fetchUser.success(normalizrData))
  } catch (e) {
    dispatch(actions.fetchUser.error(e.response.data.error))
  }
}

export const getUserProducts = (id) => async (dispatch) => {
  try {
    dispatch(actions.getUserProducts.start())
    const res = await Api.users.getProducts(id)
    const normalizrData = normalize(res.data.list, productListShema)

    dispatch(actions.getUserProducts.success(normalizrData))
  } catch (e) {
    dispatch(actions.getUserProducts.error(e.response.data.error))
  }
}
