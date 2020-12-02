import './App.css';
import { useState } from 'react';
import './css/bootstrap.min.css';
import signo from './Images/signo.png'


const App=()=>{

const [eleccionPlayer,setEleccionPlayer] = useState("");
const [eleccionMaquina,setEleccionMaquina] = useState ("");

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
      <img src={signo}></img>

      <br></br>
      <br></br>
      <br></br>

      <div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Haz tu eleccion!
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Piedra</a>
    <a class="dropdown-item" href="#">Papel</a>
    <a class="dropdown-item" href="#">Tijera</a>
    <a class="dropdown-item" href="#">Lagarto</a>
    <a class="dropdown-item" href="#">Spock</a>
   
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
      <img src={signo}></img>
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
