import React, { FunctionComponent, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const BLACK = '#000';
const RED = '#FF0000';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: BLACK }]} />;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: RED }]} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const initialLayout = { width: Dimensions.get('window').width };

export const UENavigator: FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
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
