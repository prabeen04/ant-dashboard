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
            console.log(acc[3]);
            if(!acc[i]){
                console.log('inside first if')
                // if (acc[i].hasOwnProperty('date')) {
                //     console.log('inside second if')
                //     let obj = {
                //         date: item.startDate,
                //         value: 1
                //     }
                //     acc.push(obj)
                // } 
                let obj = {
                    date: item.startDate,
                    value: 4
                }
                acc.push(obj)
            }
            else {
                console.log('inside else')
                let obj = {
                    date: item.startDate,
                    value: 1
                }
                acc.push(obj)
            }
            // console.log(acc[i]['date']);
            return acc;
        }, [])
    console.log(trimedData)
}