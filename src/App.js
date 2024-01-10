import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton.js";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from "./componentes/BotonClear.js";
import FreeCodeCampLogo from './componentes/FccLogo.js';
import {useState} from "react";
import { evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = ()=> {
    if (input){
      setInput(evaluate(input))
    } else {
      alert("No hay nada que calcular");
    }
  };

  return (
    <div className="App">
      <FreeCodeCampLogo />
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={calculateResult}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={ () => setInput("")}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
