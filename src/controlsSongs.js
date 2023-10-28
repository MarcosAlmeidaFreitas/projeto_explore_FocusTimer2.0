import * as songs from './songs.js'
import state from './state.js';

const controlSongs =  document.querySelector('.buttonSongs');

controlSongs.addEventListener('click', (event) => {
  // Pega a ação do evento que foi clicado, e se for undefined ele termina a função
  let action = event.target.dataset.action;
  if(action == undefined){
    return;
  }

  if(state.isMute == true){
    state.isMute = false;
    state.nameSong = action;
    playSong(event, action);
  }else{
    stopSong(event, action);
    state.isMute = true;
  }

  
  console.log('name song is: ' + state.nameSong);
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
}