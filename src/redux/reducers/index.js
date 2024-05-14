const initialState = {
    loginData: {},
    loading: false, 
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOGIN_DATA": return {
            ...state,
            loginData: {...state.loginData, ...action.payload },
        };
        case "CLEAR_DATA": return{
            ...state, 
            loginData: {}
        }; 
        case "SET_LOADING": return {
            ...state, 
            loading: (action.payload) , 
        }
        default: return state;
    }
}

export default reducer;
