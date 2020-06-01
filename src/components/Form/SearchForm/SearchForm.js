import { compose, withProps } from 'recompose'
import { SearchFormView } from './SearchFormView'
import { withRouter } from 'react-router-dom'

import * as Yup from 'yup'
import { connect } from 'react-redux'
import { searchProducts } from '../../../modules/products/productsOperations'
import { routes } from '../../../routes/routes'

const enhance = compose(
  connect(null, { searchProducts }),
  withRouter,
  withProps(({ history, searchProducts }) => {
    const query = new URLSearchParams(history.location.search)
    return {
      formikProps: {
        initialValues: {
          keywords: query.get('keywords') || '',
          location: query.get('location') || '',
        },
        validationSchema: Yup.object({
          keywords: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!'),
          location: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'Too Long!'),
        }),
        onSubmit: ({ keywords, location }) => {
          const query = new URLSearchParams()
          query.set('keywords', keywords)
          query.set('location', location)
          query.set('offset', 0)
          query.set('limit', 20)

          if (history.location.state) {
            const { priceFrom, priceTo } = history.location.state
            query.set('priceFrom', priceFrom)
            query.set('priceTo', priceTo)
          }
          if (history.location.pathname === routes.search.path) {
            searchProducts(`?${query.toString()}`, query.get('limit'))
          }

          history.push({
            pathname: routes.search.path,
            search: query.toString(),
          })
        },
      },
    }
  }),
)

export const SearchForm = enhance(SearchFormView)
