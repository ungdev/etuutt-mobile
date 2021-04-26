import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Envelope, Mails } from '../../../../components/Icons';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { Marging, Padding, palette, radius } from '../../../../theme/theme';
import { useDetailsAsso } from '../../hooks/useDetailsAsso.hook';
import { getImageLink } from '../AllAssos/services/getImageLink.service';
import { Header } from '../components/Header.component';
import { Accordion } from './components/Accordion/Accordion.component';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  mainInfos: {
    width: '100%',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
    alignItems: 'center',
    marginTop: Marging.small,
  },
  logo: {
    width: 150,
    height: 150,
  },
  mainInfosContainer: {
    width: '50%',
    flexDirection: 'column',
    padding: Padding.small,
    justifyContent: 'center',
  },
  mainInfosPresident: {
    width: '100%',
    padding: Padding.small,
    borderRadius: radius.extraSmall,
    backgroundColor: palette.blue,
  },
  mainInfosAskJoin: {
    width: '100%',
    padding: Padding.small,
    borderRadius: radius.extraSmall,
    backgroundColor: palette.curiousBlue,
    marginTop: Marging.medium,
  },
  title: {
    color: palette.white,
    fontWeight: 'bold',
  },
  text: {
    color: palette.white,
  },
  logoSocialContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLogo: {
    fontSize: 60,
    color: palette.curiousBlue,
    borderRadius: radius.round,
    marginHorizontal: Marging.large,
  },
  contactsContainer: {
    width: '100%',
  },
});

export const AssoDetail: FunctionComponent = (route) => {
  const asso = route.route.params.destination;
  const { data, error, isLoading } = useDetailsAsso(asso);
  const { navigate } = useNavigation();
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };

  useEffect(() => {
    if (error !== undefined) {
      //TODO service Alert(error)
    }
  }, [error]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return <View />;
  } else {
    return (
      <>
        <SafeAreaView style={styles.safeArea}>
          <TouchableWithoutFeedback
            onPress={() => onButtonBackPress(paths.assos.assosNavigator.tabs.name)}
          >
            <Header bigtitle={data.data.name} />
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.safeArea}>
              <View style={styles.mainInfos}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: getImageLink(data.data),
                    }}
                    style={styles.logo}
                  />
                </View>

                <View style={styles.mainInfosContainer}>
                  <View style={styles.mainInfosPresident}>
                    <Text style={styles.title}>Président</Text>
                    <Text style={styles.text}>NOM PRENOM</Text>
                  </View>
                  <View style={styles.mainInfosAskJoin}>
                    <TouchableOpacity>
                      <Text style={styles.text}>Demander à rejoindre</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.logoSocialContainer}>
                <Icon
                  style={styles.socialLogo}
                  name="logo-facebook"
                  color={palette.curiousBlue}
                  onPress={() => {}}
                />
                <Icon
                  style={styles.socialLogo}
                  name="logo-twitter"
                  color={palette.curiousBlue}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.contactsContainer}>
                <Accordion
                  title="TITRE"
                  list={[
                    { icon: Mails, name: 'Email', value: 'test@test.fr' },
                    { icon: Envelope, name: 'Téléphone', value: '01.02.03.04.05' },
                  ]}
                />
              </View>
              <View style={styles.descriptionContainer}></View>
              <View style={styles.bureauContainer}></View>
              <View style={styles.membresContainer}></View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
};
