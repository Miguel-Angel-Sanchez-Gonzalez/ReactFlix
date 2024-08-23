import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const element = (
  <>
    <h1>Soy un titulo</h1>
    <p>Contenido principal</p>
  </>
);

function Main(props) {
  const titulo = props.titulo;
  const contenido = props.contenido;
  return (
    <>
      <h1>{titulo}</h1>
      <p>{contenido}</p>
    </>
  );
}

export default Main;

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <>
    <Main titulo="Soy un titulo principal" contenido="Contenido principal" />
    <Main titulo="Soy un titulo secundario" contenido="Contenido secundario" />
  </>
);
