import { useNavigation } from "@react-navigation/native";
import useAxios from "axios-hooks";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, View, ScrollView, Text } from "react-native";
import { LoadingPage } from "../../../../components/LoadingPage";
import { palette } from "../../../../theme/theme";

import { TimetableDay } from "./components/TimetableDay.component";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: palette.blue,
    }
});

export const TimetablePage: FunctionComponent = () => {
    const [{ data, loading, error }, refetch] = useAxios('private/user/schedule');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation();

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
        return (
            <SafeAreaView style={styles.safeArea}>
                <TimetableDay />
            </SafeAreaView >
        );
    }
};
