import axios from 'axios';

export const FETCH_BLOGS_IMAGES_LIMIT = 'fetch_blogs_images_limit';
export const FETCH_BLOGS_DETAILS_LIMIT = 'fetch_blogs_details_limit';
export function fetchBlogsLimit(skip, limit, total) {

    let change = false
    let skipSend = total - (skip * limit)
    if(skipSend < 0) {
        skipSend = parseInt(0)
        limit = parseInt((total - (skip * limit))) + parseInt(limit)
    }

    const url = `https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article`

    return async (dispatch) => {

        const res = await axios.get(url, {params: {skip: skipSend, limit: limit}});
        dispatch({
            type: FETCH_BLOGS_IMAGES_LIMIT,
            payload: res
        });
        dispatch({
            type: FETCH_BLOGS_DETAILS_LIMIT,
            payload: res
        });
    }

};

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_BLOGS_IMAGES = 'fetch_blogs_images';
export const FETCH_BLOGS_DETAILS = 'fetch_blogs_details';

export function fetchBlogs() {
    const url = `https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article`
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

export function fetchHeroBanner() {

    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&content_type=heroBanner'

    return async (dispatch) => {
        const res = await axios.get(url);
        dispatch({
            type: FETCH_HERO_BANNER,
            payload: res
        });
    }

};
