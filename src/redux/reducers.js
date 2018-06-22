const initialState = {
  coords: {
    top: 0,
    left: 0
  },
  visible: 'hidden',
  reserved: false,
  id: ''
};

export const popover = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_POPOVER' :
      return {...state, ...action.payload};
    case 'HIDE_POPOVER' :
      return {...state, ...action.payload};
    default:
      return state;
  }
};
