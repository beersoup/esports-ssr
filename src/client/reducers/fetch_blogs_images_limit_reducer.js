import { FETCH_BLOGS_IMAGES_LIMIT } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BLOGS_IMAGES_LIMIT:
            const data = action.payload.data.includes.Asset.map((asset) => {
                if(asset.fields.file.url == undefined) {
                    return null;
                }else {
                    return asset
                }
            })
            return data;
        default:
            return state;
    }
}

