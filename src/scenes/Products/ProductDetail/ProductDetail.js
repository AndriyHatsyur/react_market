import {
  compose,
  withProps,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose'
import { withRouter } from 'react-router-dom'
import { ProductDetailView } from './ProductDetailView'
import { connect } from 'react-redux'
import { fetchProduct } from '../../../modules/products/productsOperations'
import {
  getProductSelector,
  getProductOwnerSelector,
} from '../../../modules/products/productsSelectors'
import { savedUnsavedProduct } from '../../../modules/products/productsOperations'

const mapStateToProps = (state, props) => ({
  product: getProductSelector(state, props.productId),
  owner: getProductOwnerSelector(state, props.productId),
})

const enhancer = compose(
  withRouter,
  withState('isModal', 'setModal', false),
  withProps(({ match }) => ({
    productId: match.params.id,
  })),
  connect(mapStateToProps, { fetchProduct, savedUnsavedProduct }),
  lifecycle({
    componentDidMount() {
      this.props.fetchProduct(this.props.productId)
    },
  }),
  withHandlers({
    closeModal: ({ setModal }) => () => setModal(false),
    openModal: ({ setModal }) => () => setModal(true),
    saveUnsave: ({ savedUnsavedProduct, product }) => () => {
      savedUnsavedProduct(product)
    },
  }),
)

export const ProductDetail = enhancer(ProductDetailView)
