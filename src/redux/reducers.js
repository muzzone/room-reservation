const initialState = {
  popover: {
    coords: {
      top: 0,
      left: 0
    },
    visible: 'hidden',
    reserved: false,
    id: ''
  },
  reservedSlots: []
};

export const popover = (state = initialState.popover, action) => {
  switch (action.type) {
    case 'SHOW_POPOVER' :
      return {...state, ...action.payload};
    case 'HIDE_POPOVER' :
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const reservedSlots = (state = initialState.reservedSlots, action) => {
  switch (action.type) {
    case 'LOAD_DATA' :
      return [...state, ...action.payload];
    case 'RESERVE_SLOT' :
      return [...state, ...action.payload];
    case 'CANCEL_RESERVATION' :
      return [...action.payload];
    default :
      return state;
  }
};
