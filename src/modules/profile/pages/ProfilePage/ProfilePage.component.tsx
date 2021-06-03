import { useNavigation } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import moment from 'moment';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  AdressCard,
  BirthdayCake,
  Envelope,
  MaleFemale,
  ToolBox,
  University,
} from '../../../../components/Icons';
import { LoadingPage } from '../../../../components/LoadingPage';
import { ProfilePicture } from '../../../../components/ProfilePicture';
import { palette, spacing, typos } from '../../../../theme/theme';
import config from '../../../api/config';
import i18n from '../../../internationalization/service/i18n.service';
import { ProfileSection } from './components/ProfileSection/ProfileSection.component';
import { ProfileUEList } from './components/ProfileSection/ProfileUEList.component';

const PROFILE_PICTURE_SIZE = 130;
const iconSize = 50;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.blue,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.white,
  },
  mainInfos: {
    paddingTop: 20,
    alignItems: 'center',
    width: '98%',
    flexDirection: 'column',
    alignSelf: 'center',
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else if (error) {
      Alert.alert(
        'Information',
        error.message,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => navigation.goBack() },
        ],
        { cancelable: false }
      );
    } else {
      setIsLoading(false);
    }
  }, [loading, error]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else {
    const date = moment(data?.data.birthday.date).format('DD/MM/YYYY');
    const image = data?.data._links.find((link) => link.rel === 'user.image').uri;
    const image_uri = `${config.etu_utt_baseuri}${image}`;

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.mainInfos}>
              <ProfilePicture size={PROFILE_PICTURE_SIZE} imageUri={image_uri} />
              <Text style={styles.fullName}>{data?.data.fullName}</Text>
              <View style={styles.separator} />

              <ProfileSection
                title={i18n.t('profile.section.studentNumber')}
                value={data?.data.studentId}
                icon={<AdressCard color={palette.white} size={iconSize} />}
              />

              <ProfileSection
                title={i18n.t('profile.section.branch')}
                value={data?.data.branch}
                icon={<University color={palette.white} size={iconSize} />}
              />

              <ProfileSection
                title={i18n.t('profile.section.email')}
                value={data?.data.email}
                icon={<Envelope color={palette.white} size={iconSize} />}
              />

              <ProfileSection
                title={i18n.t('profile.section.gender')}
                value={data?.data.sex === 'male' ? 'Homme' : 'Femme'}
                icon={
                  <MaleFemale color="transparent" secondaryColor={palette.white} size={iconSize} />
                }
              />

              <ProfileSection
                title={i18n.t('profile.section.birthdate')}
                value={date}
                icon={<BirthdayCake color={palette.white} size={iconSize} />}
              />

              <ProfileUEList
                title={i18n.t('profile.section.uelist')}
                value={data?.data.uvs}
                icon={<ToolBox color={palette.white} size={iconSize} />}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};
