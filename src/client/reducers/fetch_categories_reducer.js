import { FETCH_CATEGORIES } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            const data = action.payload.data.items.map((item) => {
                if(item.fields.category == undefined) {
                    return null;
                }else {
                    return item.fields.category.charAt(0).toUpperCase() + item.fields.category.toLowerCase().slice(1)
                }
            })
            return data;
        default:
            return state;
    }
}