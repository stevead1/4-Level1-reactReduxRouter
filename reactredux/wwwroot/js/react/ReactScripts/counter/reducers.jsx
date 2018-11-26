import { combineReducers } from "redux";


const initialState = {
    count: 0
}

function changeReducer(state = initialState, action) {
    //console.log("1", action.type)
    //console.log("2",action)
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default combineReducers({
    countValue: changeReducer
})