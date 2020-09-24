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
    marginTop: 7,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
      visible: true,
      name: 'Mon profil',
      icon: 'user-circle-o',
      destination: 'profile',
      color: '#34A9DB',
    },
    {
      visible: true,
      name: 'Guide des UEs',
      icon: 'book',
      destination: 'ue',
      color: '#DA8F20',
    },
    {
      visible: true,
      name: 'Emploi du temps',
      icon: 'table',
      destination: 'edt',
      color: '#C6BB59',
    },
    {
      visible: true,
      name: 'Événements',
      icon: 'calendar',
      destination: 'events',
      color: '#2F7C8D',
    },
    {
      visible: true,
      name: 'Trombinoscopes',
      icon: 'address-card-o',
      destination: 'trombi',
      color: '#B11818',
    },
    {
      visible: true,
      name: 'Associations',
      icon: 'group',
      destination: 'orgas',
      color: '#288642',
    },
    {
      visible: true,
      name: 'À propos',
      icon: 'info',
      destination: 'about',
      color: '#CD7069',
    },
    {
      visible: true,
      name: 'Se déconnecter',
      icon: 'sign-out',
      destination: 'logout',
      color: '#928989',
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
          image={
            <Icon
              name={section.icon}
              size={iconSize}
              color={colors.icons.color}
              style={{ position: 'absolute', top: 18 }}
            />
          }
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
