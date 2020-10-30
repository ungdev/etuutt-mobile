import React, { Component, FunctionComponent, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    paddingLeft: spacing * 2,
  },
  title: {
    ...typos.mb,
    color: palette.white,
  },
  value: {
    ...typos.m,
    color: palette.white,
  },
});

interface ProfileSectionProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export const ProfileSection: FunctionComponent<ProfileSectionProps> = ({ title, value, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>{icon}</View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
