import { take, fork, put, call } from 'redux-saga/effects';
import { loadImagesStats, setErrorStats, setImagesStats } from '../actions';
import { fetchImageStats } from '../api';
import { IMAGES, STATS } from '../constants';

export function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            // image was loaded so we exit the generator
            return true;
        } catch (e) {
            // we just need to retry and dispactch an error
            // if we tried more than 3 times
        }
    }
    yield put(setErrorStats(id));
}

export default function* watchStatsRequest() {
    while (true) {
        // we get the action here
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
