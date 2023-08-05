import "./App.css";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
 
function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (

    <div className="App">
      <button>+</button>
      <p>Bank account balacnce this {state}</p>
      <button>-</button>
    </div>
  );
}

export default App;
