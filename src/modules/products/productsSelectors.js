import { createSelector } from 'reselect'
import { getUsersEntities } from '../users/usersSelectors'

const getLatestProductIds = (state) => state.products.latest.items

const getSavedProductIds = (state) => state.products.saved.items

const getSearchProductsIds = (state) => state.products.search.items

export const getProductEntities = (state) => state.entities.products

export const getLatestProducts = createSelector(
  [getLatestProductIds, getProductEntities],
  (productIds, products) => productIds.map((id) => products[id]),
)

export const getSavedProducts = createSelector(
  [getSavedProductIds, getProductEntities],
  (productIds, products) => productIds.map((id) => products[id]),
)

export const getSearchProducts = createSelector(
  [getSearchProductsIds, getProductEntities],
  (productIds, products) => productIds.map((id) => products[id]),
)

export const isSearchLoading = (state) =>
  state.products.search.isLoading

export const isAddproductLoading = (state) =>
  state.products.addProduct.isLoading

export const isAddproductError = (state) =>
  state.products.addProduct.isError

export const getAddproductError = (state) =>
  state.products.addProduct.error

export const getProductSelector = createSelector(
  (state, id) => getProductEntities(state)[id],
  (item) => item,
)

export const getProductOwnerSelector = createSelector(
  (state, productId) => {
    const product = getProductEntities(state)[productId]
    const owners = getUsersEntities(state)
    if (!product) return
    return owners[product.ownerId]
  },
  (item) => item,
)

export const isNextPageSearch = (state) =>
  state.products.search.isNextPage
