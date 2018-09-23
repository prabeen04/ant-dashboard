import { GET_CHART_DATA, SET_INTERNAL_VIEW_TYPE, SET_VIEW_TYPE, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from "../types/chartActionTypes";
import moment from 'moment';
export const setPieChartData = data => dispatch => {
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

export const setBarChartData = data => dispatch => {
    let trimedData = data.map((item, i) => ({ eventId: item.eventId, eventType: item.eventType, startDate: moment(item.startDate).weekday() }))
        .reduce((acc, item, i, arr) => {
            console.log(acc[i]);
            if (acc && acc.length) {
                console.log(acc[i]);
                console.log('inside first if')
                if (acc[i] && acc[i]['date']) {
                    console.log('inside second if')
                    acc.push({
                        date: item.startDate,
                        value: 1
                    })
                }
                acc.push({
                    date: item.startDate,
                    value: item.eventType
                })
            }
            else {
                console.log('inside else')
                let obj = {
                    date: item.startDate,
                    value: 1
                }
                acc.push(obj)
            }
            // console.log(JSON.stringify(acc, null, 4))
            // console.log(JSON.stringify(acc[i], null, 4))
            console.log(acc[i])
            return acc;
        }, []);
    console.log(trimedData)
}