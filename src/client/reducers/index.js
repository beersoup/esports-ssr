import { combineReducers } from 'redux';

import fetchCategoriesReducer from './fetch_categories_reducer';
import fetchBlogsImagesReducer from './fetch_blogs_images_reducer';
import fetchBlogsDetailsReducer from './fetch_blogs_details_reducer';
import fetchHeroBannerReducer from './fetch_hero_banner_reducer';
import fetchBlogsImagesLimitReducer from './fetch_blogs_images_limit_reducer';
import fetchBlogsDetailsLimitReducer from './fetch_blogs_details_limit_reducer';




export default combineReducers({
    fetchCategories:fetchCategoriesReducer,
    fetchBlogsImages: fetchBlogsImagesReducer,
    fetchBlogsDetails: fetchBlogsDetailsReducer,
    fetchHeroBanner: fetchHeroBannerReducer,
    fetchBlogsImagesLimit: fetchBlogsImagesLimitReducer,
    fetchBlogsDetailsLimit: fetchBlogsDetailsLimitReducer,

});