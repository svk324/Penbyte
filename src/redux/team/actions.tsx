const actions = {
  TEAM_DATA_BEGIN: 'TEAM_DATA_BEGIN',
  TEAM_DATA_SUCCESS: 'TEAM_DATA_SUCCESS',
  TEAM_DATA_ERR: 'TEAM_DATA_ERR',

  teamDataBegin: () => {
    return {
      type: actions.TEAM_DATA_BEGIN,
    };
  },

  teamDataSuccess: (data:any) => {
    return {
      type: actions.TEAM_DATA_SUCCESS,
      data,
    };
  },

  teamDataErr: (err:any) => {
    return {
      type: actions.TEAM_DATA_ERR,
      err,
    };
  },
};

export default actions;
