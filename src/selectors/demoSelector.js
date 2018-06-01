import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleProfiles = createSelector(
  [profiles ],
  (profile) => profile
)