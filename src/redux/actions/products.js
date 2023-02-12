import axios from "axios";

const getAllDataProductsRequest = () => {
  return { type: "GET_ALL_DATA_PRODUCTS_REQUEST" };
};

const getAllDataProductsSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_PRODUCTS_SUCCESS",
    payload: data,
  };
};

const getAllDataProductsFailed = (err) => {
  return {
    type: "GET_ALL_DATA_PRODUCTS_FAILED",
    payload: err,
  };
};

export const getAllDataProducts = (filter) => {
  return (dispatch) => {
    dispatch(getAllDataProductsRequest());
    return axios
      .get(`http://localhost:3001/api/v1/products?${filter}`)
      .then((res) => {
        // dispatch(getAllDataProductsSuccess(res));
        dispatch(getAllDataProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllDataProductsFailed(err.response.data));
      });
  };
};

const postProductsRequest = () => {
  return { type: "POST_PRODUCTS_REQUEST" };
};

const postProductsSuccess = (data) => {
  return {
    type: "POST_PRODUCTS_SUCCESS",
    payload: data,
  };
};

const postProductsFailed = (err) => {
  return {
    type: "POST_PRODUCTS_FAILED",
    payload: err,
  };
};

export const postProducts = (body, token) => {
  return (dispatch) => {
    dispatch(postProductsRequest());
    return axios({
      method: "post",
      url: `http://localhost:3001/api/v1/products`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        Token: token,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(postProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postProductsFailed(err.response.data));
      });
  };
};
