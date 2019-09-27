import { useState } from 'react';

const useCurrentPageState = () => {
  const [isMenuShown, handleToggleMenu] = useState('home');

  return [
    isMenuShown, handleToggleMenu
  ];
};

export default useCurrentPageState;