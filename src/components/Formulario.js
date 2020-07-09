// @flow
import * as React from "react";

export const Formulario = () => {
  return (
    <div>
      <h2>CREAR CITA</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          name="mascota"
          placeholder="Nombre de la mascota"
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          name="propietario"
          placeholder="Nombre del dueño"
        />
        <label>Fecha</label>
        <input type="date" className="u-full-width" name="fecha" />
        <label>Hora</label>
        <input type="time" className="u-full-width" name="hora"/>
        <label>Sintomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button className="button-primary u-full-width">Agregar Cita</button>
      </form>
    </div>
  );
};
