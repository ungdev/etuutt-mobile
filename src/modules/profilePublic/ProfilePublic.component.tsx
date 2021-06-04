import { useNavigation } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  AdressCard,
  BirthdayCake,
  Envelope,
  MaleFemale,
  ToolBox,
  University,
} from '../../components/Icons';
import { LoadingPage } from '../../components/LoadingPage';
import { ProfilePicture } from '../../components/ProfilePicture';
import { palette, spacing, typos } from '../../theme/theme';
import config from '../api/config';
import { Header } from '../assos/pages/components/Header.component';
import i18n from '../internationalization/service/i18n.service';
import { ProfileSection } from './components/ProfileSection/ProfileSection.component';
import { ProfileUEList } from './components/ProfileSection/ProfileUEList.component';
import { convertDate } from './services/convertDate.service';

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

export const ProfilePublic: FunctionComponent = (route) => {
  const loginStudent = route.route.params.destination;
  const [{ data, loading, error }, refetch] = useAxios('public/users/' + loginStudent);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { navigate, goBack, navigation } = useNavigation();
  const onButtonBackPress = () => {
    goBack();
  };

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
    const date = convertDate(data?.data.birthday);
    const image = data?.data._links.find((link) => link.rel === 'user.image').uri;
    const image_uri = `${config.etu_utt_baseuri}${image}`;

    return (
      <>
        <TouchableWithoutFeedback onPress={() => onButtonBackPress()}>
          <Header bigtitle={data?.data.fullName} />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <ScrollView style={styles.container}>
              <View style={styles.mainInfos}>
                <ProfilePicture size={PROFILE_PICTURE_SIZE} imageUri={image_uri} />

                <View style={styles.separator} />

                <ProfileSection
                  title={i18n.t('profile.section.studentNumber')}
                  value={data?.data.studentId}
                  icon={<AdressCard color={palette.white} size={iconSize} />}
                />

                <ProfileSection
                  title={i18n.t('profile.section.branch')}
                  value={data?.data.branch + ' ' + data?.data.level}
                  icon={<University color={palette.white} size={iconSize} />}
                />

                <ProfileSection
                  title={i18n.t('profile.section.email')}
                  value={data?.data.email}
                  icon={<Envelope color={palette.white} size={iconSize} />}
                  onPress="mail"
                />

                <ProfileSection
                  title={i18n.t('profile.section.gender')}
                  value={data?.data.sex === 'male' ? 'Homme' : 'Femme'}
                  icon={
                    <MaleFemale
                      color="transparent"
                      secondaryColor={palette.white}
                      size={iconSize}
                    />
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
      </>
    );
  }
};
