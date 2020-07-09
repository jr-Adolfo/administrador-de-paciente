// @flow
import React, { Fragment, useState } from "react";
import uuid from "react-uuid";
import PropTypes from 'prop-types';

export const Formulario = ({ crearCita }) => {
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Funcion que se escribe cada que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({ ...cita, [e.target.name]: e.target.value });
  };

  // useState error
  const [error, seterror] = useState(false);

  // Extrayendo valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Submit cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validando datos
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      seterror(true);
      // finaliza la funcion
      return;
    }
    // Elimina el mensaje previo
    seterror(false);

    // Asignando un id
    cita.id = uuid();

    // Crea Cita
    crearCita(cita);

    // Reiniciando Form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>CREAR CITA</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          name="mascota"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          name="propietario"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button className="button-primary u-full-width">Agregar Cita</button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}