import {useState, useEffect} from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);      
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los Campos son Obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 3000);
      return;
    }
    let gasto = {nombre, cantidad, categoria};
    guardarGasto(gasto);
  }
  
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Boton Cerrar" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>

          <input
            id="nombre"
            type="text"
            placeholder="Indique el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            id="cantidad"
            type="number"
            placeholder="Monto del Gasto ej. 200"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria del Gasto</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> ---- Selecciones ---- </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input 
          type="submit"
          value="Agragar Gasto"
        />
      </form>
    </div>
  );
};

export default Modal
