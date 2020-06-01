import { RegisterFormComponent } from './RegisterFormComponent'
import { connect } from 'react-redux'
import { register } from './../../../modules/auth/authOperations'
import {
  isregisterError,
  getRegisterError,
  isRegisterLoading,
} from '../../../modules/auth/authSelectors'

const mapStateToProps = (state) => ({
  isError: isregisterError(state),
  errorMessage: getRegisterError(state),
  isLoading: isRegisterLoading(state),
})

export const RegisterForm = connect(mapStateToProps, {
  handleSubmit: register,
})(RegisterFormComponent)
