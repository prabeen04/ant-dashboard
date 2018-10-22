import { GET_CHART_DATA, SET_INTERNAL_VIEW_TYPE, SET_CHART_VIEW_TYPE, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from "../types/chartActionTypes";
import { DEFAULT_ECDH_CURVE } from "tls";
const initialState = {
    timeInterval: [
        { id: 1, value: 'fiscal'},
        { id: 2, value: 'year'},
        { id: 3, value: 'month'},
        { id: 4, value: 'week'}
    ],
    data: [
        {
            eventId: "EVEN00001",
            eventType: "call",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-08-01T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00002",
            eventType: "call",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-08-01T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00003",
            eventType: "meeting",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2017-02-03T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00004",
            eventType: "call",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-04T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00005",
            eventType: "meeting",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-05T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00006",
            eventType: "email",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-06T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00007",
            eventType: "call",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-07T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00008",
            eventType: "meeting",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-08T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },
        {
            eventId: "EVEN00009",
            eventType: "call",
            eventOwnerId: "user00001",
            eventHeading: "eventHeading",
            eventDescription: "eventDescription",
            timeZone: "UCT",
            startDate: "2018-09-09T21:30:17+05:30",
            endDate: "2018-09-19T21:35:17+05:30",
            eventClosureDate: "2018-09-19T21:30:17+05:30"
        },

    ],
    barChartData: [],
    pieChartData: [],
    mixedBarChartData: [],
    viewType: 'week',
    internalViewType: 'week'

};
export const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHART_DATA:
            return state;
        case SET_PIE_CHART_DATA:
            return { ...state, pieChartData: action.payload };
        case SET_BAR_CHART_DATA:
            return { ...state, barChartData: action.payload };
        case SET_CHART_VIEW_TYPE:
            return { ...state, viewType: action.payload };
        case SET_INTERNAL_VIEW_TYPE:
            return state;
        default:
            return state;
    }
    return state;
}