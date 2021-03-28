import React, { FunctionComponent } from 'react';
import { Modal, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import { useLoginModal } from './useLoginModal.hook';

interface LoginModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
}

export const LoginModal: FunctionComponent<LoginModalProps> = ({ isVisible, onCloseModal }) => {
  const { webViewRef, reloadWebview, onLoadStart, modalUri } = useLoginModal(onCloseModal);

  return (
    <Modal animationType={'slide'} visible={isVisible} onRequestClose={onCloseModal}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={onCloseModal} style={{ marginTop: 20, padding: 10 }}>
            <Text style={{ color: '#4098ff' }}>fermer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reloadWebview} style={{ marginTop: 20, padding: 10 }}>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={webViewRef}
          source={{
            uri: modalUri,
          }}
          startInLoadingState
          originWhitelist={['*']}
          style={{ marginTop: 20 }}
          javaScriptEnabled
          domStorageEnabled
          onLoadStart={onLoadStart}
        />
      </View>
    </Modal>
  );
};
