
import { useEffect, useState } from 'react';
import './css/bootstrap.min.css';
import Resultados from './Resultados'
import './css/App.css';
import cruzado from './images/cruzado.png'
import score from './images/score.png'
import signo from './images/signo.png'


const App=()=>{

const [eleccionPlayer,setEleccionPlayer] = useState("signo");
const [eleccionMaquina,setEleccionMaquina] = useState ("");
const opciones = ["piedra","papel","tijera","lagarto","spock"]
const [resultado,setResultado] = useState(false)
const [puedeVerResultado,setPuedeVerResultado] = useState (true)
const [scorePlayer1,setScorePlayer1] = useState(0)
const [scorePlayer2,setScorePlayer2] = useState(0)
const [maquinaHaElegido,setMaquinaHaElegido] = useState(false)

/*useEffect(() => {

  setMaquinaHaElegido(maquinaHaElegido)
  sumarScore();
},[maquinaHaElegido])  

*/

const seleccionPlayer=(tipoEleccion) => (event) =>{

  event.preventDefault();
  setEleccionPlayer(tipoEleccion)
  setPuedeVerResultado(false)

}

const seleccionMaquina = () => {

    const val=opciones[Math.floor(Math.random()*opciones.length)]
    setEleccionMaquina(val)
   

}

const handleResultado = (event) => {
  event.preventDefault();
  setResultado(true)
  seleccionMaquina()
}

const nuevaPartida = (event) => {
  event.preventDefault();
  setResultado(false)
  setEleccionPlayer("signo")
  setEleccionMaquina("signo")

 


}

const sumarScore = (player) => {

   

 

  if(player === "Player 1"){

    setScorePlayer1(obtenerPuntaje1+1)
     
  }
  else if (player === "Player 2") {

       setScorePlayer2(obtenerPuntaje2+1)
  }

}

const obtenerPuntaje1 = () => {
    
    return scorePlayer1
}

const obtenerPuntaje2 = () => {
    

    return scorePlayer2
}


return(
  <div className="container-fluid" id="principal">  
  

  <div class="row">
  <div class="col-sm-6" id="col-player">
   
    <div class="card">
     
    <div class="card-header">
   <img src={cruzado} id="cruzado" ALIGN="left"></img> Player <div id="textScore" >Score</div>
<img src={score} id="score"  ></img> <div id="numero">{scorePlayer1}</div></div> 
      <div class="card-body">
      <img src={`../../${eleccionPlayer}.png`}></img>

    
    
      <div class="btn-group dropright" >
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
  <div class="col-sm-6" id="col-player">
    <div class="card">
    <div class="card-header">
    <img src={cruzado} id="cruzado" ALIGN="left"></img> Computer <div id="textScore" >Score</div>
<img src={score} id="score"  ></img> <div id="numero">{scorePlayer2}</div>
  </div>
      <div class="card-body">
      <img src={`../../signo.png`}></img>
      <br></br>
      <br></br>
      
      
      
      <div class="alert alert-dark" role="alert " id="random">
         Eleccion random
    
    </div>
      </div>
    </div>
  </div>
</div>

  <br></br>
<div ALIGN="center" className="boton">
<button type="button" class="btn btn-outline-secondary" id="jugar" disabled={puedeVerResultado} onClick= {handleResultado}>Jugar</button>

</div>
{resultado && <Resultados player1={eleccionPlayer} player2={eleccionMaquina} nuevaPartida={nuevaPartida} sumarScore= {sumarScore} />}
 </div>
 


)


}

export default App;
