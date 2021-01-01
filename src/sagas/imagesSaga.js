import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api/index';
import { setError, setImages } from '../actions';

const getPage = state => state.nextPage;

function* handleImageLoad() {
    try {
        const page = yield select(getPage);
        console.log('page', page);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
        // dispatch error
    }
}

export default function* watchImageLoad() {
    yield takeEvery(IMAGES.LOAD, handleImageLoad);
}
