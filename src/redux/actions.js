
export const showPopover = (coords) => {
  return {
    type: 'SHOW_POPOVER',
    payload: {
      coords: coords,
      visible: 'show'
    }
  }
};

export const hidePopover = () => {
  return {
    type: 'HIDE_POPOVER',
    payload: {
      visible: 'hidden'
    }
  }
};
