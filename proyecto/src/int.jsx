import { useState } from "react";

function NumberState() {
  const [edad, setEdad] = useState(20);

  return (
    <div>
      <p>{edad}</p>
      <button onClick={() => setEdad(edad + 1)}>
        Aumentar edad
      </button>
    </div>
  );
}

export default NumberState;