import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { palette, radius } from '../../../../../theme/theme';

export const Tag: FunctionComponent = (item) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity style={styles.itemUes}>
        <Text style={styles.textUEs}>{item.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

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
