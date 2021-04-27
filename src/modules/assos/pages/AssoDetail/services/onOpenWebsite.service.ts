import * as WebBrowser from 'expo-web-browser';

export const onOpenWebsite = async (url: string) => {
  await WebBrowser.openBrowserAsync(url);
};
