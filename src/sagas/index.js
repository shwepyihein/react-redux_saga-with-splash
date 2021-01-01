import { all } from 'redux-saga/effects';

import ImagesSaga from './imagesSaga';
import StatsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([ImagesSaga(), StatsSaga()]);
}
