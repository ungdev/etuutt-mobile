import { useNavigation } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GridButton } from '../../components/GridButton';
import {
  AdressBook,
  Alert,
  Book,
  BookReader,
  Bulb,
  Calendar,
  CarSolid,
  Clone,
  Cloud,
  Euro,
  Images,
  Location,
  Mails,
  Megaphone,
  Timetable,
  UserCircle,
  Users,
} from '../../components/Icons';
import i18n from '../../modules/internationalization/service/i18n.service';
import { paths } from '../../navigation/paths';
import { palette } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

interface RawEvent {
  id: string;
  title: string;
}

interface EventsRequest {
  events: RawEvent[];
}

export const MainMenu: FunctionComponent = () => {
  const [{ data, loading, error }, refetch] = useAxios<EventsRequest>('events');
  useEffect(() => {
    if (error !== undefined) {
      data?.events;
      //si errror, j'affiche modal ou autre
    }
  }, [error]);
  // console.log('test', data, error, loading);

  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(destination);
  };
  const content = [
    {
      key: 1,
      visible: true,
      name: 'profile',
      Icon: UserCircle,
      destination: paths.profile.name,
      color: palette.curiousBlue,
    },
    {
      key: 2,
      visible: true,
      name: 'flash_infos',
      Icon: Megaphone,
      destination: paths.flash_infos.name,
      color: palette.darkPurple,
    },
    {
      key: 3,
      visible: true,
      name: 'ue',
      Icon: Book,
      destination: paths.ue.name,
      color: palette.orange,
    },
    {
      key: 4,
      visible: true,
      name: 'timetable',
      Icon: Timetable,
      destination: paths.timetable.name,
      color: palette.yellow,
    },
    {
      key: 5,
      visible: true,
      name: 'trombinoscope',
      Icon: AdressBook,
      destination: paths.trombinoscope.name,
      color: palette.red,
    },
    {
      key: 6,
      visible: true,
      name: 'events',
      Icon: Calendar,
      destination: paths.events.name,
      color: palette.calypsoBlue,
    },
    {
      key: 7,
      visible: true,
      name: 'assos',
      Icon: Users,
      destination: paths.assos.name,
      color: palette.green,
    },
    {
      key: 8,
      visible: true,
      name: 'galerie',
      Icon: Images,
      destination: paths.galerie.name,
      color: palette.purple,
    },
    {
      key: 9,
      visible: true,
      name: 'map',
      Icon: Location,
      destination: paths.map.name,
      color: palette.grey,
    },
    {
      key: 10,
      visible: true,
      name: 'buckutt',
      Icon: Euro,
      destination: paths.buckutt.name,
      color: palette.fuchsia,
    },
    {
      key: 11,
      visible: true,
      name: 'cumultimetable',
      Icon: Clone,
      destination: paths.cumultimetable.name,
      color: palette.curiousBlue,
    },
    {
      key: 12,
      visible: true,
      name: 'mails',
      Icon: Mails,
      destination: paths.mails.name,
      color: palette.yellow,
    },
    {
      key: 13,
      visible: true,
      name: 'wiki',
      Icon: Bulb,
      destination: paths.wiki.name,
      color: palette.grey,
    },
    {
      key: 14,
      visible: true,
      name: 'cloud',
      Icon: Cloud,
      destination: paths.cloud.name,
      color: palette.orange,
    },
    {
      key: 15,
      visible: true,
      name: 'bu',
      Icon: BookReader,
      destination: paths.bu.name,
      color: palette.calypsoBlue,
    },
    {
      key: 16,
      visible: true,
      name: 'downdetector',
      Icon: Alert,
      destination: paths.downdetector.name,
      color: palette.red,
    },
    {
      key: 17,
      visible: true,
      name: 'covoit',
      Icon: CarSolid,
      destination: paths.covoit.name,
      color: palette.green,
    },
  ];

  /*if(loading){
    return //spinner 
  }*/

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={content}
        renderItem={({ item }) => (
          <GridButton
            title={i18n.t(`mainMenu.buttons.${item.name}`)}
            Icon={item.Icon}
            onPress={() => onButtonPress(item.destination)}
            color={item.color}
          />
        )}
      />
    </View>
  );
};
