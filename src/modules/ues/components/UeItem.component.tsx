import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Marging, Padding, palette, radius } from '../../../theme/theme';

const changeColor = (category: string) => {
  let resultat;
  if (category === 'cs') {
    resultat = '#9C497C';
  } else if (category === 'tm') {
    resultat = '#A65A67';
  } else if (category === 'master') {
    resultat = '#F18A4B';
  } else if (category === 'ec') {
    resultat = '#FDB83A';
  } else if (category === 'me') {
    resultat = '#EAA533';
  } else if (category === 'ht') {
    resultat = '#F37546';
  } else if (category === 'st') {
    resultat = '#8C3580';
  } else {
    resultat = '#FFFFFF';
  }

  return { backgroundColor: resultat };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    borderRadius: radius.medium,
    height: 70,
    width: '98%',
    marginTop: Marging.small,
  },
  title: {
    fontSize: 16,
    color: palette.white,
  },
  text: {
    fontSize: 14,
    color: palette.white,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  logoContainer: {
    width: '15%',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: Padding.medium,
  },
  textLogoContainer: {
    textTransform: 'uppercase',
    color: palette.white,
    textAlign: 'center',
  },
  infosContainer: {
    width: '85%',
    paddingHorizontal: Padding.medium,
  },
});

interface UeItemProps {
  code: string;
  name: string;
  category: string;
}

export const UeItem: FunctionComponent<UeItemProps> = ({ code, name, category }) => {
  return (
    <View style={[styles.container, changeColor(category)]}>
      <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
        <View style={styles.logoContainer}>
          <Text style={styles.textLogoContainer}>{category}</Text>
        </View>

        <View style={styles.infosContainer}>
          <Text style={styles.title}>{code}</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
