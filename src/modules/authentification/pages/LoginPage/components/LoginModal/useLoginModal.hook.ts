import Constants from 'expo-constants';
import { useRef, useState } from 'react';
import WebView from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import config from '../../../../../../services/api/config';

export const useLoginModal = (onCloseModal: (url?: string) => void) => {
  const baseUri = `https://etu.utt.fr/api/oauth/client-create?name=${config.etu_utt_app_name}&device=${Constants.deviceName}&device_uid=${Constants.deviceId}&scope=${config.etu_utt_scope}`;
  const [modalUri, setModalUri] = useState<string>(baseUri);
  const webViewRef = useRef<WebView>(null);
  const reloadWebview = () => {
    webViewRef.current?.reload();
  };

  const onLoadStart = (event: WebViewNavigationEvent) => {
    const { url } = event.nativeEvent;
    if (url.indexOf('http://etu.utt.fr/user') !== -1) {
      setModalUri(modalUri);
    }
    if (url.indexOf('http://etu.utt.fr/') !== -1) {
      setModalUri(modalUri);
    }
    if (url.indexOf(`${config.etu_utt_baseuri}/redirect`) !== -1) {
      if (url.indexOf('authentification_canceled') === -1) {
        onCloseModal(url);
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
