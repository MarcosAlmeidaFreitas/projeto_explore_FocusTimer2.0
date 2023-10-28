import * as songs from './songs.js'
import state from './state.js';

const controlSongs =  document.querySelector('.buttonSongs');
 let previousSong; //Variavel que guarda o nome do som anterior 
 let previousEvent; //variavel que guarda o evento do click anterior.

controlSongs.addEventListener('click', (event) => {
  // Pega a ação do evento que foi clicado, e se for undefined ele termina a função
  let action = event.target.dataset.action; //aqui passa o nome da ação, ou evento anteri
  if(action == undefined){
    return;
  }

  if(state.isMute == true){
    playSong(event, action);
    previousSong = action;
    previousEvent = event;
  }else{
    if(previousSong == action){
      stopSong(event, action);
    }else{
      stopSong(previousEvent, previousSong);
      playSong(event, action);
      previousSong = action;
      previousEvent = event;
    }
  }
  
});

function playSong(event, action){
  if(action == 'playFlorest'){
    songs.florest.play();
    event.target.classList.toggle('buttonSongSelected');
  }else if(action == 'playRain'){
    songs.rain.play();
    event.target.classList.toggle('buttonSongSelected');
  }else if(action == 'playCoffeeShop'){
    songs.coffeeShop.play();
    event.target.classList.toggle('buttonSongSelected');
  }else{
    songs.campFire.play();
    event.target.classList.toggle('buttonSongSelected');
  }

  state.isMute = false;
}

function stopSong(event, action){
  if(action == 'playFlorest'){
    songs.florest.pause();
    event.target.classList.toggle('buttonSongSelected');
  }else if(action == 'playRain'){
    songs.rain.pause();
    event.target.classList.toggle('buttonSongSelected');
  }else if(action == 'playCoffeeShop'){
    songs.coffeeShop.pause();
    event.target.classList.toggle('buttonSongSelected');
  }else{
    songs.campFire.pause();
    event.target.classList.toggle('buttonSongSelected');
  }

  state.isMute = true;
}