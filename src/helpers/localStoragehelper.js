const setItemToLocalStorage = (key, value) => {
  if (key) {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
};

const getItemFromLocalStorage = (key) => {
  if (key) {
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
