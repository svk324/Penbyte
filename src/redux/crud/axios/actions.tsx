const actions = {
  AXIOS_ADD_BEGIN: 'AXIOS_ADD_BEGIN',
  AXIOS_ADD_SUCCESS: 'AXIOS_ADD_SUCCESS',
  AXIOS_ADD_ERR: 'AXIOS_ADD_ERR',

  AXIOS_READ_BEGIN: 'AXIOS_READ_BEGIN',
  AXIOS_READ_SUCCESS: 'AXIOS_READ_SUCCESS',
  AXIOS_READ_ERR: 'AXIOS_READ_ERR',

  AXIOS_UPDATE_BEGIN: 'AXIOS_UPDATE_BEGIN',
  AXIOS_UPDATE_SUCCESS: 'AXIOS_UPDATE_SUCCESS',
  AXIOS_UPDATE_ERR: 'AXIOS_UPDATE_ERR',

  AXIOS_DELETE_BEGIN: 'AXIOS_DELETE_BEGIN',
  AXIOS_DELETE_SUCCESS: 'AXIOS_DELETE_SUCCESS',
  AXIOS_DELETE_ERR: 'AXIOS_DELETE_ERR',

  AXIOS_SINGLE_DATA_BEGIN: 'AXIOS_SINGLE_DATA_BEGIN',
  AXIOS_SINGLE_DATA_SUCCESS: 'AXIOS_SINGLE_DATA_SUCCESS',
  AXIOS_SINGLE_DATA_ERR: 'AXIOS_SINGLE_DATA_ERR',

  AXIOS_UPLOAD_BEGIN: 'AXIOS_UPLOAD_BEGIN',
  AXIOS_UPLOAD_SUCCESS: 'AXIOS_UPLOAD_SUCCESS',
  AXIOS_UPLOAD_ERR: 'AXIOS_UPLOAD_ERR',

  axiosUploadBegin: () => {
    return {
      type: actions.AXIOS_UPLOAD_BEGIN,
    };
  },

  axiosUploadSuccess: (data:any) => {
    return {
      type: actions.AXIOS_UPLOAD_SUCCESS,
      data,
    };
  },

  axiosUploadErr: (err:any) => {
    return {
      type: actions.AXIOS_UPLOAD_ERR,
      err,
    };
  },

  axiosAddBegin: () => {
    return {
      type: actions.AXIOS_ADD_BEGIN,
    };
  },

  axiosAddSuccess: (data:any) => {
    return {
      type: actions.AXIOS_ADD_SUCCESS,
      data,
    };
  },

  axiosAddErr: (err:any) => {
    return {
      type: actions.AXIOS_ADD_ERR,
      err,
    };
  },

  axiosReadBegin: () => {
    return {
      type: actions.AXIOS_READ_BEGIN,
    };
  },

  axiosReadSuccess: (data:any) => {
    return {
      type: actions.AXIOS_READ_SUCCESS,
      data,
    };
  },

  axiosReadErr: (err:any) => {
    return {
      type: actions.AXIOS_READ_ERR,
      err,
    };
  },

  axiosUpdateBegin: () => {
    return {
      type: actions.AXIOS_UPDATE_BEGIN,
    };
  },

  axiosUpdateSuccess: (data:any) => {
    return {
      type: actions.AXIOS_UPDATE_SUCCESS,
      data,
    };
  },

  axiosUpdateErr: (err:any) => {
    return {
      type: actions.AXIOS_UPDATE_ERR,
      err,
    };
  },

  axiosDeleteBegin: () => {
    return {
      type: actions.AXIOS_DELETE_BEGIN,
    };
  },

  axiosDeleteSuccess: (data:any) => {
    return {
      type: actions.AXIOS_DELETE_SUCCESS,
      data,
    };
  },

  axiosDeleteErr: (err:any) => {
    return {
      type: actions.AXIOS_DELETE_ERR,
      err,
    };
  },

  axiosSingleDataBegin: () => {
    return {
      type: actions.AXIOS_SINGLE_DATA_BEGIN,
    };
  },

  axiosSingleDataSuccess: (data:any) => {
    return {
      type: actions.AXIOS_SINGLE_DATA_SUCCESS,
      data,
    };
  },

  axiosSingleDataErr: (err:any) => {
    return {
      type: actions.AXIOS_SINGLE_DATA_ERR,
      err,
    };
  },
};

export default actions;
