import { LoginFormComponent } from './LoginFormComponent'
import { connect } from 'react-redux'
import { login } from './../../../modules/auth/authOperations'
import {
  isLoginError,
  getLoginError,
  isLoginLoading,
} from '../../../modules/auth/authSelectors'

const mapStateToProps = (state) => ({
  isError: isLoginError(state),
  errorMessage: getLoginError(state),
  isLoading: isLoginLoading(state),
})

export const LoginForm = connect(mapStateToProps, {
  handleSubmit: login,
})(LoginFormComponent)
