import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Cogs, History, Search, ToolBox } from '../../../components/Icons/index';
import { paths } from '../../../navigation/paths';
import { palette, spacing, typos } from '../../../theme/theme';
import i18n from '../../internationalization/service/i18n.service';
import { ChoiceUE, HistoryUE, MyUE, SearchUE } from '../pages';

const UETab = createMaterialTopTabNavigator();
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

export const UENavigator: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UETab.Navigator
        tabBarPosition="bottom"
        initialRouteName={paths.ue.tabs.myUE.name}
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
        <UETab.Screen
          name={paths.ue.tabs.myUE.name}
          component={MyUE}
          options={{
            tabBarIcon: () => (
              <ToolBox color={palette.white} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('ue.myUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.searchUE.name}
          component={SearchUE}
          options={{
            tabBarIcon: () => (
              <Search color={'transparent'} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('ue.searchUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.choiceUE.name}
          component={ChoiceUE}
          options={{
            tabBarIcon: () => (
              <Cogs color={'transparent'} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('ue.choiceUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.historyUE.name}
          component={HistoryUE}
          options={{
            tabBarIcon: () => (
              <History color={'transparent'} secondaryColor={palette.white} size={iconSize} />
            ),
            tabBarLabel: i18n.t('ue.historyUE.title'),
          }}
        />
      </UETab.Navigator>
    </SafeAreaView>
  );
};
