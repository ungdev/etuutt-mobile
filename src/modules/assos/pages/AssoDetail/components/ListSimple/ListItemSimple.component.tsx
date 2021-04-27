import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Padding, palette } from '../../../../../../theme/theme';
export const LIST_ITEM_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.small,
    borderTopWidth: 1,
    borderColor: palette.white,
    height: LIST_ITEM_HEIGHT,
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    color: palette.white,
  },
});

interface ListItemSimpleProps {
  value: string;
}

export const ListItemSimple: FunctionComponent<ListItemSimpleProps> = ({ value }) => {
  if (value === null || value === '' || value === 'undefined') {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
      </View>
    );
  }
};
