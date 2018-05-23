import { FETCH_BLOGS_DETAILS_LIMIT } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BLOGS_DETAILS_LIMIT:
            return action.payload.data.items.reverse();
        default:
            return state;
    }
}

