import StringState from "./StringState";
import BooleanState from "./BooleanState";
import NumberState from "./NumberState";
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejemplos de Estados en React</h1>

      <h2>String</h2>
      <StringState />

      <h2>Boolean</h2>
      <BooleanState />

      <h2>Number</h2>
      <NumberState />

      <h2>Objeto</h2>
      <ObjectState />

      <h2>Array</h2>
      <ArrayState />
    </div>
  );
}

export default App;