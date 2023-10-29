import { stopOrReset } from './actionsTimer.js';
import * as elements from './elements.js';
import state from './state.js';

export function updateDisplay(minutes, seconds){
  //se caso caso a variavel minutes do cabeçalho da função for nulo, 
  //o operador ?? está dizendo que ele vai preencher com o state.minutes 
  minutes = minutes ?? state.minutes;

  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, '0' );
  elements.seconds.textContent = String(seconds).padStart(2, '0');
  
  state.minutes = minutes;
  state.seconds = seconds;
}

export function countTimer(){
  clearTimeout(state.countDownID);

  if(state.isRunning == false){
    
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;

  if(minutes != 0 && seconds < 0){
    seconds = 59;
    minutes--;
  }else if(minutes == 0 && seconds < 0){
    stopOrReset();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownID = setTimeout(() => countTimer(), 1000);
}
