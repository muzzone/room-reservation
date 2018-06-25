
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

export const loadReservedSlots = (reservedSlots) => {
  return {
    type: 'LOAD_DATA',
    payload: reservedSlots
  }
};

export const reserveSlot = (id, note) => {
  return {
    type: 'RESERVE_SLOT',
    payload: [{ id, note }]
  }
};

export const cancelReservation = (reservedSlots) => {
  return {
    type: 'CANCEL_RESERVATION',
    payload: reservedSlots
  }
};