const actions = {
  FILTER_GALLERY_BEGIN: 'FILTER_GALLERY_BEGIN',
  FILTER_GALLERY_SUCCESS: 'FILTER_GALLERY_SUCCESS',
  FILTER_GALLERY_ERR: 'FILTER_GALLERY_ERR',

  filterGalleryBegin: () => {
    return {
      type: actions.FILTER_GALLERY_BEGIN,
    };
  },

  filterGallerySuccess: (data:any) => {
    return {
      type: actions.FILTER_GALLERY_SUCCESS,
      data,
    };
  },

  filterGalleryErr: (err:any) => {
    return {
      type: actions.FILTER_GALLERY_ERR,
      err,
    };
  },
};

export default actions;
