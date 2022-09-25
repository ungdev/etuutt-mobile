import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { paths } from '../../../navigation/paths';
import { palette, radius } from '../../../theme/theme';

const styles = StyleSheet.create({
  containerItem: {
    width: '30%',
    margin: 4,
  },
  itemUes: {
    borderRadius: radius.extraSmall,
    backgroundColor: palette.curiousBlue,
    width: '100%',
    height: 25,
    justifyContent: 'center',
  },
  textUEs: {
    textAlign: 'center',
    color: palette.white,
  },
});

export const Tag: FunctionComponent = (item) => {
  const { navigate } = useNavigation();
  const onPress = (destination: ReactNode) => {
    navigate(paths.ue.detailUE.name, { destination });
  };
  const code = item.children;

  return (
    <View style={styles.containerItem}>
      <TouchableOpacity style={styles.itemUes} onPress={() => onPress(code)}>
        <Text style={styles.textUEs}>{item.children}</Text>
      </TouchableOpacity>
    </View>
  );
};
