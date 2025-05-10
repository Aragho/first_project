
import { Tailspin } from 'ldrs/react'
import React from 'react';
import 'ldrs/react/Tailspin.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center  ">
      <Tailspin
        size={50}
        stroke={3}
        speed={1}
        color="#90EE90"
      />
    </div>
  );
};

export default Loader;
