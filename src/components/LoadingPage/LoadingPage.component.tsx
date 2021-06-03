import React, { FunctionComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { palette } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const LoadingPage: FunctionComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={palette.curiousBlue} />
      </View>
    </>
  );
};
