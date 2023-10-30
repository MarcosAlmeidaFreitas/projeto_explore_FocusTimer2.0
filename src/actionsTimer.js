import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as events from './events.js'
import * as songs from './songs.js'

export function timerAdd5Minutes(){
  let explosionTimer = state.minutes + 5;

  if(state.minutes < 60 && explosionTimer <= 60){
    timer.updateDisplay(explosionTimer, state.seconds);
    songs.mouseClick.play();
  }
}

export function timerSubtract5Minutes(){
  let explosionTimer = state.minutes - 5;

  if(explosionTimer >= 0){
    timer.updateDisplay(explosionTimer, state.seconds);
    songs.mouseClick.play();
  }else{
    timer.updateDisplay(0,0);
  }
}

export function timerDecrement(){
  songs.mouseClick.play();
  document.documentElement.classList.toggle('running');
  state.isRunning = !state.isRunning;
  timer.countTimer();
}

export function setTimer(){
  songs.mouseClick.play();
  events.set_timer();
}

export function stopOrReset(){
  timer.updateDisplay(0, 0);
  state.isRunning = false;
  document.documentElement.classList.remove('running');
}
