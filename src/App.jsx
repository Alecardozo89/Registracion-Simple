import { useState } from "react";
import { Registracion } from "./components/Registracion";
import { Home } from "./components/Home";

function App() {
  const [nombre, setNombre] = useState([]);

  return (
    <>
      <Registracion setNombre={setNombre} value={nombre} />
      <Home/>
    </>
  )
}

export default App;

