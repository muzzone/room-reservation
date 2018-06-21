
export const showPopover = (coords) => {
  return {
    type: 'SHOW_POPOVER',
    payload: coords
  }
};

export const hidePopover = () => {
  return {
    type: 'HIDE_POPOVER'
  }
};
