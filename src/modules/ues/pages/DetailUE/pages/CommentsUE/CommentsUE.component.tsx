import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LoadingPage } from '../../../../../../components/LoadingPage';
import { paths } from '../../../../../../navigation/paths';
import { Marging, palette, typos } from '../../../../../../theme/theme';
import { Header } from '../../../../../assos/pages/components/Header.component';
import i18n from '../../../../../internationalization/service/i18n.service';
import { CommentUeItem } from './components/CommentUeItem.component';
import { useUEComments } from './hooks/useUEcomments.hook';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.blue,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.white,
  },
  text: {
    fontSize: typos.xs.fontSize,
    textAlign: 'center',
    color: palette.black,
    marginTop: Marging.large,
  },
});

export const UEComments: FunctionComponent = (route) => {
  const ue = route.route.params.destination;
  const nameUE = route.route.params.nameUE;
  const { data, error, isLoading } = useUEComments(ue);
  const { navigate } = useNavigation();
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };

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
        <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.ue.detailUE.name)}>
          <Header bigtitle={nameUE + ' - ' + i18n.t('ue.commentsUE.title')} />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <FlatList
              numColumns={1}
              data={data.comments}
              keyExtractor={(item) => item.createdAt.date}
              renderItem={({ item }) => (
                <CommentUeItem autor={item.fullName} body={item.body} date={item.createdAt.date} />
              )}
              onEndReachedThreshold={0.5}
              ListEmptyComponent={() => (
                <Text style={styles.text}>{i18n.t('ue.commentsUE.noComments')}</Text>
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
};
