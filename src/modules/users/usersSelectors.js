import { createSelector } from 'reselect'

export const getUsersEntities = (state) => state.entities.users

const getEntitiesProducts = (state) => state.entities.products

export const getUser = createSelector(
  (state, id) => getUsersEntities(state)[id],
  (item) => item,
)

export const getUserProductsSelector = createSelector(
  (state, id) => {
    const products = getEntitiesProducts(state)
    return Object.values(products).filter(
      (product) => product.ownerId === +id,
    )
  },
  (items) => items,
)
