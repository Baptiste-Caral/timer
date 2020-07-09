const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
let secondes;
let interval;


const start = () => {
  
  interval = setInterval(decompte, 1000);
}

btn.addEventListener('click',(e) => {
  e.preventDefault();
  if (isNaN(input.value)) {
    
    alert('Veuillez rentrer un nombre svp, pas du texte')

  } else {

    secondes = input.value;
    start();
    e.preventDefault();
  }
});


const stop = () => {
  clearInterval(interval);
  document.body.innerHTML = 'Terminé !';
}
const decompte = () => {

  secondes--;
  if (secondes == 0) {
    stop()  
  }
  else
  document.body.innerHTML = secondes;
}

