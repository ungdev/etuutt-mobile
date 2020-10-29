import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProfilePicture } from '../../../../components/ProfilePicture';
import { palette, spacing, typos } from '../../../../theme/theme';

const PROFILE_PICTURE_SIZE = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: spacing * 3,
  },
  fullName: {
    ...typos.h2,
    textAlign: 'center',
    marginTop: spacing * 2,
    color: palette.black,
  },
  separator: {
    backgroundColor: palette.black,
    height: 1,
    width: '100%',
    marginTop: spacing * 2,
  },
});

export const ProfilePage: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfilePicture
          size={PROFILE_PICTURE_SIZE}
          imageUri="https://img.lemde.fr/2020/03/24/0/0/3479/2319/688/0/60/0/80264c8_WAS471_HEALTH-CORONAVIRUS-USA_0324_11.JPG"
        />
        <Text style={styles.fullName}>MARTIN DUPONT</Text>
        <View style={styles.separator} />
      </ScrollView>
    </View>
  );
};
