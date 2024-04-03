const setItemToLocalStorage = (key, value) => {
    if(key && value && typeof(value) === "object"){
        localStorage.setItem(key, JSON.stringify(value));
    }
}

const getItemFromLocalStorage = (key) => {
    if(key){
        localStorage.getItem(key);
    }
}

export {setItemToLocalStorage, getItemFromLocalStorage};