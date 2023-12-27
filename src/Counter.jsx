// Counter.js
import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Lógica para obtener el contador de algún lugar (puede ser una API, base de datos, etc.)
    // En este ejemplo, se utiliza el almacenamiento local del navegador para simular la persistencia.
    const storedCount = localStorage.getItem('visitCount');
    setCount(storedCount ? parseInt(storedCount, 10) : 0);

    // Incrementar el contador y almacenarlo cuando se monta el componente
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem('visitCount', newCount.toString());
      return newCount;
    });
  }, []);

  return (
    <div className='flex justify-center items-center mt-9'>
      <p className='text-white'>visitas: {count}</p>
    </div>
  );
};

