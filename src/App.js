import './App.css';
import { useState } from 'react';
import './css/bootstrap.min.css';


const App=()=>{

const [eleccionPlayer,setEleccionPlayer] = useState("signo");
const [eleccionMaquina,setEleccionMaquina] = useState ("");
const opciones = ["piedra","papel","tijera","lagarto","spock"]

const seleccionPlayer=(tipoEleccion) => (event) =>{

  event.preventDefault();
  setEleccionPlayer(tipoEleccion)

}

const seleccionMaquina = () => {

    const val=opciones[Math.floor(Math.random()*opciones.length)]
    setEleccionMaquina(val)

}

return(
  <div className="container-fluid">  
  <br></br>

  <div class="row">
  <div class="col-sm-6">
    <div class="card">
     
    <div class="card-header">
    Player
  </div>
      <div class="card-body">
      <img src={`../../${eleccionPlayer}.png`}></img>

      <br></br>
      <br></br>
      <br></br>

      <div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Haz tu eleccion!
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item"  onClick={seleccionPlayer("piedra")}>Piedra</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("papel")}>Papel</button>
    <button class="dropdown-item" onClick={seleccionPlayer("tijera")}>Tijera</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("lagarto")}>Lagarto</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("spock")}>Spock</button>
   
    </div>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    Computer
  </div>
      <div class="card-body">
      <img src={`../../signo.png`}></img>
      <br></br>
      <br></br>
      
      <div class="alert alert-dark" role="alert">
         Eleccion random
    </div>
      </div>
    </div>
  </div>
</div>



 </div>
 


)


}

export default App;
