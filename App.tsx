import React, { useEffect } from 'react';
import { setupAxiosClient } from './src/modules/api/services/api.service';
import { AuthentificationContext } from './src/modules/authentification/context/authentification.context';
import { useAuthentificationContext } from './src/modules/authentification/hooks/useAuthentificationContext.hook';
import { RootNavigator } from './src/navigation/RootNavigator.component';

const App = () => {
  const { authentificationContextValue } = useAuthentificationContext();
  useEffect(setupAxiosClient, []);

  return (
    <AuthentificationContext.Provider value={authentificationContextValue}>
      <RootNavigator />
    </AuthentificationContext.Provider>
  );
};

export default App;

/*mettre config axios et redux*/
