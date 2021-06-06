import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { setupAxiosClient } from './src/modules/api/services/api.service';
import { AuthentificationContext } from './src/modules/authentification/context/authentification.context';
import { useAuthentificationContext } from './src/modules/authentification/hooks/useAuthentificationContext.hook';
import { RootNavigator } from './src/navigation/RootNavigator.component';

const App = () => {
  const { authentificationContextValue } = useAuthentificationContext();
  useEffect(setupAxiosClient, []);
  const [isReady, setReady] = useState(false);

  const cacheResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'SFProText-Regular': require('./assets/font/SanFrancisco/otf/SFNSText-Regular.otf'),
        'SFProText-Bold': require('./assets/font/SanFrancisco/otf/SFNSText-Bold.otf'),
      }),
    ]);
  };

  return isReady === false ? (
    <AppLoading
      startAsync={cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />
  ) : (
    <AuthentificationContext.Provider value={authentificationContextValue}>
      <RootNavigator />
    </AuthentificationContext.Provider>
  );
};

export default App;
