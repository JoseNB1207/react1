import { useState } from "react";

function StringState() {
  const [nombre, setNombre] = useState("Jose");

  return (
    <div>
      <p>{nombre}</p>
      <button onClick={() => setNombre("Carlos")}>
        Cambiar nombre
      </button>
    </div>
  );
}

export default StringState;