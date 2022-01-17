import {useState, useEffect} from 'react';


const ControlPresupuesto = ({presupuesto, gastos}) => {
  
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  
  useEffect(() => {
    const totalGastos = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    const totalDisponible = presupuesto - totalGastos;
    setDisponible(totalDisponible);
    setGastado(totalGastos);
  }, [gastos])
  
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style:'currency',
      currency:'USD'
    })
  }
  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Dicponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto
