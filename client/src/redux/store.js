import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import { jobsReducer} from './reducers/jobsReducer'

const rootReducer = combineReducers(
    {
        jobsReducer: jobsReducer,
    }
)

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store;