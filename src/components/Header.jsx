import {useState, useEffect} from 'react';

import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {

  
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <p>Control Presupuesto</p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />        
      )}
    </header>
  );
}  
export default Header
