import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { paths } from '../../../navigation/paths';
import { palette, spacing, typos } from '../../../theme/theme';
import i18n from '../../internationalization/service/i18n.service';
import { ChoiceUE, MyUE, SearchUE } from '../pages';

const UETab = createMaterialTopTabNavigator();
const bouncingTab = 30;
const iconSize = 27;

const styles = StyleSheet.create({
  icon: {
    width: '100%',
  },
  container: { flex: 1, backgroundColor: palette.orange },
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
  const renderIcon = (iconName: string) => ({ color }: { color: string }) => (
    <Icon name={iconName} size={iconSize} color={color} />
  );

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
          inactiveTintColor: palette.black,
          style: {
            backgroundColor: palette.orange,
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
            tabBarIcon: renderIcon('folder'),
            tabBarLabel: i18n.t('ue.myUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.searchUE.name}
          component={SearchUE}
          options={{
            tabBarIcon: renderIcon('search'),
            tabBarLabel: i18n.t('ue.searchUE.title'),
          }}
        />
        <UETab.Screen
          name={paths.ue.tabs.choiceUE.name}
          component={ChoiceUE}
          options={{
            tabBarIcon: renderIcon('gear'),
            tabBarLabel: i18n.t('ue.choiceUE.title'),
          }}
        />
      </UETab.Navigator>
    </SafeAreaView>
  );
};
