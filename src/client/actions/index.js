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
