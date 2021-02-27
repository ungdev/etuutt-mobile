import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette, radius, spacing, typos } from '../../../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: palette.blue,
    borderRadius: radius.extraSmall,
    padding: spacing * 2,
    flexDirection: 'row',
  },
  leftContainer: { flex: 1 },
  rightContainer: {
    flex: 5,
    paddingLeft: spacing * 1,
  },
  title: {
    ...typos.mb,
    color: palette.white,
  },
  ues: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  itemUes: {
    borderRadius: radius.extraSmall,
    backgroundColor: palette.red,
    width: '33%',
  },
  textUEs: {
    textAlign: 'center',
    color: palette.white,
  },
});

interface ProfileUEListProps {
  title: string;
  value: Array<string>;
  icon: ReactNode;
}

export const ProfileUEList: FunctionComponent<ProfileUEListProps> = ({ title, value, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>{icon}</View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ues}>
          <TouchableOpacity style={styles.itemUes}>
            <Text style={styles.textUEs}>{value}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
