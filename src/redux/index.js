import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'

const combinedReducers = combineReducers({
  pika: () => 'PIKA'
})

export default createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)))
