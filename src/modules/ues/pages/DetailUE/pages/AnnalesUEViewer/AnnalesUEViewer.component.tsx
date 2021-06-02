import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { paths } from '../../../../../../navigation/paths';
import { Marging, palette, typos } from '../../../../../../theme/theme';
import config from '../../../../../api/config';
import { Header } from '../../../../../assos/pages/components/Header.component';

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

export const UEAnnaleViewer: FunctionComponent = (route) => {
  const destination = route.route.params.destination;
  const url = config.etu_utt_baseuri + destination;
  const nameSemester = route.route.params.semester;
  const typeAnnale = route.route.params.type;
  const { navigate } = useNavigation();
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.ue.annalesUE.name)}>
        <Header bigtitle={typeAnnale + ' - ' + nameSemester} />
      </TouchableWithoutFeedback>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <WebView
            originWhitelist={['*']}
            startInLoadingState={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: url }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
