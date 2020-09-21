import React, { FunctionComponent, useState } from 'react';
import { Dimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { paths } from '../../../navigation/paths';
import { MyUE, SearchUE } from '../pages';

const renderScene = SceneMap({
  [paths.myUE.name]: MyUE,
  [paths.searchUE.name]: SearchUE,
});

const initialLayout = { width: Dimensions.get('window').width };

export const UENavigator: FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: paths.myUE.name, title: 'First' },
    { key: paths.searchUE.name, title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition="bottom"
    />
  );
};
