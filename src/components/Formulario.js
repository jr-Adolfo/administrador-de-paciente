// @flow
import React, { Fragment, useState } from "react";

export const Formulario = () => {
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

  return (
    <Fragment>
      <h2>CREAR CITA</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          name="mascota"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          name="propietario"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
        />
        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
        ></textarea>
        <button className="button-primary u-full-width">Agregar Cita</button>
      </form>
    </Fragment>
  );
};
