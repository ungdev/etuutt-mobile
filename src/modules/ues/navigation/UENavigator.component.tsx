import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { paths } from '../../../navigation/paths';
import { ChoiceUE, MyUE, SearchUE } from '../pages';

const UETab = createMaterialTopTabNavigator();

export const UENavigator: FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DA8F20' }}>
      <UETab.Navigator
        tabBarPosition="bottom"
        initialRouteName={paths.myUE.name}
        springConfig={{ damping: 30 }}
        tabBarOptions={{
          showIcon: true,
          iconStyle: {
            width: '100%',
            height: 27,
          },
          activeTintColor: '#ffffff',
          inactiveTintColor: '#000000',
          style: {
            backgroundColor: '#DA8F20',
          },
          labelStyle: {
            fontSize: 11,
            textAlign: 'center',
            padding: 0,
            marginTop: 7,
          },
          tabStyle: {
            padding: 0,
          },
          indicatorStyle: {
            backgroundColor: '#ffffff',
            height: 3,
          },
        }}
      >
        <UETab.Screen
          name={paths.myUE.name}
          component={MyUE}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="folder" size={27} color={color} />;
            },
          }}
        />
        <UETab.Screen
          name={paths.searchUE.name}
          component={SearchUE}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="search" size={27} color={color} />;
            },
          }}
        />
        <UETab.Screen
          name={paths.choiceUE.name}
          component={ChoiceUE}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="folder" size={27} color={color} />;
            },
          }}
        />
      </UETab.Navigator>
    </SafeAreaView>
  );
};
