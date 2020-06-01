import { connect } from 'react-redux'
import { SearchHeaderView } from './SearchHeaderView'
import {
  isAuth,
  getViewer,
} from '../../modules/viewer/viewerSelectors'
import { logout } from './../../modules/viewer/viewerOperations'

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
  viewer: getViewer(state),
})

export const SearchHeader = connect(mapStateToProps, { logout })(
  SearchHeaderView,
)
