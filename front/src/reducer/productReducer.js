import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';

const initialStateList = {
  productos: [],
  loading: false,
  cantidad: 0,
  error: null,
};

export const productsReducer = (state = initialStateList, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return initialStateList;

    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        productos: action.payload.productos,
        cantidad: action.payload.cantidad,
        error: null,
      };

    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

const initialStateDetail = {
  product: {},
  loading: false,
  error: null,
};

//REDUCER PARA TENER TODOS LOS DETALLES
export const productDetailsReducer = (state = initialStateDetail, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return initialStateDetail;

    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const initialState = {
  products: initialStateList,
  productDetails: initialStateDetail,
};
