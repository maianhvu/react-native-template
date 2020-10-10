import { createReducer } from 'typesafe-actions'
import * as actions from './actions'
import { combineReducers } from 'redux'

export interface AppState {
  initialized: boolean
}

export const initialAppState: AppState = {
  initialized: false
}

const initialized = createReducer(initialAppState.initialized)
  .handleAction(actions.initialize, () => true)

export default combineReducers({
  initialized
})
