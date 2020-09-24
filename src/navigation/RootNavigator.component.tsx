import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MainMenu } from '../pages';
import { NotificationButton } from './components/NotificationButton.component';
import { paths } from './paths';

const RootStack = createStackNavigator();

const styles = StyleSheet.create({
  buttonHeader: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export const RootNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={paths.mainMenu.name}
          component={MainMenu}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <NotificationButton
                image={<Icon name={'bell'} size={28} color="#333" style={styles.buttonHeader} />}
              />
            ),
            headerRight: () => (
              <NotificationButton
                image={
                  <Icon name={'ellipsis-v'} size={28} color="#333" style={styles.buttonHeader} />
                }
              />
            ),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
