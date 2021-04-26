//Header 2 is created due to a problem with the second navigation "stack navigation" in artist bundle
import React, { FunctionComponent } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { palette } from '../../../../theme/theme';

interface HeaderProps {
  bigtitle: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ bigtitle }) => {
  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.designtitle}>{bigtitle}</Text>
        </View>
        <View style={styles.iconmenu}>
          <Icon name="md-arrow-back" style={{ fontSize: 24, color: 'white' }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeview: {
    backgroundColor: palette.blue,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 45 : 100,
  },
  iconmenu: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 10 : 65,
    left: 20,
  },
  title: {
    width: '100%',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        marginTop: 50,
      },
    }),
  },
  designtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: palette.white,
  },
});
