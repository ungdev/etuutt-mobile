import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Toolbox from '../../../../assets/icons/toolbox.svg';
import Search from '../../../../assets/icons/search.svg';
import Cogs from '../../../../assets/icons/cogs.svg';
import History from '../../../../assets/icons/history.svg';
import { paths } from '../../../navigation/paths';
import { palette, spacing, typos } from '../../../theme/theme';
import i18n from '../../internationalization/service/i18n.service';
import { ChoiceUE, MyUE, SearchUE, HistoryUE } from '../pages';

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
            tabBarIcon: ()=> (
              <Toolbox width={iconSize} height={iconSize} color={palette.white}/>
            ),
            tabBarLabel: i18n.t('ue.myUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.searchUE.name}
          component={SearchUE}
          options={{
            tabBarIcon: ()=> (
              <Search width={iconSize} height={iconSize} color={palette.white}/>
            ),
            tabBarLabel: i18n.t('ue.searchUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.choiceUE.name}
          component={ChoiceUE}
          options={{
            tabBarIcon: ()=> (
              <Cogs width={iconSize} height={iconSize} color={palette.white}/>
            ),
            tabBarLabel: i18n.t('ue.choiceUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.historyUE.name}
          component={HistoryUE}
          options={{
            tabBarIcon: ()=> (
              <History width={iconSize} height={iconSize} color={palette.white}/>
            ),
            tabBarLabel: i18n.t('ue.historyUE.title'),
          }}
        />
      </UETab.Navigator>
    </SafeAreaView>
  );
};
