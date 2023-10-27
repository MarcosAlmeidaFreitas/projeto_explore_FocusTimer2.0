import * as songs from './songs.js'

const controlSongs =  document.getElementById('buttonSongs');

controlSongs.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
    if(action == undefined){
      return;
    }

    if(action == 'playFlorest'){
      songs.florest.play();
      event.target.classList.toggle('buttonSongSelected');
    }else if(action == 'playRain'){
      songs.rain.play();
    }else if(action == 'playCoffeeShop'){
      songs.coffeeShop.play();
    }else{
      songs.campFire.play();
    }

    console.log(action);
  });

