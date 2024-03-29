const actions = {
  FM_DATA_BEGIN: 'FM_DATA_BEGIN',
  FM_DATA_SUCCESS: 'FM_DATA_SUCCESS',
  FM_DATA_ERR: 'FM_DATA_ERR',

  FM_DATA_RECEIVED_BEGIN: 'FM_DATA_RECEIVED_BEGIN',
  FM_DATA_RECEIVED_SUCCESS: 'FM_DATA_RECEIVED_SUCCESS',
  FM_DATA_RECEIVED_ERR: 'FM_DATA_RECEIVED_ERR',

  fmDataReceivedBegin: () => {
    return {
      type: actions.FM_DATA_RECEIVED_BEGIN,
    };
  },

  fmDataReceivedSuccess: (data:any) => {
    return {
      type: actions.FM_DATA_RECEIVED_SUCCESS,
      data,
    };
  },

  fmDataReceivedErr: (err:any) => {
    return {
      type: actions.FM_DATA_RECEIVED_ERR,
      err,
    };
  },

  fmDataBegin: () => {
    return {
      type: actions.FM_DATA_BEGIN,
    };
  },

  fmDataSuccess: (data:any) => {
    return {
      type: actions.FM_DATA_SUCCESS,
      data,
    };
  },

  fmDataErr: (err:any) => {
    return {
      type: actions.FM_DATA_ERR,
      err,
    };
  },
};

export default actions;
