import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Marging, Padding, palette, radius, typos } from '../../theme/theme';
import { AuthentificationContext } from '../authentification/context/authentification.context';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '98%',
    height: '20%',
    alignSelf: 'center',
    flexDirection: 'column',
    padding: Padding.large,
  },
  logoutButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 50,
    backgroundColor: palette.red,
    color: palette.white,
    borderRadius: radius.medium,
    padding: Padding.medium,
    margin: Marging.medium,
  },
  textStyle: {
    textAlign: 'center',
    color: palette.white,
    fontSize: typos.xs.fontSize,
  },
});

interface SettingsPageProps {
  logout: () => void;
}

export const SettingsPage: FunctionComponent<SettingsPageProps> = () => {
  const { logout } = useContext(AuthentificationContext);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.textStyle}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
