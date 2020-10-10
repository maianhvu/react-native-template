import * as types from './types'
import { createAction } from 'typesafe-actions'

export const initialize = createAction(
  types.INITIALIZE
)()
