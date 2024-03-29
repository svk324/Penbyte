/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import actions from './actions';
import initialState from '@/demoData/friends.json';

const { profileFriendsBegin, profileFriendsSuccess, profileFriendsErr, postDataBegin, postDataSuccess, postDataErr } =
  actions;

const profileFriendsChangeStatus = (key:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(profileFriendsBegin());
      initialState.map((friend) => {
        if (friend.key === key) {
          return friend.status ? (friend.status = false) : (friend.status = true);
        }
        return dispatch(profileFriendsSuccess(initialState));
      });
    } catch (err) {
      dispatch(profileFriendsErr(err));
    }
  };
};

const submitPost = (data:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(postDataBegin());
      dispatch(postDataSuccess(data));
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const likeUpdate = (data:any, key:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(postDataBegin());
      data.map((post:any) => {
        if (post.postId === key) {
          return (post.like += 1);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const commentUpdate = (data:any, key:any, comment:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(postDataBegin());
      data.map((post:any) => {
        if (post.postId === key) {
          return (post.comment = [
            ...post.comment,
            {
              time: new Date().getTime(),
              from: 'David Warner',
              text: comment,
            },
          ]);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const postDelete = (data:any, key:any) => {
  return async (dispatch:any) => {
    try {
      dispatch(postDataBegin());
      const posts = data.filter((post:any) => {
        return post.postId !== key;
      });
      return dispatch(postDataSuccess(posts));
    } catch (err) {
      return dispatch(postDataErr(err));
    }
  };
};

export { profileFriendsChangeStatus, submitPost, likeUpdate, commentUpdate, postDelete };
