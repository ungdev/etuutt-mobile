import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HorizontalSpacer } from '../../../../components/HorizontalSpacer';
import { palette, radius, spacing, typos } from '../../../../theme/theme';
import { ProfileSectionProps } from '../../interfaces/profileSection.interface';

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
  value: {
    ...typos.m,
    color: palette.white,
  },
});

export const ProfileSection: FunctionComponent<ProfileSectionProps> = ({ title, value, icon }) => {
  if (value === null || value === '' || value === 'undefined') {
    return null;
  } else {
    return (
      <>
        <HorizontalSpacer size={3} />
        <View style={styles.container}>
          <View style={styles.leftContainer}>{icon}</View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        </View>
      </>
    );
  }
};
