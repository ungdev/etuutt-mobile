import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Cog, Heart, Notifications } from '../components/Icons/index';
import i18n from '../modules/internationalization/service/i18n.service';
import { ProfilePage } from '../modules/profile/pages';
import { UENavigator } from '../modules/ues/navigation';
import { FavorisButton } from '../modules/ues/pages/ChoiceUE/components/FavorisButton.component';
import { MainMenu } from '../pages';
import { palette } from '../theme/theme';
import { HeaderButton } from './components/HeaderButton.component';
import { paths } from './paths';

const RootStack = createStackNavigator();
const iconSize = 28;

const styles = StyleSheet.create({
  header: {
    backgroundColor: palette.blue,
  },
});

export const RootNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: 'white',
        }}
      >
        <RootStack.Screen
          name={paths.mainMenu.name}
          component={MainMenu}
          options={{
            title: i18n.t('mainMenu.title'),
            headerTitleAlign: 'center',
            headerLeft: () => (
              <HeaderButton
                image={<Notifications color={palette.white} stroke={''} size={iconSize} />}
              />
            ),
            headerRight: () => (
              <HeaderButton image={<Cog color={palette.white} stroke={''} size={iconSize} />} />
            ),
          }}
        />
        <RootStack.Screen
          name={paths.ue.name}
          component={UENavigator}
          options={{
            title: i18n.t('ue.title'),
            headerTitleAlign: 'center',
            headerRight: () => (
              <FavorisButton
                image={<Heart color={palette.white} stroke={palette.white} size={iconSize} />}
              />
            ),
          }}
        />
        <RootStack.Screen
          name={paths.profile.name}
          component={ProfilePage}
          options={{
            title: i18n.t('profile.title'),
            headerTitleAlign: 'center',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
