import { paths } from "../../../../../navigation/paths"

const TIMETABLE_DAYROUTES = [
    paths.timetable.tabs.monday.name, // UTC days starts on Sunday
    paths.timetable.tabs.monday.name,
    paths.timetable.tabs.tuesday.name,
    paths.timetable.tabs.wednesday.name,
    paths.timetable.tabs.thursday.name,
    paths.timetable.tabs.friday.name,
    paths.timetable.tabs.saturday.name,
]

const getCurrentDayRoute = () => {
    const today : Date = new Date(Date.now());
    return TIMETABLE_DAYROUTES[today.getUTCDay()]
}

export default getCurrentDayRoute;