// import React from "react";
import { render } from "@testing-library/react";
import { Formulario } from "../components/Formulario";

test("<Formulario/> Cargar el formulario", () => {
  const wrapper = render(<Formulario />);
  wrapper.debug();
});
