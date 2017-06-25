// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

const selectManage = (state: State) => state.manage

export const makeSelectIsManga = () =>
  createSelector(selectManage, s => s.isMangaView)

export const makeSelectIsImage = () =>
  createSelector(selectManage, s => s.isImageView)

export const makeSelectId = () =>
  createSelector(selectManage, s => s.currentIllustId)