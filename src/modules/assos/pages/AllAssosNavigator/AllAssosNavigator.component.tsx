import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { paths } from '../../../../navigation/paths';
import { AllAssosPage } from '../AllAssos/AllAssosPage.component';
import { AssoDetail } from '../AssoDetail';

const Stack = createStackNavigator();

export const AllAssosNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={paths.assos.tabs.allAssosNavigator.allAssos.name}
        component={AllAssosPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={paths.assos.tabs.allAssosNavigator.assoDetail.name}
        component={AssoDetail}
      />
    </Stack.Navigator>
  );
};
