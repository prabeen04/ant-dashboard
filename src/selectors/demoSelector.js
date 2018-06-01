import { createSelector } from 'reselect'

const getProfiles = (state) => state.profileReducer.profiles

export const getProfilesState = createSelector(
    [getProfiles],
    (profile) => {
        console.log('inside demoSelector')
        return profile.filter((profile) => profile.name.startsWith('m'))
    }
)