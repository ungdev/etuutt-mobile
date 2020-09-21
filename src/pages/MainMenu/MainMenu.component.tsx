import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GridButton } from '../../components/GridButton';
import { paths } from '../../navigation/paths';
import { colors } from '../../theme/theme';

const iconSize = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...colors.pages,
  },
  grid: {
    flex: 1,
    marginTop: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  empty: {
    width: Dimensions.get('window').width / 3 - 6, // TODO refacto
    height: Dimensions.get('window').width / 3 - 6,
    marginHorizontal: 1,
    marginVertical: 1,
  },
});

export const MainMenu: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    switch (destination) {
      case 'events':
        navigate('Events');
        break;
      case 'orgas':
        navigate('Assos');
        break;
      case 'about':
        navigate('About');
        break;
      case 'profile':
        navigate('Profile');
        break;
      case 'ue':
        navigate(paths.ue.name);
        break;
      case 'edt':
        navigate('Timetable');
        break;
      case 'trombi':
        navigate('Trombi');
        break;
      default:
        break;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grid: any[] = [];
  const content = [
    {
      name: 'Mon profil',
      icon: 'user',
      destination: 'profile',
    },
    {
      name: 'Guide des UEs',
      icon: 'book',
      destination: 'ue',
    },
    {
      name: 'Emploi du temps',
      icon: 'table',
      destination: 'edt',
    },
    {
      name: 'Événements',
      icon: 'calendar',
      destination: 'events',
    },
    {
      name: 'Trombinoscopes',
      icon: 'address-book',
      destination: 'trombi',
    },
    {
      name: 'Associations',
      icon: 'users',
      destination: 'orgas',
    },
    {
      name: 'À propos',
      icon: 'question',
      destination: 'about',
    },
    {
      name: 'Se déconnecter',
      icon: 'sign-out',
      destination: 'logout',
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
          image={<Icon name={section.icon} size={iconSize} color={colors.icons.color} />}
          onPress={() => onButtonPress(section.destination)}
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
