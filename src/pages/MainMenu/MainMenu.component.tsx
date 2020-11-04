import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GridButton } from '../../components/GridButton';
import {
  AdressBook,
  Book,
  Calendar,
  Clone,
  Euro,
  Images,
  Location,
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

export const MainMenu: FunctionComponent = () => {
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
      destination: 'flash_infos',
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
      destination: 'timetable',
      color: palette.yellow,
    },
    {
      key: 5,
      visible: true,
      name: 'trombi',
      Icon: AdressBook,
      destination: 'trombi',
      color: palette.red,
    },
    {
      key: 6,
      visible: true,
      name: 'events',
      Icon: Calendar,
      destination: 'events',
      color: palette.calypsoBlue,
    },
    {
      key: 7,
      visible: true,
      name: 'assos',
      Icon: Users,
      destination: 'assos',
      color: palette.green,
    },
    {
      key: 8,
      visible: true,
      name: 'galerie',
      Icon: Images,
      destination: 'galerie',
      color: palette.purple,
    },
    {
      key: 9,
      visible: true,
      name: 'map',
      Icon: Location,
      destination: 'map',
      color: palette.grey,
    },
    {
      key: 10,
      visible: true,
      name: 'buck_utt',
      Icon: Euro,
      destination: 'buck_utt',
      color: palette.fuchsia,
    },
    {
      key: 11,
      visible: true,
      name: 'cumul_timetable',
      Icon: Clone,
      destination: 'cumul_timetable',
      color: palette.grey,
    },
  ];

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
