import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Alert, CarSide, CarSolid, Search } from '../../../components/Icons/index';
import { paths } from '../../../navigation/paths';
import { palette, spacing, typos } from '../../../theme/theme';
import i18n from '../../internationalization/service/i18n.service';
import { AllCovoits, MyAlerts, MyCovoits, SearchCovoit } from '../pages';

const CovoitTab = createMaterialTopTabNavigator();
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

export const CovoitNavigator: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CovoitTab.Navigator
        tabBarPosition="bottom"
        initialRouteName={paths.covoit.tabs.allCovoits.name}
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
        <CovoitTab.Screen
          name={paths.covoit.tabs.allCovoits.name}
          component={AllCovoits}
          options={{
            tabBarIcon: () => (
              <CarSolid color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('covoit.allCovoits.title'),
          }}
        />
        <CovoitTab.Screen
          name={paths.covoit.tabs.searchCovoit.name}
          component={SearchCovoit}
          options={{
            tabBarIcon: () => (
              <Search color={'transparent'} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('covoit.searchCovoit.title'),
          }}
        />
        <CovoitTab.Screen
          name={paths.covoit.tabs.myCovoits.name}
          component={MyCovoits}
          options={{
            tabBarIcon: () => (
              <CarSide color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('covoit.myCovoits.title'),
          }}
        />
        <CovoitTab.Screen
          name={paths.covoit.tabs.myAlerts.name}
          component={MyAlerts}
          options={{
            tabBarIcon: () => (
              <Alert color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('covoit.myAlerts.title'),
          }}
        />
      </CovoitTab.Navigator>
    </SafeAreaView>
  );
};
