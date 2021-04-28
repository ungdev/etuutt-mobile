import React, { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LoadingPage } from '../../../../components/LoadingPage';
import { palette } from '../../../../theme/theme';
import { UeItem } from '../../components/UeItem.component';
import { useUEsList } from '../../hooks/useUEsList.hook';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export const SearchUE: FunctionComponent = () => {
  const { data, error, isLoading } = useUEsList();
  const { search, updateSearch } = useState();

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
    data.ues = data.ues
      .filter((ue) => {
        const fullname = `${ue.slug} ${ue.name} ${ue.code}`;

        return fullname;
      })
      .sort((a, b) => {
        if (a.code > b.code) return 1;
        if (a.code < b.code) return -1;

        return 0;
      });

    return (
      <>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.container}>
            <SearchBar
              placeholder="Search UE..."
              onChangeText={updateSearch}
              value={search}
              platform={'ios'}
            />
            <FlatList
              numColumns={1}
              data={data.ues}
              keyExtractor={(item) => item.login}
              renderItem={({ item }) => (
                <UeItem code={item.code} name={item.name} category={item.category} />
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
