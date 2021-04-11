import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LoadingPage } from '../../../../components/LoadingPage';
import { useAssosList } from '../../hooks/useAssosList.hook';
import { AssosItem } from './components/AssosItem.component';
import { getImageLink } from './services/getImageLink.service';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const AllAssosPage: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(destination);
  };
  const { data, error, isLoading } = useAssosList();

  useEffect(() => {
    if (error !== undefined) {
      //TODO service Alert(error)
    }
  }, [error]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return <View />;
  } else {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            numColumns={3}
            data={data.data}
            keyExtractor={(item) => item.login}
            renderItem={({ item }) => (
              <AssosItem
                title={item.name}
                image={getImageLink(item)}
                onPress={() => onButtonPress(item.login)}
              />
            )}
            //TODO refresh control
          />
        </View>
      </>
    );
  }
};
