const isFieldEmpty = (state = true, action) => {
  switch (action.type) {
    case "STOP":
      return false;
    default:
      return state;
  }
};

export default isFieldEmpty
