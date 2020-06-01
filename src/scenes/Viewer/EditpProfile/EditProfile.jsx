import {
  compose,
  withProps,
  withState,
  withHandlers,
  branch,
  renderComponent,
} from 'recompose'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { EditProfileForm } from './components/EditProfileForm'
import { getViewer } from '../../../modules/viewer/viewerSelectors'
import { validators } from './../../../utils/Form/validators'
import { editProfile } from './../../../modules/viewer/viewerOperations'
import {
  isEditError,
  getEditError,
  isLoadingEdit,
} from './../../../modules/viewer/viewerSelectors'
import { Spinner } from './../../../components/Spinner/Spinner'

const mapStatetoprops = (state) => ({
  viewer: getViewer(state),
  isError: isEditError(state),
  error: getEditError(state),
  isLoading: isLoadingEdit(state),
})

const spinnerWhileLoading = (isLoading) =>
  branch(isLoading, renderComponent(Spinner))

const enhance = compose(
  connect(mapStatetoprops, { editProfile }),
  withState('avatar', 'setAvatar', (props) => props.viewer.avatar),
  withProps(({ viewer, editProfile }) => {
    return {
      formikProps: {
        initialValues: {
          fullName: viewer.fullName || '',
          phone: viewer.phone || '',
          avatar: viewer.avatar || '',
        },
        validationSchema: Yup.object({
          fullName: validators.maxLength(30),
          avatar: validators.required,
          phone: validators.phone,
        }),
        onSubmit: (values) => {
          editProfile(values)
        },
      },
    }
  }),
  withHandlers({
    imgChangeHandler: ({ formikProps, setAvatar }) => async (e) => {
      const reader = new FileReader()
      reader.onloadend = function () {
        setAvatar(reader.result)
        formikProps.initialValues.avatar = reader.result
      }
      reader.readAsDataURL(e.target.files[0])
    },
  }),
  spinnerWhileLoading(({ isLoading }) => isLoading),
)

export const EditProfile = enhance(EditProfileForm)
