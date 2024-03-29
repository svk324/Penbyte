const actions = {
  BOARD_READ_BEGIN: 'BOARD_READ_BEGIN',
  BOARD_READ_SUCCESS: 'BOARD_READ_SUCCESS',
  BOARD_READ_ERR: 'BOARD_READ_ERR',

  TASK_READ_BEGIN: 'TASK_READ_BEGIN',
  TASK_READ_SUCCESS: 'TASK_READ_SUCCESS',
  TASK_READ_ERR: 'TASK_READ_ERR',

  toAddBoardReadBegin: () => {
    return {
      type: actions.BOARD_READ_BEGIN,
    };
  },

  toAddBoardSuccess: (data:any) => {
    return {
      type: actions.BOARD_READ_SUCCESS,
      data,
    };
  },

  toAddBoardReadErr: (err:any) => {
    return {
      type: actions.BOARD_READ_ERR,
      err,
    };
  },

  toAddTaskBegin: () => {
    return {
      type: actions.TASK_READ_BEGIN,
    };
  },

  toAddTaskSuccess: (data:any) => {
    return {
      type: actions.TASK_READ_SUCCESS,
      data,
    };
  },

  toAddTaskErr: (err:any) => {
    return {
      type: actions.TASK_READ_ERR,
      err,
    };
  },
  toDeleteTaskBegin: () => {
    return {
      type: actions.TASK_READ_BEGIN,
    };
  },

  toDeleteTaskSuccess: (data:any) => {
    return {
      type: actions.TASK_READ_SUCCESS,
      data,
    };
  },

  toDeletedTaskErr: (err:any) => {
    return {
      type: actions.TASK_READ_ERR,
      err,
    };
  },
};

export default actions;
