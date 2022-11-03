import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs"
import { palette } from "../../../../../theme/theme";

import ScheduleHours from "./ScheduleHours";
import ScheduleItems from "./ScheduleItems";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: palette.white,
    },
    subcontainer: {
        flex: 1,
        marginTop: 3
    },
    timetable: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    title: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    day: {
        fontSize: 25
    }
});

interface DayRouteProps {
    dayName: string
    courses: Course[]
}

type TimetableDayParamList = {
    timetableMonday: DayRouteProps,
    timetableTuesday: DayRouteProps,
    timetableWednesday: DayRouteProps,
    timetableThursday: DayRouteProps,
    timetableFriday: DayRouteProps,
    timetableSaturday: DayRouteProps,
}

export const TimetableDay = ({ navigation, route } : MaterialTopTabScreenProps<TimetableDayParamList, "timetableMonday">) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.subcontainer}>
                <View style={styles.title}>
                    <Text style={styles.day}>{route.params.dayName}</Text>
                </View>
                <View style={styles.timetable}>
                    <ScheduleHours />
                    <ScheduleItems courses={route.params.courses} />
                </View>
            </ScrollView>
        </View>
    );
};