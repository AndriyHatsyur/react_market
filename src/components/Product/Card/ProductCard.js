import { connect } from 'react-redux'
import { ProductCardView } from './ProductCardView'
import { savedUnsavedProduct } from '../../../modules/products/productsOperations'

export const ProductCard = connect(null, { savedUnsavedProduct })(
  ProductCardView,
)
