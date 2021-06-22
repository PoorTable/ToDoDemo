import { all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import ActionsTypes from "../actions/actionsTypes";

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

function* add(action:any) {
    yield delay(500);
    yield put({type: ActionsTypes.ADD, payload: action.payload});
}

function* helloSaga() {
    console.log('ToDoSaga running...')
}

function* remove(action:any) {
    yield delay(500);
    yield put({type: ActionsTypes.REMOVE,  payload: action.payload  });
}

function* mySaga() {
    yield takeLatest("INSERT", add);
    yield takeLatest("DELETE", remove);
}


export default function* rootSaga() {
    yield all([
        helloSaga(),
        mySaga()
    ])
}

