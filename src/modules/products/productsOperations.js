import { Api } from '../../api/Api'
import * as actions from './productsActions'
import { productListShema, productShema } from './../../api/Shemas'
import { normalize } from 'normalizr'

export const fetchLatestProduct = () => async (dispatch) => {
  try {
    dispatch(actions.fetchLatest.start())

    const res = await Api.products.fetchLatest()
    const normalizrData = normalize(res.data, productListShema)
    dispatch(actions.fetchLatest.success(normalizrData))
  } catch (e) {
    dispatch(actions.fetchLatest.error(e))
  }
}

export const fetchSavedProduct = () => async (dispatch) => {
  try {
    dispatch(actions.fetchSaved.start())

    const res = await Api.products.fetchSaved()
    const normalizrData = normalize(res.data, productListShema)
    dispatch(actions.fetchSaved.success(normalizrData))
  } catch (e) {
    dispatch(actions.fetchSaved.error(e.response.data.error))
  }
}

export const savedUnsavedProduct = (product) => async (dispatch) => {
  const productNew = {
    ...product,
    saved: !product.saved,
  }
  try {
    dispatch(actions.savedUnsaved.start())
    const normalizrData = normalize(productNew, productShema)
    dispatch(actions.savedUnsaved.success(normalizrData))

    if (productNew.saved) {
      await Api.products.addSaved(productNew.id)
    } else {
      await Api.products.unSaved(productNew.id)
    }
  } catch (e) {
    dispatch(actions.savedUnsaved.error(e.response.data.error))
  }
}

export const searchProducts = (query, limit = 20) => async (
  dispatch,
) => {
  try {
    dispatch(actions.search.start())

    const res = await Api.products.search(query)
    const normalizrData = normalize(res.data, productListShema)
    const isNextPage =
      normalizrData.result.length < limit ? false : true

    dispatch(actions.search.success({ isNextPage, ...normalizrData }))
  } catch (e) {
    dispatch(actions.search.error(e.response.data.error))
  }
}

export const fetchMoreSearchProducts = (query, limit = 20) => async (
  dispatch,
) => {
  try {
    dispatch(actions.fetchMoreSearchProduct.start())

    const res = await Api.products.search(query)
    const normalizrData = normalize(res.data, productListShema)
    const isNextPage =
      normalizrData.result.length < limit ? false : true

    dispatch(
      actions.fetchMoreSearchProduct.success({
        isNextPage,
        ...normalizrData,
      }),
    )
  } catch (e) {
    dispatch(
      actions.fetchMoreSearchProduct.error(e.response.data.error),
    )
  }
}

export const addProduct = ({
  title,
  description,
  photos,
  location,
  price,
}) => async (dispatch) => {
  try {
    dispatch(actions.addProduct.start())

    const res = await Api.products.add({
      title,
      description,
      photos,
      location,
      price,
    })
    console.log(res)
    const normalizrData = normalize(res.data, productShema)

    dispatch(actions.addProduct.success(normalizrData))
  } catch (e) {
    dispatch(actions.addProduct.error(e.response.data.error))
  }
}

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(actions.fetchProduct.start())

    const res = await Api.products.fetch(id)
    const normalizrData = normalize(res.data, productShema)

    dispatch(actions.fetchProduct.success(normalizrData))
  } catch (e) {
    dispatch(actions.fetchProduct.error(e.response.data.error))
  }
}
