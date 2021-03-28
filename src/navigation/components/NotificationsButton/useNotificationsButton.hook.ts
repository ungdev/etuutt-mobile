import { useState } from 'react';

export const useNotificationsButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  return { modalVisible, hideModal, showModal };
};
