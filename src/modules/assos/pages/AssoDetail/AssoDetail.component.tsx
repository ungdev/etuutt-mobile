import React, { FunctionComponent, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LoadingPage } from '../../../../components/LoadingPage';
import { useAssosList } from '../../hooks/useAssosList.hook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const AssoDetail: FunctionComponent = () => {
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
          <ScrollView contentContainerStyle={styles.subcontainer}>
            <Text style={styles.title}>bonjour</Text>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: 'test',
                }}
                style={{ width: 150, height: 150 }}
              />
            </View>

            <View style={styles.mainInfosContainer}></View>

            <View style={styles.logoSocialContainer}></View>
          </ScrollView>
        </View>
      </>
    );
  }
};
