import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { LoadingPage } from '../../../../../components/LoadingPage';
import { paths } from '../../../../../navigation/paths';
import { palette, spacing, typos } from '../../../../../theme/theme';
import i18n from '../../../../internationalization/service/i18n.service';

import { TimetableDay } from '../components/TimetableDay.component';

const DayTab = createMaterialTopTabNavigator();
const bouncingTab = 30;

const styles = StyleSheet.create({
    icon: {
        marginTop: spacing * 1,
    },
    container: { flex: 1, backgroundColor: palette.blue },
    label: {
        ...typos.xxs,
        textAlign: 'center',
        padding: 0,
        marginTop: spacing * 2,
        textTransform: 'none',
        fontSize: 9
    },
    tab: {
        padding: 0,
    },
    indicator: {
        backgroundColor: palette.white,
        height: spacing,
    },
});

export const TimetableNavigator: FunctionComponent = () => {
    const [{ data, loading, error }, refetch] = useAxios('private/user/schedule');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation();

    // TODO: Make it current day (Monday by default if current day does not match)
    const currentDayRootName = paths.timetable.tabs.monday.name;

    useEffect(() => {
        if (loading) {
            setIsLoading(true);
        } else if (error) {
            Alert.alert(
                'Information',
                error.message,
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => navigation.goBack() },
                ],
                { cancelable: false }
            );
        } else {
            setIsLoading(false);
        }
    }, [loading, error]);

    if (isLoading === true) {
        return <LoadingPage />;
    } else {
        let coursesData = [];
        if (data)
            coursesData = data.data;

        return (
            <SafeAreaView style={styles.container}>
                <DayTab.Navigator
                    tabBarPosition="bottom"
                    initialRouteName={currentDayRootName}
                    springConfig={{ damping: bouncingTab }}
                    tabBarOptions={{
                        showIcon: true,
                        iconStyle: styles.icon,
                        activeTintColor: palette.white,
                        inactiveTintColor: palette.white,
                        style: {
                            backgroundColor: palette.blue,
                        },
                        labelStyle: styles.label,
                        tabStyle: styles.tab,
                        indicatorStyle: styles.indicator,
                    }}
                >
                    <DayTab.Screen
                        name={paths.timetable.tabs.monday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.monday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.monday.value'), courses: coursesData.filter(dayData => dayData.day == "monday") }}
                    />
                    <DayTab.Screen
                        name={paths.timetable.tabs.tuesday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.tuesday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.tuesday.value'), courses: coursesData.filter(dayData => dayData.day == "tuesday") }}
                    />
                    <DayTab.Screen
                        name={paths.timetable.tabs.wednesday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.wednesday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.wednesday.value'), courses: coursesData.filter(dayData => dayData.day == "wednesday") }}
                    />
                    <DayTab.Screen
                        name={paths.timetable.tabs.thursday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.thursday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.thursday.value'), courses: coursesData.filter(dayData => dayData.day == "thursday") }}
                    />
                    <DayTab.Screen
                        name={paths.timetable.tabs.friday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.friday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.friday.value'), courses: coursesData.filter(dayData => dayData.day == "friday") }}
                    />
                    <DayTab.Screen
                        name={paths.timetable.tabs.saturday.name}
                        component={TimetableDay}
                        options={{
                            tabBarLabel: i18n.t('timetable.days.saturday.value'),
                        }}
                        initialParams={{ dayName: i18n.t('timetable.days.saturday.value'), courses: coursesData.filter(dayData => dayData.day == "sathurday") }}
                    />
                </DayTab.Navigator>
            </SafeAreaView>
        );
    }
};
