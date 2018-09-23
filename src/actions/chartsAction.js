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
    console.log(newData);
    const eventArr = Object.entries(newData)
        .reduce((acc, node, i, arr) => {
            console.log(node)
            let [type, val] = node;
            console.log(type)
            let item = {
                name: type,
                value: val
            }

            acc.push(item)
            return acc;
        }, []);
    console.log(eventArr)
    dispatch({
        type: SET_PIE_CHART_DATA,
        payload: eventArr
    })
}