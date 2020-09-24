import React, { FunctionComponent, useState } from 'react';
import { Dimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { paths } from '../../../navigation/paths';
import i18n from '../../internationalization/service/i18n.service';
import { MyUE, SearchUE } from '../pages';

const renderScene = SceneMap({
  [paths.myUE.name]: MyUE,
  [paths.searchUE.name]: SearchUE,
});

const initialLayout = { width: Dimensions.get('window').width };

export const UENavigator: FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: paths.myUE.name, title: i18n.t('myUE.title') },
    { key: paths.searchUE.name, title: i18n.t('searchUE.title') },
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
