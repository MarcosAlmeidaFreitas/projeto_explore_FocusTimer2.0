import * as elements from './elements.js';
import * as ActionTimer from './actionsTimer.js';

elements.controlsTimer.addEventListener('click', (event)=>{
  const action = event.target.dataset.action;
  console.log(action);

  switch(action){
    case undefined:
      return;
    case 'timerAdd':
      ActionTimer.timerAdd5Minutes();
      break;
    case 'timerSubtract':
      ActionTimer.timerSubtract5Minutes();
      break;
    case 'playPause':
      ActionTimer.timerDecrement();
      break;
    case 'set':
      ActionTimer.setTimer();
      break;
    case 'stop':
      ActionTimer.stopOrReset();
  }
});
