import { SellFormView } from './SellFormView'
import {
  compose,
  withHandlers,
  withProps,
  branch,
  renderComponent,
} from 'recompose'
import * as Yup from 'yup'
import { Api } from './../../../../api/Api'
import { connect } from 'react-redux'
import { addProduct } from '../../../../modules/products/productsOperations'
import {
  getAddproductError,
  isAddproductError,
  isAddproductLoading,
} from '../../../../modules/products/productsSelectors'
import { Spinner } from './../../../../components/Spinner/Spinner'

const mapStateToProps = (state) => ({
  isLoading: isAddproductLoading(state),
  isError: isAddproductError(state),
  errorApi: getAddproductError(state),
})

const spinnerWhileLoading = (isLoading) =>
  branch(isLoading, renderComponent(Spinner))

const enhancer = compose(
  connect(mapStateToProps, { addProduct }),
  withProps(({ addProduct }) => {
    return {
      formikProps: {
        initialValues: {
          title: '',
          description: '',
          photos: [],
          location: '',
          price: '',
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .min(3, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
          description: Yup.string()
            .min(10, 'Too Short!')
            .max(1000, 'Too Long!')
            .required('Required'),
          photos: Yup.string().required('Required'),
          location: Yup.string()
            .min(3, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),
          price: Yup.number().required('Required'),
        }),
        onSubmit: (values) => {
          addProduct(values)
        },
      },
    }
  }),

  withHandlers({
    uploadPhotos: () => ({ meta, helpers }) => async (e) => {
      helpers.setTouched()
      try {
        if (meta.value.length <= 7) {
          const res = await Api.uploadImg(e.target.files[0])
          helpers.setValue([...meta.value, res.data])
        } else {
          helpers.setError('Max photos count seven')
        }
      } catch (e) {
        console.log()
        helpers.setError(e.response.data.error)
      }
    },
  }),
  spinnerWhileLoading(({ isLoading }) => isLoading),
)

export const SellForm = enhancer(SellFormView)
