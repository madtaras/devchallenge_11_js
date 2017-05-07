const isOn = (state = false, action) => {
  switch (action.type) {
    case "START":
      return true;
    case "STOP":
    case "PAUSE":
      return false;
    default:
      return state;
  }
};

export default isOn
