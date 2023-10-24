let darkMode = false;
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () =>{
  document.documentElement.classList.toggle('dark')
  darkMode = !darkMode;

})