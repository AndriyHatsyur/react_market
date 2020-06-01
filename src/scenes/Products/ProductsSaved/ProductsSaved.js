import { ProductsSavedView } from './ProductsSavedView'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getSavedProducts } from '../../../modules/products/productsSelectors'
import { fetchSavedProduct } from './../../../modules/products/productsOperations'

const mapStateToProps = (state) => ({
  products: getSavedProducts(state),
})

const enhancer = compose(
  connect(mapStateToProps, {
    fetchSavedProduct,
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSavedProduct()
    },
  }),
)

export const ProductsSaved = enhancer(ProductsSavedView)
