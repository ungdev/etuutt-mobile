import React, { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LoadingPage } from '../../../../components/LoadingPage';
import { palette } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { useMyUEsList } from '../../hooks/useMyUEsList.hook';
import { MyUeItem } from './components/MyUeItem.component';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: palette.white,
    alignItems: 'center',
  },
  textNoUe: {
    textAlign: 'center',
  },
});

export const MyUE: FunctionComponent = () => {
  const { data, error, isLoading } = useMyUEsList();
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const searchFilterFunction = (data: string[] | null) => {
    const newData = data.data.uvs
      .filter((ue) => {
        const fullname = `${ue}`;

        return fullname;
      })
      .sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
      });
    setFilteredDataSource(newData);
  };

  useEffect(() => {
    if (data !== undefined) {
      searchFilterFunction(data);
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
            <FlatList
              numColumns={2}
              data={filteredDataSource}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <MyUeItem code={item} />}
              onEndReachedThreshold={0.5}
              ListEmptyComponent={() => (
                <Text style={styles.textNoUe}>{i18n.t('ue.searchUE.noUE')}</Text>
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
};
