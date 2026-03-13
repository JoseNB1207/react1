import { useState } from "react";

function ArrayState() {
  const [frutas, setFrutas] = useState(["Manzana", "Banano"]);

  return (
    <div>
      <ul>
        {frutas.map((fruta, i) => (
          <li key={i}>{fruta}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setFrutas([...frutas, "Pera"])
        }
      >
        Agregar fruta
      </button>
    </div>
  );
}

export default ArrayState;