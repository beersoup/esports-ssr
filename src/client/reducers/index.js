import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import fetchCategoriesReducer from './fetch_categories_reducer';
import fetchBlogsImagesReducer from './fetch_blogs_images_reducer';
import fetchBlogsDetailsReducer from './fetch_blogs_details_reducer'
import fetchHeroBannerReducer from './fetch_hero_banner_reducer';



export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer,
    fetchCategories:fetchCategoriesReducer,
    fetchBlogsImages: fetchBlogsImagesReducer,
    fetchBlogsDetails: fetchBlogsDetailsReducer,
    fetchHeroBanner: fetchHeroBannerReducer
});