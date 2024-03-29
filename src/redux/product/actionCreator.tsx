/* eslint-disable no-return-assign */
import actions from './actions';
import initialState from '@/demoData/products.json';

const {
  singleProductBegin,
  singleProductSuccess,
  singleProductErr,

  filterProductBegin,
  filterProductSuccess,
  filterProductErr,

  sortingProductBegin,
  sortingProductSuccess,
  sortingProductErr,
} = actions;

const filterSinglePage = (paramsId:any, currentState:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(singleProductBegin());
      const data = currentState.filter((product:any) => {
        return product.id === paramsId;
      });
      dispatch(singleProductSuccess(data));
    } catch (err) {
      dispatch(singleProductErr(err));
    }
  };
};

const sorting = (sortBy:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(sortingProductBegin());
      setTimeout(() => {
        const data = initialState.sort((a:any, b:any) => {
          return b[sortBy] - a[sortBy];
        });
        dispatch(sortingProductSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(sortingProductErr(err));
    }
  };
};

const filterByPriceRange = (range:any) => {
  return async (dispatch:any) => {
    dispatch(filterProductBegin());
    try {
      const data = initialState.filter((product) => {
        return product.price >= range[0] && product.price <= range[1];
      });
      dispatch(filterProductSuccess(data));
    } catch (err) {
      dispatch(filterProductErr(err));
    }
  };
};

const filterByRating = (range:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(filterProductBegin());
      setTimeout(() => {
        const data = initialState.filter((product) => {
          if (range[0].length) {
            return range[0].includes(product.rate);
          }
          return initialState;
        });
        dispatch(filterProductSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(filterProductErr(err));
    }
  };
};

const filterByBrand = (brand:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(filterProductBegin());
      setTimeout(() => {
        const data = initialState.filter((product) => {
          if (brand[0].length) {
            return brand[0].includes(product.brand);
          }
          return initialState;
        });
        dispatch(filterProductSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(filterProductErr(err));
    }
  };
};

const filterByCategory = (category:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(filterProductBegin());
      setTimeout(() => {
        const data = initialState.filter((product) => {
          if (category !== 'all') {
            return product.category === category;
          }
          return initialState;
        });
        dispatch(filterProductSuccess(data));
      }, 100);
    } catch (err) {
      dispatch(filterProductErr(err));
    }
  };
};

const updateWishList = (id:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(filterProductBegin());

      initialState.map((product) => {
        if (product.id === id) {
          return product.popular ? (product.popular = false) : (product.popular = true);
        }
        return dispatch(filterProductSuccess(initialState));
      });
    } catch (err) {
      dispatch(filterProductErr(err));
    }
  };
};

export {
  filterSinglePage,
  sorting,
  filterByPriceRange,
  filterByRating,
  filterByBrand,
  filterByCategory,
  updateWishList,
};
