const setLoginData = (data = {}) => {
  return {
    type: "SET_LOGIN_DATA",
    payload: data,
  };
};

const clearData = () => {
  return{
    type: "CLEAR_DATA"
  }
}

const setLoading = (boolValue) => {
  return{
    type: "SET_LOADING", 
    payload: boolValue,
  }
}

export { setLoginData, clearData, setLoading };
