import { fetchAPI } from "../../api";

export function initializeTimes() {
    // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
