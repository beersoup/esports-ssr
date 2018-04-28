import axios from 'axios'; // use for any api

export const FETCH_USERS = 'fetch_users';

// Object 'api' is presented an axiosInstance from library 'axios'
// if we requesting any api apart from this tutorial no need to use this object
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');
    //const res = await axios.get('http://ourapp.com/users');


    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_BLOGS_IMAGES = 'fetch_blogs_images';
export const FETCH_BLOGS_DETAILS = 'fetch_blogs_details';

export const fetchBlogs = () => async dispatch => {
    const url = 'https://cdn.contentful.com/spaces/tsweppzq6ch3/entries?access_token=f567485edef319d2d8ee2eb85044b5c7621161059de56a4e912ab9c428621353&order=sys.createdAt&content_type=article'
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