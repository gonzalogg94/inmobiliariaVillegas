import React from "react";
import Slider from "./Slider";
import Servicios from "./Servicios";
import Preguntas from "./Preguntas";
import Galeria from "./Galeria";
import Empresas from "./Empresas";
import FormularioConsulta from "./FormularioConsulta";

const Inicio = () => {
  return (
    <>
      <Slider></Slider>
      <Servicios></Servicios>
      <Preguntas></Preguntas>
      <Galeria></Galeria>
      <Empresas></Empresas>
      <FormularioConsulta></FormularioConsulta>
    </>
  );
};

export default Inicio;
