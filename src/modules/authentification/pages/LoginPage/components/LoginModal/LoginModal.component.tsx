import React, { FunctionComponent } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { palette } from '../../../../../../theme/theme';
import i18n from '../../../../../internationalization/service/i18n.service';
import { useLoginModal } from './useLoginModal.hook';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: palette.blue,
  },

  globalcontainer: {
    flex: 1,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topbutton: {
    marginTop: 10,
    padding: 10,
  },

  topbuttontext: {
    color: palette.white,
  },
});

interface LoginModalProps {
  isVisible: boolean;
  onCloseModal: (url?: string) => void;
}

export const LoginModal: FunctionComponent<LoginModalProps> = ({ isVisible, onCloseModal }) => {
  const { webViewRef, reloadWebview, onLoadStart, modalUri } = useLoginModal(onCloseModal);

  return (
    <Modal animationType={'slide'} visible={isVisible} onRequestClose={onCloseModal}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.globalcontainer}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => onCloseModal()} style={styles.topbutton}>
              <Text style={styles.topbuttontext}>{i18n.t('login.close')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reloadWebview} style={styles.topbutton}>
              <Text style={styles.topbuttontext}>{i18n.t('login.refresh')}</Text>
            </TouchableOpacity>
          </View>
          <WebView
            ref={webViewRef}
            source={{
              uri: modalUri,
            }}
            startInLoadingState
            originWhitelist={['*']}
            javaScriptEnabled
            domStorageEnabled
            onLoadStart={onLoadStart}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
