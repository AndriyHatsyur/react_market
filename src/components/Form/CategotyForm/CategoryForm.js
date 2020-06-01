import { compose, withState, withHandlers } from 'recompose'
import { CategoryFormView } from './CategoryFormView'
import { withRouter } from 'react-router-dom'

const enhance = compose(
  withRouter,
  withState('price', 'setPrice', ({ history }) => {
    const query = new URLSearchParams(history.location.search)
    return {
      priceFrom: query.get('priceFrom') || '',
      priceTo: query.get('priceTo') || '',
    }
  }),

  withHandlers({
    onChange: (props) => (e) => {
      const price = {
        ...props.price,
        [e.target.name]: e.target.value,
      }
      props.setPrice(price)
      props.history.location.state = price
    },
  }),
)

export const CategoryForm = enhance(CategoryFormView)
