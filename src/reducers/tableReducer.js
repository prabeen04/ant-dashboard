import { GET_TABLE_DATA } from '../types/tableActionTypes';
const initialState = [{
    name: 'Ander Hererra',
    age: 26,
    profession: 'React Developer',
    location: 'Miami'
    },
    {
        name: 'Antonio valencia',
        age: 21,
        profession: 'Java Developer',
        location: 'California'
    },
    {
        name: 'Paul Pogba',
        age: 45,
        profession: 'FrontEnd Developer',
        location: 'Gurgaon'
    },
    {
        name: 'David De Gea',
        age: 22,
        profession: 'Python Developer',
        location: 'Bangalore'
    },
    {
        name: 'Marcus RashFord',
        age: 56,
        profession: 'Android Developer',
        location: 'Amsterdam'
    },
    {
        name: 'Romelu Lukaku',
        age: 36,
        profession: 'Javascript Developer',
        location: 'Bhubaneswar'
    },
    {
        name: 'Tannetyrtuer Linsley',
        age: 16,
        profession: 'React Developer',
        location: 'Miami'
    }]

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE_DATA:
            return state;
    }
    return state;
}