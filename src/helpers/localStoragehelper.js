const setItemToLocalStorage = (key, value) => {
  if (key) {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
};

const getItemFromLocalStorage = (key, isObject = false) => {
  if (key) {
    if (isObject) {
      return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.getItem(key);
  }
};

const removeItemFromLocalStorage = (key) => {
  if (key) {
    localStorage.removeItem(key);
  }
};

export {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
};
