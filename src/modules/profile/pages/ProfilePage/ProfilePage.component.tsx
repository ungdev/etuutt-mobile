import useAxios from 'axios-hooks';
import React, { FunctionComponent, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  AdressCard,
  BirthdayCake,
  Envelope,
  MaleFemale,
  ToolBox,
  University,
} from '../../../../components/Icons';
import { ProfilePicture } from '../../../../components/ProfilePicture';
import { palette, spacing, typos } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { ProfileSection } from './components/ProfileSection/ProfileSection.component';
import { ProfileUEList } from './components/ProfileSection/ProfileUEList.component';

const PROFILE_PICTURE_SIZE = 120;
const iconSize = 50;

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
    backgroundColor: palette.blue,
    height: 2,
    width: '100%',
    marginTop: spacing * 2,
  },
});

export const ProfilePage: FunctionComponent = () => {
  const [{ data, loading, error }, refetch] = useAxios('private/user/account');
  useEffect(() => {
    if (error !== undefined) {
      data?.account;
      //si errror, j'affiche modal ou autre
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfilePicture size={PROFILE_PICTURE_SIZE} imageUri="" />
        <Text style={styles.fullName}>{data.data.fullName}</Text>
        <View style={styles.separator} />

        <ProfileSection
          title={i18n.t('profile.section.studentNumber')}
          value={data.data.studentId}
          icon={<AdressCard color={palette.white} size={iconSize} />}
        />

        <ProfileSection
          title={i18n.t('profile.section.branch')}
          value={data.data.branch}
          icon={<University color={palette.white} size={iconSize} />}
        />

        <ProfileSection
          title={i18n.t('profile.section.email')}
          value={data.data.email}
          icon={<Envelope color={palette.white} size={iconSize} />}
        />

        <ProfileSection
          title={i18n.t('profile.section.gender')}
          value={data.data.sex === 'male' ? 'Homme' : 'Femme'}
          icon={<MaleFemale color="transparent" secondaryColor={palette.white} size={iconSize} />}
        />

        <ProfileSection
          title={i18n.t('profile.section.birthdate')}
          value="14/01/1946"
          icon={<BirthdayCake color={palette.white} size={iconSize} />}
        />

        <ProfileUEList
          title={i18n.t('profile.section.uelist')}
          value={data.data.uvs}
          icon={<ToolBox color={palette.white} size={iconSize} />}
        />
      </ScrollView>
    </View>
  );
};
