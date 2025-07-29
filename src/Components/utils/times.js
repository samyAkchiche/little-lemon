import { fetchAPI } from "../../api";

export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

export function updateTimes(state, action) {
    switch (action.type) {
        case "update":
            console.log("Reducer called with:", action.payload);
            return fetchAPI(new Date(action.payload));
        default:
            return state;
    }
}
