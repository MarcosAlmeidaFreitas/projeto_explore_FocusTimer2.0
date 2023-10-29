import { minutes } from "./elements.js";
import { updateDisplay } from "./timer.js";

export function set_timer(){
  minutes.setAttribute('contenteditable', true);
  minutes.classList.add('editable');

  // Evento de focus do minutos deixando ele vazio
  minutes.addEventListener('focus', () => {
    
  });

  //Não permitindo que o usuário digite letras
  minutes.onkeypress = (event) => /\d/.test(event.key);

  minutes.addEventListener('blur', (event)=>{
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    updateDisplay(time, 0);

    minutes.classList.remove('editable');
    minutes.removeAttribute('contenteditable');
  });
}
