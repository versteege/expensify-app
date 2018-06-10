// Expenses reducer
const appglobalsReducerDefaultState = [];

export default (state = appglobalsReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_LOCALE":
            return [
                ...state,
                action.locale
            ];
        case "GET_LOCALE":
            return state;
        default:
            return state;
    }
};
