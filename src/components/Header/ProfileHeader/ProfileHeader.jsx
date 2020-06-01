import { connect } from 'react-redux'
import { ProfileHeaderView } from './ProfileHeaderView'
import {
  isAuth,
  getViewer,
} from '../../../modules/viewer/viewerSelectors'
import { logout } from './../../../modules/viewer/viewerOperations'

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
  viewer: getViewer(state),
})

export const ProfileHeader = connect(mapStateToProps, { logout })(
  ProfileHeaderView,
)
