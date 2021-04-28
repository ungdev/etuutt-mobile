import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { palette } from '../../../../theme/theme';
import { useMyUEsList } from '../../hooks/useMyUEsList.hook';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export const MyUE: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(paths.assos.assosNavigator.detailAsso.name, { destination });
  };
  const { data, error, isLoading } = useMyUEsList();

  useEffect(() => {
    if (error !== undefined) {
      //TODO service Alert(error)
    }
  }, [error]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return <View />;
  } else {
    return (
      <>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.container}></View>
        </SafeAreaView>
      </>
    );
  }
};
