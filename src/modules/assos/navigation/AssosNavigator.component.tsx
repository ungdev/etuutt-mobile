import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Handshake, People } from '../../../components/Icons/index';
import { paths } from '../../../navigation/paths';
import { palette, spacing, typos } from '../../../theme/theme';
import i18n from '../../internationalization/service/i18n.service';
import { MyAssos } from '../pages';
import { AllAssosNavigator } from '../pages/AllAssosNavigator/AllAssosNavigator.component';

const AssosTab = createMaterialTopTabNavigator();
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

export const AssosNavigator: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AssosTab.Navigator
        tabBarPosition="bottom"
        initialRouteName={paths.assos.tabs.allAssosNavigator.name}
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
        <AssosTab.Screen
          name={paths.assos.tabs.allAssosNavigator.name}
          component={AllAssosNavigator}
          options={{
            tabBarIcon: () => (
              <People color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('assos.allAssos.title'),
          }}
        />
        <AssosTab.Screen
          name={paths.assos.tabs.myAssos.name}
          component={MyAssos}
          options={{
            tabBarIcon: () => (
              <Handshake color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('assos.myAssos.title'),
          }}
        />
      </AssosTab.Navigator>
    </SafeAreaView>
  );
};
