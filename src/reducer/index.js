import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import ImagesReducer from './imagesReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: ImagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    stats: statsReducer,
});

export default rootReducer;
