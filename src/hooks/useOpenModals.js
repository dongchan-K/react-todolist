import React, { useState } from 'react';

const useOpenModals = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);

  const closeModal = () => {
    setModalState(false);
  };

  const openModal = () => {
    setModalState(true);
  };

  return { modalState, setModalState, closeModal, openModal };
};

export default useOpenModals;
