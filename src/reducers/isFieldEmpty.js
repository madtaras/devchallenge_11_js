const isFieldEmpty = (state = true, action) => {
  switch (action.type) {
    case "STOP":
      return true;
    case "CREATE_RANDOM_GENERATION":
      return false;
    default:
      return state;
  }
};

export default isFieldEmpty
