const controlSongs =  document.getElementById('buttonsSongs');



controlSongs.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
    console.log(action);
  });

