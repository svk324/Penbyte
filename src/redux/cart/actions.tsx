const actions = {
  CART_DATA_BEGIN: 'CART_DATA_BEGIN',
  CART_DATA_SUCCESS: 'CART_DATA_SUCCESS',
  CART_DATA_ERR: 'CART_DATA_ERR',

  CART_UPDATE_BEGIN: 'CART_UPDATE_BEGIN',
  CART_UPDATE_SUCCESS: 'CART_UPDATE_SUCCESS',
  CART_UPDATE_ERR: 'CART_UPDATE_ERR',

  CART_DELETE_BEGIN: 'CART_DELETE_BEGIN',
  CART_DELETE_SUCCESS: 'CART_DELETE_SUCCESS',
  CART_DELETE_ERR: 'CART_DELETE_ERR',

  cartDataBegin: () => {
    return {
      type: actions.CART_DATA_BEGIN,
    };
  },

  cartDataSuccess: (data:any) => {
    return {
      type: actions.CART_DATA_SUCCESS,
      data,
    };
  },

  cartDataErr: (err:any) => {
    return {
      type: actions.CART_DATA_ERR,
      err,
    };
  },

  cartUpdateBegin: () => {
    return {
      type: actions.CART_UPDATE_BEGIN,
    };
  },

  cartUpdateSuccess: (data:any) => {
    return {
      type: actions.CART_UPDATE_SUCCESS,
      data,
    };
  },

  cartUpdateErr: (err:any) => {
    return {
      type: actions.CART_UPDATE_ERR,
      err,
    };
  },

  cartDeleteBegin: () => {
    return {
      type: actions.CART_DELETE_BEGIN,
    };
  },

  cartDeleteSuccess: (data:any) => {
    return {
      type: actions.CART_DELETE_SUCCESS,
      data,
    };
  },

  cartDeleteErr: (err:any) => {
    return {
      type: actions.CART_DELETE_ERR,
      err,
    };
  },
};

export default actions;
