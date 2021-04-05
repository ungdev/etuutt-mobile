import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Blank_Page } from '../components/Blank_Page/BlankPage.component';
import { Cog, Heart, Notifications } from '../components/Icons/index';
import { AssosNavigator } from '../modules/assos/navigation';
import { LoginPage } from '../modules/authentification';
import { useAuthentification } from '../modules/authentification/hooks/useAuthentification.hook';
import { CovoitNavigator } from '../modules/covoit/navigation';
import i18n from '../modules/internationalization/service/i18n.service';
import { ProfilePage } from '../modules/profile/pages';
import { UENavigator } from '../modules/ues/navigation';
import { FavorisButton } from '../modules/ues/pages/ChoiceUE/components/FavorisButton.component';
import { MainMenu } from '../pages';
import { palette } from '../theme/theme';
import { NotificationsButton } from './components/NotificationsButton';
import { paths } from './paths';

const RootStack = createStackNavigator();
const iconSize = 28;

const styles = StyleSheet.create({
  header: {
    backgroundColor: palette.blue,
  },
});

export const RootNavigator: FunctionComponent = () => {
  const { isLoggedIn } = useAuthentification();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: palette.white,
          headerBackTitleVisible: false,
        }}
      >
        {!isLoggedIn ? (
          <RootStack.Screen
            name={'Login'}
            component={LoginPage}
            options={{
              title: i18n.t('login.title'),
              headerTitleAlign: 'center',
            }}
          />
        ) : (
          <>
            <RootStack.Screen
              name={paths.mainMenu.name}
              component={MainMenu}
              options={{
                title: i18n.t('mainMenu.title'),
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <NotificationsButton
                    image={<Notifications color={palette.white} size={iconSize} />}
                  />
                ),
                headerRight: () => (
                  <NotificationsButton image={<Cog color={palette.white} size={iconSize} />} />
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
            <RootStack.Screen
              name={paths.flash_infos.name}
              component={Blank_Page}
              options={{
                title: i18n.t('flash_infos.title'),
                headerTitleAlign: 'center',
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
                      <Heart color={palette.white} secondaryColor={palette.white} size={iconSize} />
                    }
                  />
                ),
              }}
            />
            <RootStack.Screen
              name={paths.timetable.name}
              component={Blank_Page}
              options={{
                title: i18n.t('timetable.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.trombinoscope.name}
              component={Blank_Page}
              options={{
                title: i18n.t('trombinoscope.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.events.name}
              component={Blank_Page}
              options={{
                title: i18n.t('events.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.assos.name}
              component={AssosNavigator}
              options={{
                title: i18n.t('assos.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.galerie.name}
              component={Blank_Page}
              options={{
                title: i18n.t('galerie.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.map.name}
              component={Blank_Page}
              options={{
                title: i18n.t('map.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.buckutt.name}
              component={Blank_Page}
              options={{
                title: i18n.t('buckutt.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.cumultimetable.name}
              component={Blank_Page}
              options={{
                title: i18n.t('cumultimetable.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.mails.name}
              component={Blank_Page}
              options={{
                title: i18n.t('mails.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.wiki.name}
              component={Blank_Page}
              options={{
                title: i18n.t('wiki.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.cloud.name}
              component={Blank_Page}
              options={{
                title: i18n.t('cloud.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.bu.name}
              component={Blank_Page}
              options={{
                title: i18n.t('bu.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.downdetector.name}
              component={Blank_Page}
              options={{
                title: i18n.t('downdetector.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.covoit.name}
              component={CovoitNavigator}
              options={{
                title: i18n.t('covoit.title'),
                headerTitleAlign: 'center',
              }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
