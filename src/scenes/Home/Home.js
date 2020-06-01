import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { HomeView } from './HomeView'
import { fetchLatestProduct } from './../../modules/products/productsOperations'
import { getLatestProducts } from '../../modules/products/productsSelectors'

const mapStateToProps = (state) => ({
  products: getLatestProducts(state),
})

const enhance = compose(
  connect(mapStateToProps, {
    fetchLatestProduct,
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatestProduct()
    },
  }),
)

export const Home = enhance(HomeView)
