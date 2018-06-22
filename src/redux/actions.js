
export const showPopover = (coords, id, reserved) => {
  return {
    type: 'SHOW_POPOVER',
    payload: {
      coords: coords,
      visible: 'show',
      reserved: reserved,
      id: id
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
