// @flow
import type { Action } from 'types'
import type { Params } from 'types/column'
import * as Actions from 'constants/column'

type Id = string

export const setPrams = (id: Id, params: Params): Action => ({
  type: Actions.SET_PARAMS,
  id,
  params,
})

export const nextColumnIllusts = (id: Id, ids: Array<number>): Action => ({
  type: Actions.NEXT_COLUMN_ILLUSTS,
  id,
  ids,
})

export const setColumnMinBookmarks = (
  id: Id,
  minBookmarks: number
): Action => ({ type: Actions.SET_COLUMN_MIN_BOOKMARKS, id, minBookmarks })

export const nextColumnPage = (id: Id): Action => ({
  type: Actions.NEXT_COLUMN_PAGE,
  id,
})

export const checkColumnUpdate = (id: Id): Action => ({
  type: Actions.CHECK_COLUMN_UPDATE,
  id,
})

export const refreshAllColumns = (): Action => ({
  type: Actions.REFRESH_ALL_COLUMNS,
})

export const fetchColumn = (id: Id): Action => ({
  type: Actions.FETCH_COLUMN,
  id,
})
