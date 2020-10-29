import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { GridButton } from '../../components/GridButton';
import { paths } from '../../navigation/paths';
import { palette, spacing } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  grid: {
    flex: 1,
    marginTop: spacing * 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  empty: {
    width: Dimensions.get('screen').width / 3 - spacing * 2,
    height: Dimensions.get('screen').width / 3 - spacing * 2,
    margin: spacing,
  },
});

export const MainMenu: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(destination);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grid: any[] = [];
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

  const gridContent = [];
  for (let i = 0; i < content.length; i += 3) {
    gridContent.push(content.slice(i, i + 3));
  }

  let key = 0;
  gridContent.forEach((row) => {
    const rowContent = [];
    row.forEach((section) => {
      rowContent.push(
        <GridButton
          key={key++}
          title={section.name}
          iconName={section.icon}
          onPress={() => onButtonPress(section.destination)}
          color={section.color}
        />
      );
    });

    if (rowContent.length < 3) {
      rowContent.push(<View style={styles.empty} key={key++} />);
    }
    if (rowContent.length < 3) {
      rowContent.push(<View style={styles.empty} key={key++} />);
    }
    grid.push(
      <View key={key++} style={styles.row}>
        {rowContent}
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.grid}>{grid}</ScrollView>
    </View>
  );
};
