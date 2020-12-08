import React from 'react';
import './css/Inicio.css';
import jugador from './images/jugador.png'
import twoplayers from './images/twoplayers.png'

const Inicio = () => {


    return (

    <div className="container-fluid" id="Inicio" >

        <h1 id="titulo">Bienvenidos a Piedra, Papel , Tijera , Lagarto o Spock</h1>

        <div class="row" id="fila">
             <div class="col-sm-6" id="col-tutorial">
             <div class="card" id="cardTutorial">
        <div id="subtitulo"> 
        
          Tutorial
        
        </div>
            
        <iframe width="450" height="300" src="http://www.youtube.com/embed/-ioN9FR39GA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
        </div>
      

        <div class="col-sm-6" id="col-tutorial">
             <div class="card" id="cardTutorial">
        <div id="subtitulo"> 
        
          Modo de juego
        
        </div>
            
        <div class="card-body">

        <img src={jugador} id="oneplayer" ></img>
        <button type="button" class="btn btn-dark" id="unplayer">Un jugador</button>

        <img src= {twoplayers} id="players"></img>
        <button type="button" class="btn btn-dark" id="dosplayers">Dos jugadores</button>
      </div>
        </div>
        </div>

     </div>
     
     
     
     
     </div>

    
        
    )



} 

export default Inicio;