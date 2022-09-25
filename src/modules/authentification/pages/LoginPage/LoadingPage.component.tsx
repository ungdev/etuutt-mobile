import React, { FunctionComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { palette } from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
});

export const LoadingPage: FunctionComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);
