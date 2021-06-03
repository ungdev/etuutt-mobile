import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { Marging, palette } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
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
  containerSearchBar: {
    marginTop: Marging.small,
    height: 70,
  },
  text: {
    textAlign: 'center',
  },
});

export const SearchUE: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const onButtonPress = (destination: string) => {
    navigate(paths.ue.detailUE.name, { destination });
  };
  const { data, error, isLoading } = useUEsList();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const searchFilterFunction = (text: string | null) => {
    if (text != null) {
      const newData = data.ues
        .filter(function (item) {
          const itemData = item.code ? item.code.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        })
        .sort((a, b) => {
          if (a.code > b.code) return 1;
          if (a.code < b.code) return -1;

          return 0;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      const newData = data.ues
        .filter((ue) => {
          const fullname = `${ue.slug} ${ue.name} ${ue.code}`;

          return fullname;
        })
        .sort((a, b) => {
          if (a.code > b.code) return 1;
          if (a.code < b.code) return -1;

          return 0;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      searchFilterFunction(null);
    }
  }, [data]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return <View />;
  } else {
    return (
      <>
        <SafeAreaView style={styles.safeView}>
          <View style={styles.container}>
            <SearchBar
              containerStyle={styles.containerSearchBar}
              inputStyle={{ height: 50, justifyContent: 'center' }}
              placeholder={i18n.t('ue.searchUE.searchBar')}
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction(null)}
              value={search}
              platform={'ios'}
              clearIcon={false}
            />
            <FlatList
              numColumns={1}
              data={filteredDataSource}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <UeItem
                  code={item.code}
                  name={item.name}
                  category={item.category}
                  onPress={() => onButtonPress(item.slug)}
                />
              )}
              onEndReachedThreshold={0.5}
              ListEmptyComponent={() => (
                <Text style={styles.text}>{i18n.t('ue.searchUE.noUE')}</Text>
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
};
