import actions from './actions';
import initialState from '../../demoData/header-search.json';

const { searchHeaderBegin, searchHeaderSuccess, searchHeaderErr } = actions;

const headerSearchAction = (searchData:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(searchHeaderBegin());
      const data = initialState.filter((item) => {
        return item.title.startsWith(searchData);
      });
      dispatch(searchHeaderSuccess(data));
    } catch (err) {
      dispatch(searchHeaderErr(err));
    }
  };
};

export { headerSearchAction };
