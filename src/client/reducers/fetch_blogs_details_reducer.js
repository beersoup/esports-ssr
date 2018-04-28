import { FETCH_BLOGS_DETAILS } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BLOGS_DETAILS:
            return action.payload.data.items.reverse();
        default:
            return state;
    }
}

