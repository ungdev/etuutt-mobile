import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HorizontalSpacer } from '../../../../components/HorizontalSpacer';
import { University } from '../../../../components/Icons';
import { ProfilePicture } from '../../../../components/ProfilePicture';
import { palette, spacing, typos } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { ProfileSection } from './components/ProfileSection';

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
        <University color={palette.blue} size={100} />
        <Text style={styles.fullName}>DONALD TRUMP</Text>
        <View style={styles.separator} />
        <ProfileSection title={i18n.t('profile.section.studentNumber')} value="38277" icon="" />
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.branch')} value="TC01" icon="" />
        <HorizontalSpacer size={3} />
        <ProfileSection
          title={i18n.t('profile.section.email')}
          value="donald.trump@usa.com"
          icon=""
        />
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.gender')} value="Homme" icon="" />
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.birthdate')} value="14/01/1946" icon="" />
        <HorizontalSpacer size={3} />
      </ScrollView>
    </View>
  );
};
