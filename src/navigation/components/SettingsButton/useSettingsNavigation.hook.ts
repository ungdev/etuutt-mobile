import { useState } from 'react';

export const useSettingsNavigation = () => {
  const [isVisible, setisVisible] = useState(false);
  const hideSettings = () => setisVisible(false);
  const showSettings = () => setisVisible(true);

  return { isVisible, hideSettings, showSettings };
};
