import { UserProductsView } from './UserProductsView'
import { compose, lifecycle } from 'recompose'
import { getUser } from '../../modules/users/usersSelectors'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchUser,
  getUserProducts,
} from '../../modules/users/usersOperations'
import { getUserProductsSelector } from './../../modules/users/usersSelectors'

const mapStateToProps = (state, props) => ({
  user: getUser(state, props.match.params.id),
  products: getUserProductsSelector(state, props.match.params.id),
})

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, { fetchUser, getUserProducts }),
  lifecycle({
    componentDidMount() {
      this.props.fetchUser(this.props.match.params.id)
      this.props.getUserProducts(this.props.match.params.id)
    },
  }),
)

export const UserProducts = enhancer(UserProductsView)
