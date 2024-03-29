const actions = {
  SINGLE_EMAIL_BEGIN: 'SINGLE_EMAIL_BEGIN',
  SINGLE_EMAIL_SUCCESS: 'SINGLE_EMAIL_SUCCESS',
  SINGLE_EMAIL_ERR: 'SINGLE_EMAIL_ERR',

  STAR_UPDATE_BEGIN: 'STAR_UPDATE_BEGIN',
  STAR_UPDATE_SUCCESS: 'STAR_UPDATE_SUCCESS',
  STAR_UPDATE_ERR: 'STAR_UPDATE_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.STAR_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: (data:any) => {
    return {
      type: actions.STAR_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: (err:any) => {
    return {
      type: actions.STAR_UPDATE_ERR,
      err,
    };
  },

  singleEmailBegin: () => {
    return {
      type: actions.SINGLE_EMAIL_BEGIN,
    };
  },

  singleEmailSuccess: (data:any) => {
    return {
      type: actions.SINGLE_EMAIL_SUCCESS,
      data,
    };
  },

  singleEmailErr: (err:any) => {
    return {
      type: actions.SINGLE_EMAIL_ERR,
      err,
    };
  },
};

export default actions;
