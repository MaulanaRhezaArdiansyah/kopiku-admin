const initialState = {
  loading: false,
  data: [],
  response: {},
  // error: {},
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_PRODUCTS_REQUEST":
      return {
        ...state,
        data: [],
        loading: true,
      };
    case "GET_ALL_DATA_PRODUCTS_SUCCESS":
      // return {
      //   ...state,
      //   loading: false,
      //   data: action.payload,
      // };
      return {
        ...state,
        loading: false,
        response: {
          message: action.payload.message,
          status: action.payload.status,
        },
        // data: action.payload.data.data,
        data: action.payload.data,
      };
    case "GET_ALL_DATA_PRODUCTS_FAILED":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const postProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PRODUCTS_REQUEST":
      return {
        ...state,
        data: [],
        loading: true,
      };
    case "POST_PRODUCTS_SUCCESS":
      // return {
      //   ...state,
      //   loading: false,
      //   data: action.payload,
      // };
      return {
        ...state,
        loading: false,
        response: {
          message: action.payload.message,
          status: action.payload.status,
        },
        // data: action.payload.data.data,
        data: action.payload.data,
      };
    case "POST_PRODUCTS_FAILED":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
