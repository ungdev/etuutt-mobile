import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { palette } from '../../../../theme/theme';
import { useMyAssosList } from '../../hooks/useMyAssosList.hook';
import { AssosItem } from '../AllAssos/components/AssosItem.component';
import { getImageLink } from '../AllAssos/services/getImageLink.service';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export const MyAssos: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(paths.assos.assosNavigator.detailAsso.name, { destination });
  };
  const { data, error, isLoading } = useMyAssosList();

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
        <SafeAreaView style={styles.safeView}>
          <View style={styles.container}>
            <FlatList
              numColumns={3}
              data={data.data}
              keyExtractor={(item) => item.login}
              renderItem={({ item }) => (
                <AssosItem
                  title={item._embed.organization}
                  image={getImageLink(item)}
                  onPress={() => onButtonPress(item._embed.organization)}
                />
              )}
              onEndReachedThreshold={0.5}
              //TODO refresh control
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
};
