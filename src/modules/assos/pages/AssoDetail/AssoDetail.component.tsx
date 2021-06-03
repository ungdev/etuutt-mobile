import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Arobase, GlobeWeb } from '../../../../components/Icons';
import { Phone } from '../../../../components/Icons/components/Phone.icon';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { Marging, Padding, palette, radius } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { useDetailsAsso } from '../../hooks/useDetailsAsso.hook';
import { getImageLink } from '../AllAssos/services/getImageLink.service';
import { Header } from '../components/Header.component';
import { Accordion } from './components/Accordion/Accordion.component';
import { ListAccordionMembers } from './components/Accordion/components/ListAccordionMembers.component';
import { ListSimple } from './components/ListSimple/ListSimple.component';

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
    height: 'auto',
    padding: Padding.small,
  },
  descriptionContainer: {
    width: '100%',
    padding: Padding.small,
  },
  membersContainer: {
    width: '100%',
    padding: Padding.small,
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
    let groups = [];
    const { members } = data.data._embed;
    members.forEach((member) => {
      const groupId = member.group.id;
      if (!groups.find((group) => group.id === groupId)) groups.push(member.group);
    });

    groups = groups.sort((a, b) => {
      if (a.position > b.position) return 1;
      if (a.position < b.position) return -1;
      return 0;
    });

    const findPresident = (members) => {
      let resultat = 'null';
      members.forEach((member) => {
        if (member.role === 'president') {
          resultat = member._embed.user.fullName;
        }
      });
      return resultat;
    };

    const president = findPresident(members);

    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => onButtonBackPress(paths.assos.assosNavigator.tabs.name)}
        >
          <Header bigtitle={data.data.name} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <ScrollView style={styles.safeArea}>
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
                  <Text style={styles.text}>{president}</Text>
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
                title={i18n.t('assos.assoDetail.contacts')}
                list={[
                  {
                    icon: () => <Phone color={palette.white} size={40} />,
                    name: i18n.t('assos.assoDetail.phone'),
                    value: data.data.phone,
                    onPress: 'call',
                  },
                  {
                    icon: () => <GlobeWeb color={palette.white} size={40} />,
                    name: i18n.t('assos.assoDetail.website'),
                    value: data.data.website,
                    onPress: 'website',
                  },
                  {
                    icon: () => <Arobase color={palette.white} size={45} />,
                    name: i18n.t('assos.assoDetail.mail'),
                    value: data.data.mail,
                    onPress: 'mail', //laisser le mail en dernier (comme une asso à toujours un mail, ça permet de garder les angles arrondi du dernier item de l'accordion)
                  },
                ]}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <ListSimple
                title={i18n.t('assos.assoDetail.description')}
                value={data.data.descriptionShort}
              />
            </View>
            {groups.map((group) => (
              <View style={styles.membersContainer} key={group.id}>
                <ListAccordionMembers id={group.id} title={group.name} items={members} />
              </View>
            ))}
          </ScrollView>
        </View>
      </>
    );
  }
};