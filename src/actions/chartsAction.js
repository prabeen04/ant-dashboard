import {
    GET_CHART_DATA, SET_INTERNAL_VIEW_TYPE, SET_CHART_VIEW_TYPE, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA,
    SET_MIXED_BAR_CHART_DATA,
} from "../types/chartActionTypes";
import moment from 'moment';

export const setPieChartData = (viewType, data) => dispatch => {
    console.log('inside set pichart data')
    console.log(viewType)
    const newData = data.map((event, i) => {
        if (viewType.value === 'year') {
            return { eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).format('YYYY') }
        }
        else if (viewType.value === 'month') {
            return { eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).format('MMM') }
        }
        else {
            return { eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).format('ddd') }
        }
    })
        .reduce((acc, data, i, arr) => {
            if (!acc[data.eventType]) {
                console.log('inside IF')
                acc[data.eventType] = 1;
            } else {
                console.log('inside ELSE')
                acc[data.eventType] += 1;
            }
            return acc;
        }, {});
    console.log(newData)
    const eventArr = Object.entries(newData)
        .reduce((acc, node, i, arr) => {
            let [type, val] = node;
            acc.push({
                name: type,
                value: val
            })
            return acc;
        }, []);
    dispatch({
        type: SET_PIE_CHART_DATA,
        payload: eventArr
    })
}

// export const setPieChartData = (viewType, data) => dispatch => {
//     console.log(viewType)
//     const newData = data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
//     console.log(Object.values(
//         newData.reduce((a, { eventType }) => {
//             if (!a[eventType]) a[eventType] = {type: eventType, [eventType]: 0 };
//             a[eventType][eventType]++;
//             return a;
//         }, {})
//     ));
// }

export const setBarChartData = (viewType, data) => dispatch => {
    const trimedData = data.map((item, i) => {
        if (viewType.value === 'week') {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('ddd') }
        }
        else if (viewType.value === 'month') {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('MMM') }
        }
        else {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('YYYY') }
        }
    })
        .reduce((acc, item, i, arr) => {
            if (!acc[item.startDate]) {
                acc[item.startDate] = 1;
            } else {
                acc[item.startDate] += 1;
            }
            return acc;
        }, {});
    const dayArray = Object.entries(trimedData)
        .reduce((acc, node, i, arr) => {

            let [days, val] = node;
            acc.push({
                days: days,
                value: val
            })
            return acc;
        }, []);
    console.log(dayArray)
    dispatch({
        type: SET_BAR_CHART_DATA,
        payload: dayArray
    })
}

export const setMixedBarChartData = (viewType, data) => dispatch => {
    console.log('inside setMixedBarChartData')
    console.log(viewType)
    const trimedData = data.map((item, i) => {
        if (viewType === 'week') {
            console.log('inside week')
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('ddd') }
        }
        else if (viewType === 'month') {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('MMM') }
        }
        else {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('YYYY') }
        }
    })
        .reduce((acc, { eventType }) => {
            console.log(acc)
            if(!acc[startDate]){
                if (!acc[eventType]) {
                    acc[eventType] = 1
                    console.log(eventType)
                } else {
                    console.log('inside ELSE')
                    acc[eventType] += 1;
                }
            }else{
                acc[startDate] += 1;  
            }
            return acc;
        }, {})
    console.log(trimedData)
    // dispatch({
    //     type: SET_MIXED_BAR_CHART_DATA,
    //     payload: dayArray
    // })
}
export const setViewType = viewType => dispatch => {
    console.log(viewType)
    dispatch({
        type: SET_CHART_VIEW_TYPE,
        payload: viewType
    })
}

