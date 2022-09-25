import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Handshake, People } from '../../../../components/Icons';
import { paths } from '../../../../navigation/paths';
import { palette, spacing, typos } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { AllAssosPage, MyAssos } from '../../pages';
import { Header } from '../../pages/components/Header.component';

const TabNavigator = createMaterialTopTabNavigator();
const bouncingTab = 30;
const iconSize = 26;

const styles = StyleSheet.create({
  icon: {
    marginTop: spacing * 1,
  },
  container: { flex: 1, backgroundColor: palette.blue },
  label: {
    ...typos.xxs,
    textAlign: 'center',
    padding: 0,
    marginTop: spacing * 2,
    textTransform: 'none',
  },
  tab: {
    padding: 0,
  },
  indicator: {
    backgroundColor: palette.white,
    height: spacing,
  },
});

export const AssosTabNavigator: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.mainMenu.name)}>
        <Header bigtitle="Associations" />
      </TouchableWithoutFeedback>
      <TabNavigator.Navigator
        tabBarPosition="bottom"
        initialRouteName={paths.assos.assosNavigator.tabs.allAssos.name}
        springConfig={{ damping: bouncingTab }}
        tabBarOptions={{
          showIcon: true,
          iconStyle: styles.icon,
          activeTintColor: palette.white,
          inactiveTintColor: palette.white,
          style: {
            backgroundColor: palette.blue,
          },
          labelStyle: styles.label,
          tabStyle: styles.tab,
          indicatorStyle: styles.indicator,
        }}
      >
        <TabNavigator.Screen
          name={paths.assos.assosNavigator.tabs.allAssos.name}
          component={AllAssosPage}
          options={{
            tabBarIcon: () => (
              <People color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('assos.allAssos.title'),
          }}
        />
        <TabNavigator.Screen
          name={paths.assos.assosNavigator.tabs.myAssos.name}
          component={MyAssos}
          options={{
            tabBarIcon: () => (
              <Handshake color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('assos.myAssos.title'),
          }}
        />
      </TabNavigator.Navigator>
    </SafeAreaView>
  );
};
