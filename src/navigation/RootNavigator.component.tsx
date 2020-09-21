import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { UENavigator } from '../modules/ues/navigation';
import { MainMenu } from '../pages';
import { paths } from './paths';

const RootStack = createStackNavigator();

export const RootNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={paths.mainMenu.name} component={MainMenu} />
        <RootStack.Screen name={paths.ue.name} component={UENavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
