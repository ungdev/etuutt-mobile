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
import Adresscard from '../../../../../assets/icons/addresscard.svg';
import University from '../../../../../assets/icons/university.svg';
import Envelope from '../../../../../assets/icons/envelope.svg';
import Malefemale from '../../../../../assets/icons/malefemale.svg';
import Birthdaycake from '../../../../../assets/icons/birthdaycake.svg';
import { ProfileSection } from './components/ProfileSection';

const PROFILE_PICTURE_SIZE = 120;
const iconSize = 50;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.blue,
  },
  container: {
    flex: 1,
    backgroundColor: palette.grey,
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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfilePicture
          size={PROFILE_PICTURE_SIZE}
          imageUri="https://img.lemde.fr/2020/03/24/0/0/3479/2319/688/0/60/0/80264c8_WAS471_HEALTH-CORONAVIRUS-USA_0324_11.JPG"
        />
        <Text style={styles.fullName}>DONALD TRUMP</Text>
        <View style={styles.separator} />
        <HorizontalSpacer size={3} />
  <ProfileSection title={i18n.t('profile.section.studentNumber')} value="38277" icon={<Adresscard width={iconSize} height={iconSize} color={palette.white}/>}/>
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.branch')} value="TC01" icon={<University width={iconSize} height={iconSize} color={palette.white}/>} />
        <HorizontalSpacer size={3} />
        <ProfileSection
          title={i18n.t('profile.section.email')}
          value="donald.trump@usa.com"
          icon={<Envelope width={iconSize} height={iconSize} color={palette.white}/>}
        />
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.gender')} value="Homme" icon={<Malefemale width={iconSize} height={iconSize} color={palette.white}/>} />
        <HorizontalSpacer size={3} />
        <ProfileSection title={i18n.t('profile.section.birthdate')} value="14/01/1946" icon={<Birthdaycake width={iconSize} height={iconSize} color={palette.white}/>} />
        <HorizontalSpacer size={3} />
      </ScrollView>
    </View>
  );
};
