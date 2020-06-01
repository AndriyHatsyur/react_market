import {
  compose,
  branch,
  renderComponent,
  lifecycle,
  withProps,
} from 'recompose'
import { connect } from 'react-redux'
import { HomeView } from '../Home/HomeView'
import {
  getSearchProducts,
  isNextPageSearch,
} from '../../modules/products/productsSelectors'
import {
  searchProducts,
  savedUnsavedProduct,
  fetchMoreSearchProducts,
} from './../../modules/products/productsOperations'
import { isSearchLoading } from './../../modules/products/productsSelectors'
import { Spinner } from './../../components/Spinner/Spinner'
import { withRouter } from 'react-router-dom'
import { routes } from '../../routes/routes'

const mapStateToProps = (state) => ({
  products: getSearchProducts(state),
  isLoading: isSearchLoading(state),
  isNextPage: isNextPageSearch(state),
})

const spinnerWhileLoading = (isLoading) =>
  branch(isLoading, renderComponent(Spinner))

const enhancer = compose(
  connect(mapStateToProps, {
    searchProducts,
    savedUnsavedProduct,
    fetchMoreSearchProducts,
  }),
  withRouter,
  withProps(({ history, fetchMoreSearchProducts }) => ({
    query: history.location.search,
    fetchMore: () => {
      const query = new URLSearchParams(history.location.search)

      const limit = query.get('limit')
      const offset = +query.get('offset') + +limit
      query.set('offset', offset)

      fetchMoreSearchProducts(
        `?${query.toString()}`,
        query.get('limit'),
      )
      history.push({
        pathname: routes.search.path,

        search: query.toString(),
      })
    },
  })),

  lifecycle({
    componentDidMount() {
      const query = new URLSearchParams(
        this.props.history.location.search,
      )
      this.props.searchProducts(this.props.query, query.get('limit'))
    },
  }),
  spinnerWhileLoading(({ isLoading }) => isLoading),
)

export const Searh = enhancer(HomeView)
