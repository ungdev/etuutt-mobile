import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { paths } from '../../../navigation/paths';
import { AssoDetail } from '../pages/AssoDetail';
import { AssosTabNavigator } from './AssosTabNavigator/AssosTabNavigator.component';

const Stack = createStackNavigator();

export const AssosNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={paths.assos.assosNavigator.tabs.name}
        component={AssosTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={paths.assos.assosNavigator.detailAsso.name}
        component={AssoDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
