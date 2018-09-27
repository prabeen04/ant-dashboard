import { GET_CHART_DATA, SET_INTERNAL_VIEW_TYPE, SET_CHART_VIEW_TYPE, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from "../types/chartActionTypes";
import moment from 'moment';
export const setPieChartData = (viewType, data) => dispatch => {
    console.log(viewType)
    const newData = data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
        .reduce((acc, data, i, arr) => {
            if (!acc[data.eventType]) {
                acc[data.eventType] = 1;
            } else {
                acc[data.eventType] += 1;
            }
            return acc;
        }, {});
    const eventArr = Object.entries(newData)
        .reduce((acc, node, i, arr) => {
            let [type, val] = node;
            if (viewType === 'week') {
                acc.push({
                    name: type,
                    value: val
                })
            }
            else{
                acc.push({
                    name: type,
                    value: 1
                }) 
            }

            return acc;
        }, []);
    dispatch({
        type: SET_PIE_CHART_DATA,
        payload: eventArr
    })
}

export const setBarChartData2 = (viewType, data) => dispatch => {
    const trimedData = data.map((item, i) => ({ eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('ddd') }))
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

export const setViewType = viewType => dispatch => {
    console.log(viewType)
    dispatch({
        type: SET_CHART_VIEW_TYPE,
        payload: viewType
    })
}