import Constants from 'expo-constants';
import { useRef, useState } from 'react';
import WebView from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';

export const useLoginModal = (onCloseModal: () => void) => {
  const baseUri = `https://etu.utt.fr/api/oauth/client-create?name=MyUTT&device=${Constants.deviceName}&device_uid=${Constants.deviceId}&scope=public`;
  const [modalUri, setModalUri] = useState<string>(baseUri);
  const webViewRef = useRef<WebView>(null);
  const reloadWebview = () => {
    webViewRef.current?.reload();
  };

  const onLoadStart = (event: WebViewNavigationEvent) => {
    if (event.nativeEvent.url.indexOf('http://etu.utt.fr/user') !== -1) {
      setModalUri(baseUri);
    }
    if (event.nativeEvent.url.indexOf('http://etu.utt.fr/') !== -1) {
      setModalUri(baseUri);
    }
    if (event.nativeEvent.url.indexOf(`https://etu.utt.fr/api/redirect`) !== -1) {
      if (event.nativeEvent.url.indexOf('authentification_canceled') === -1) {
        onCloseModal();
      } else {
        onCloseModal();
      }
    }
  };

  return {
    webViewRef,
    reloadWebview,
    onLoadStart,
    modalUri,
  };
};
