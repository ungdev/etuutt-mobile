import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Blank_Page } from '../components/Blank_Page/BlankPage.component';
import { Cog, Heart, Notifications } from '../components/Icons/index';
import { AssosNavigator } from '../modules/assos/navigation';
import { LoginPage } from '../modules/authentification';
import { useAuthentification } from '../modules/authentification/hooks/useAuthentification.hook';
import { LoadingPage } from '../modules/authentification/pages/LoginPage/LoadingPage.component';
import { CovoitNavigator } from '../modules/covoit/navigation';
import Events from '../modules/EventsBundle/screens/Events.component';
import i18n from '../modules/internationalization/service/i18n.service';
import { NotificationsButton } from '../modules/notifications/pages/CustomNotifications/components/NotificationsButton/index';
import { CustomNotifications } from '../modules/notifications/pages/CustomNotifications/CustomNotifications.component';
import { ProfilePage } from '../modules/profile/pages';
import { ProfilePublic } from '../modules/profilePublic';
import { SettingsPage } from '../modules/settings';
import { SettingsButton } from '../modules/settings/components/SettingsButton';
import { UENavigator } from '../modules/ues/navigation';
import { FavorisButton } from '../modules/ues/pages/ChoiceUE/components/FavorisButton.component';
import { UEDetail } from '../modules/ues/pages/DetailUE/DetailUE.component';
import { UEAnnales } from '../modules/ues/pages/DetailUE/pages/AnnalesUE/AnnalesUE.component';
import { UEAnnaleViewer } from '../modules/ues/pages/DetailUE/pages/AnnalesUEViewer/AnnalesUEViewer.component';
import { UEComments } from '../modules/ues/pages/DetailUE/pages/CommentsUE/CommentsUE.component';
import { MainMenu } from '../pages';
import { palette } from '../theme/theme';
import { paths } from './paths';

const RootStack = createStackNavigator();
const iconSize = 28;
const titleSize = 18;

const styles = StyleSheet.create({
  header: {
    backgroundColor: palette.blue,
  },
  containerHeader: {
    justifyContent: 'center',
  },
});

export const RootNavigator: FunctionComponent = () => {
  const { authentificationStatus } = useAuthentification();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: palette.white,
          headerBackTitleVisible: false,
          headerTitleContainerStyle: styles.containerHeader,
          headerTitleStyle: styles.containerHeader,
        }}
      >
        {authentificationStatus === 'UNKNOWN' ? (
          <RootStack.Screen
            name={'Loading'}
            component={LoadingPage}
            options={{
              headerShown: false,
            }}
          />
        ) : authentificationStatus === 'UNAUTHENTICATED' ? (
          <RootStack.Screen
            name={'Login'}
            component={LoginPage}
            options={{
              headerTitleStyle: {
                fontSize: titleSize,
              },
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
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('mainMenu.title'),
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <NotificationsButton
                    image={<Notifications color={palette.white} size={iconSize} />}
                  />
                ),
                headerRight: () => (
                  <SettingsButton image={<Cog color={palette.white} size={iconSize} />} />
                ),
              }}
            />
            <RootStack.Screen
              name={paths.profile.name}
              component={ProfilePage}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('profile.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.settings.name}
              component={SettingsPage}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('settings.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.customNotifications.name}
              component={CustomNotifications}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('customNotifications.title'),
                headerTitleAlign: 'center',
                cardStyleInterpolator: ({ current, layouts }) => {
                  return {
                    cardStyle: {
                      transform: [
                        {
                          translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-layouts.screen.width, 0],
                          }),
                        },
                      ],
                    },
                  };
                },
                gestureDirection: 'horizontal-inverted',
              }}
            />
            <RootStack.Screen
              name={paths.flash_infos.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('flash_infos.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.profilePublic.name}
              component={ProfilePublic}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name={paths.ue.name}
              component={UENavigator}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
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
              name={paths.ue.detailUE.name}
              component={UEDetail}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name={paths.ue.commentsUE.name}
              component={UEComments}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name={paths.ue.annalesUE.name}
              component={UEAnnales}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name={paths.ue.annalesUEViewer.name}
              component={UEAnnaleViewer}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name={paths.timetable.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('timetable.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.trombinoscope.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('trombinoscope.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.events.name}
              component={Events}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('events.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.assos.name}
              component={AssosNavigator}
              options={{
                headerShown: false,
                title: i18n.t('assos.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.galerie.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('galerie.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.map.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('map.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.buckutt.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('buckutt.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.cumultimetable.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('cumultimetable.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.mails.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('mails.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.wiki.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('wiki.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.cloud.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('cloud.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.bu.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('bu.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.downdetector.name}
              component={Blank_Page}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
                title: i18n.t('downdetector.title'),
                headerTitleAlign: 'center',
              }}
            />
            <RootStack.Screen
              name={paths.covoit.name}
              component={CovoitNavigator}
              options={{
                headerTitleStyle: {
                  fontSize: titleSize,
                },
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
