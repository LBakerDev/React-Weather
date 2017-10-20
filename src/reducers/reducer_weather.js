import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    
    switch (action.type) {
        case FETCH_WEATHER: 
        // Return new array with new state added to old state
        return [ action.payload.data, ...state];
    }
    return state;
}