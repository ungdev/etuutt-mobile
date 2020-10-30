import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Cog from '../../assets/icons/cog.svg';
import Notifications from '../../assets/icons/notifications.svg';
import Heart from '../../assets/icons/heart.svg';
import i18n from '../modules/internationalization/service/i18n.service';
import { ProfilePage } from '../modules/profile/pages';
import { UENavigator } from '../modules/ues/navigation';
import { FavorisButton } from '../modules/ues/pages/ChoiceUE/components/FavorisButton.component';
import { MainMenu } from '../pages';
import { palette } from '../theme/theme';
import { NotificationButton } from './components/NotificationButton.component';
import { paths } from './paths';

const RootStack = createStackNavigator();
const iconSize = 28;

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
    
  },
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
          headerTitleStyle: styles.headerTitle,
          headerBackTitleStyle: styles.headerTitle,
          headerTintColor: "white",
        }}
      >
        <RootStack.Screen
          name={paths.mainMenu.name}
          component={MainMenu}
          options={{
            title: i18n.t('mainMenu.title'),
            headerTitleAlign: 'center',
            headerLeft: () => (
              <NotificationButton
                image={
                  <Notifications width={iconSize} height={iconSize} color={palette.white} style={styles.buttonHeader}/>
                }
              />
            ),
            headerRight: () => (
              <NotificationButton
                image={
                  <Cog width={iconSize} height={iconSize} color={palette.white} style={styles.buttonHeader}/>
                }
              />
              
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
                image={
                  <Heart width={iconSize} height={iconSize} color={palette.white} style={styles.buttonHeader}/>
                }
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
