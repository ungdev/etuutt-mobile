import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GridButton } from '../../components/GridButton';
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
      visible: true,
      name: 'profile',
      icon: 'user-circle-o',
      destination: paths.profile.name,
      color: palette.curiousBlue,
    },
    {
      visible: true,
      name: 'ue',
      icon: 'book',
      destination: paths.ue.name,
      color: palette.orange,
    },
    {
      visible: true,
      name: 'timetable',
      icon: 'table',
      destination: 'timetable',
      color: palette.yellow,
    },
    {
      visible: true,
      name: 'events',
      icon: 'calendar',
      destination: 'events',
      color: palette.calypsoBlue,
    },
    {
      visible: true,
      name: 'trombi',
      icon: 'address-card-o',
      destination: 'trombi',
      color: palette.red,
    },
    {
      visible: true,
      name: 'assos',
      icon: 'group',
      destination: 'assos',
      color: palette.green,
    },
    {
      visible: true,
      name: 'about',
      icon: 'info',
      destination: 'about',
      color: palette.pink,
    },
    {
      visible: true,
      name: 'logout',
      icon: 'sign-out',
      destination: 'logout',
      color: palette.darkGrey,
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
            iconName={item.icon}
            onPress={() => onButtonPress(item.destination)}
            color={item.color}
          />
        )}
      />
    </View>
  );
};
