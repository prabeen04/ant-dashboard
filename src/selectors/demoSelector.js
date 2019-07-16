import { createSelector } from 'reselect';

const getProfiles = (profileReducer) => profileReducer.profiles
const filterText = (profileReducer, filterText) => filterText

export const getProfilesState = createSelector(
    [getProfiles, filterText],
    (profile, filterText) => {
        return profile.filter(({name, location, email}) => {
            return name && name.toLowerCase().includes(filterText.toLowerCase())
                || location && location.toLowerCase().includes(filterText.toLowerCase())
                || email && email.toLowerCase().includes(filterText.toLowerCase())
        })
    }
)