import { useState } from 'react';

export const useSettingsButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  return { modalVisible, hideModal, showModal };
};
