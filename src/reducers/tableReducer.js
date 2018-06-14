import { GET_TABLE_DATA } from '../types/tableActionTypes';
const initialState = {
    data: [{
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
    }],
    columns: [
        {
            Header: 'Name',
            accessor: 'name',
            show: true
        },
        {
            Header: 'Age',
            accessor: 'age',
            show: true
        },
        {
            Header: 'Profession',
            accessor: 'profession',
            show: true
        },
        {
            Header: 'Location',
            accessor: 'location',
            show: false
        }
    ]

}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE_DATA:
            return {
                ...state             
            }
        default:
            return state;
    }
    return state;
}
