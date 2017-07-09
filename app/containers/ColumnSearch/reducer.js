// @flow
import ms from 'ms'
import update from 'utils/update'
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type ColumnId = string

export type ColumnSearch = {
  minBookmarks: number,
  interval: number,
} & BaseColumn

export type State = $Shape<{ [ColumnId]: ColumnSearch }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
      return update(state, action, {
        ids: [],
        nextUrl: null,
        minBookmarks: 0,
        interval: ms('1m'),
      })

    case Actions.SET_INTERVAL:
      return update(state, action, { interval: action.interval })

    case Actions.SET_MIN_BOOKBOOK:
      return update(state, action, { minBookmarks: action.minBookmarks })

    default:
      return baseReducer('ColumnSearch', Actions, state, action)
  }
}
