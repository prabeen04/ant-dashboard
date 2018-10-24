import { createSelector } from "reselect";

const data = state => state.chartsReducer.data
const viewType = state => state.chartsReducer.viewType

const advancedBarChartData = createSelector(
    [data, viewType],
    (data, viewType) => {
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
        return dayArray;
    }
)