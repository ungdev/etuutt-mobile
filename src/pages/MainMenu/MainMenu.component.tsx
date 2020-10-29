import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GridButton } from '../../components/GridButton';
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
      name: 'Mon profil',
      icon: 'user-circle-o',
      destination: 'profile',
      color: palette.curiousBlue,
    },
    {
      visible: true,
      name: 'Guide des UEs',
      icon: 'book',
      destination: paths.ue.name,
      color: palette.orange,
    },
    {
      visible: true,
      name: 'Emploi du temps',
      icon: 'table',
      destination: 'edt',
      color: palette.yellow,
    },
    {
      visible: true,
      name: 'Événements',
      icon: 'calendar',
      destination: 'events',
      color: palette.calypsoBlue,
    },
    {
      visible: true,
      name: 'Trombinoscopes',
      icon: 'address-card-o',
      destination: 'trombi',
      color: palette.red,
    },
    {
      visible: true,
      name: 'Associations',
      icon: 'group',
      destination: 'orgas',
      color: palette.green,
    },
    {
      visible: true,
      name: 'À propos',
      icon: 'info',
      destination: 'about',
      color: palette.pink,
    },
    {
      visible: true,
      name: 'Se déconnecter',
      icon: 'sign-out',
      destination: 'logout',
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
            title={item.name}
            iconName={item.icon}
            onPress={() => onButtonPress(item.destination)}
            color={item.color}
          />
        )}
      />
    </View>
  );
};
