import {
  FETCH_PRODUCT_DESCRIPTION_INIT,
  FETCH_PRODUCT_DESCRIPTION_SUCCESS,
  FETCH_PRODUCT_DESCRIPTION_ERROR
} from './types'

import { getProductDescription } from '../../services/fetch-product-details'

const fetchProductDescriptionInit = () => ({
  type: FETCH_PRODUCT_DESCRIPTION_INIT
})

const fetchProductDescriptionSuccess = product => ({
  type: FETCH_PRODUCT_DESCRIPTION_SUCCESS,
  payload: product
})

const fetchProductDescriptionError = error => ({
  type: FETCH_PRODUCT_DESCRIPTION_ERROR,
  payload: { error }
})

export const fetchProductDescription = (id) => (dispatch) => {
  dispatch(fetchProductDescriptionInit())
  getProductDescription(id).then(response => {
    if (response) {
      dispatch(fetchProductDescriptionSuccess(response.data))
    }
  })
    .catch(error => dispatch(fetchProductDescriptionError(error)))
}
