import { useState } from 'react';

const useCurrentPageState = () => {
  const [currentPage, handleChangeCurrentPage] = useState('home');

  return [
    currentPage, handleChangeCurrentPage
  ];
};

export default useCurrentPageState;