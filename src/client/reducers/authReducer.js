import { FETCH_CURRENT_USER } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false; // If user is authenticated return data, if not return false

        default:
            return state;
    }
}