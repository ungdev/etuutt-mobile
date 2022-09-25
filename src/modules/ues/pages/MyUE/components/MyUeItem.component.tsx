import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { paths } from '../../../../../navigation/paths';
import { Marging, Padding, palette, radius } from '../../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    borderRadius: radius.medium,
    height: 70,
    width: '48%',
    marginTop: Marging.small,
    marginHorizontal: '1%',
    backgroundColor: palette.curiousBlue,
  },
  title: {
    fontSize: 16,
    color: palette.white,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  infosContainer: {
    width: '85%',
    paddingHorizontal: Padding.medium,
  },
});

interface UeItemProps {
  code: string;
}

export const MyUeItem: FunctionComponent<UeItemProps> = ({ code }) => {
  const { navigate } = useNavigation();
  const onPress = (destination: string) => {
    navigate(paths.ue.detailUE.name, { destination });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(code)}>
      <View style={styles.itemContainer}>
        <View style={styles.infosContainer}>
          <Text style={styles.title}>{code}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
