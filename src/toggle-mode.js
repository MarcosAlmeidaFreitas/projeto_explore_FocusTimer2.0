let darkMode = false;
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', (event) =>{
  document.documentElement.classList.toggle('dark');
  
  let darkOrLight = darkMode ? 'Dark' : 'Light';
  let message = `Ativar ${darkOrLight} Mode`;
  
  event.currentTarget.querySelector('span').textContent = message; 

  darkMode = !darkMode;
})