import { createSelector } from 'reselect'

const getProfiles = (state) => state.profileReducer.profiles

export const getProfilesState = createSelector(
  [getProfiles ],
  (profile) => profile
)