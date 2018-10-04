import { GET_CHART_DATA, SET_INTERNAL_VIEW_TYPE, SET_CHART_VIEW_TYPE, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from "../types/chartActionTypes";
import moment from 'moment';
import { Math } from "core-js";
export const setPieChartData = (viewType, data) => dispatch => {
    console.log(viewType)
    const newData = data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
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

export const setPieChartData1 = (viewType, data) => dispatch => {
    console.log(viewType)
    const newData = data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
        .reduce((acc, data, i, arr) => {
            console.log(data)
            return acc; 
        }, []);
}

export const setBarChartData = (viewType, data) => dispatch => {
    const trimedData = data.map((item, i) => {
        if (viewType === 'week') {
            return { eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).format('ddd') }
        }
        else if (viewType === 'month') {
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

