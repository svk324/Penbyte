const actions = {
  DATA_TABLE_READ_BEGIN: 'DATA_TABLE_READ_BEGIN',
  DATA_TABLE_READ_SUCCESS: 'DATA_TABLE_READ_SUCCESS',
  DATA_TABLE_READ_ERR: 'DATA_TABLE_READ_ERR',

  FILTER_WITH_SUBMIT_BEGIN: 'FILTER_WITH_SUBMIT_BEGIN',
  FILTER_WITH_SUBMIT_SUCCESS: 'FILTER_WITH_SUBMIT_SUCCESS',
  FILTER_WITH_SUBMIT_ERR: 'FILTER_WITH_SUBMIT_ERR',

  DATA_LIVE_FILTER_BEGIN: 'DATA_LIVE_FILTER_BEGIN',
  DATA_LIVE_FILTER_SUCCESS: 'DATA_LIVE_FILTER_SUCCESS',
  DATA_LIVE_FILTER_ERR: 'DATA_LIVE_FILTER_ERR',

  dataTableReadBegin: () => {
    return {
      type: actions.DATA_TABLE_READ_BEGIN,
    };
  },

  dataTableReadSuccess: (data:any) => {
    return {
      type: actions.DATA_TABLE_READ_SUCCESS,
      data,
    };
  },

  dataTableReadErr: (err:any) => {
    return {
      type: actions.DATA_TABLE_READ_ERR,
      err,
    };
  },

  filterWithSubmitBegin: () => {
    return {
      type: actions.FILTER_WITH_SUBMIT_BEGIN,
    };
  },

  filterWithSubmitSuccess: (data:any) => {
    return {
      type: actions.FILTER_WITH_SUBMIT_SUCCESS,
      data,
    };
  },

  filterWithSubmitErr: (err:any) => {
    return {
      type: actions.FILTER_WITH_SUBMIT_ERR,
      err,
    };
  },

  dataLiveFilterBegin: () => {
    return {
      type: actions.FILTER_WITH_SUBMIT_BEGIN,
    };
  },

  dataLiveFilterSuccess: (data:any) => {
    return {
      type: actions.DATA_LIVE_FILTER_SUCCESS,
      data,
    };
  },

  dataLiveFilterErr: (err:any) => {
    return {
      type: actions.DATA_LIVE_FILTER_ERR,
      err,
    };
  },
};

export default actions;
