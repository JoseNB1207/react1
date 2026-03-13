import { useState } from "react";

function BooleanState() {
  const [activo, setActivo] = useState(true);

  return (
    <div>
      <p>{activo ? "Activo" : "Inactivo"}</p>
      <button onClick={() => setActivo(!activo)}>
        Cambiar estado
      </button>
    </div>
  );
}

export default BooleanState;