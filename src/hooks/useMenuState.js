import { useState } from 'react';

const useMenuState = () => {
  const [isMenuShown, handleToggleMenu] = useState(false);

  return [
    isMenuShown, handleToggleMenu
  ];
};

export default useMenuState;