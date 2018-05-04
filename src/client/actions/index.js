import axios from 'axios';



export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_BLOGS_IMAGES = 'fetch_blogs_images';
export const FETCH_BLOGS_DETAILS = 'fetch_blogs_details';

export function fetchBlogs() {

    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article'

    return async (dispatch) => {
        const res = await axios.get(url);
        dispatch({
            type: FETCH_CATEGORIES,
            payload: res
        });
        dispatch({
            type: FETCH_BLOGS_IMAGES,
            payload: res
        });
        dispatch({
            type: FETCH_BLOGS_DETAILS,
            payload: res
        });
    }

};

export const FETCH_HERO_BANNER = 'fetch_hero_banner'

export const fetchHeroBanner = () => async dispatch => {
    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&content_type=heroBanner'
    const res = await axios.get(url);

        dispatch({
            type: FETCH_HERO_BANNER,
            payload: res
        });

}