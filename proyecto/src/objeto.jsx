import { useState } from "react";

function ObjectState() {
  const [usuario, setUsuario] = useState({
    nombre: "Jose",
    pais: "Colombia"
  });

  return (
    <div>
      <p>{usuario.nombre} - {usuario.pais}</p>
      <button
        onClick={() =>
          setUsuario({ ...usuario, nombre: "Carlos" })
        }
      >
        Cambiar nombre
      </button>
    </div>
  );
}

export default ObjectState;