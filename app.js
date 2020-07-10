const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const count = document.querySelector('.counter')
let secondes;
let interval;


const start = () => {

  interval = setInterval(decompte, 1000);
}

btn.addEventListener('click',(e) => {
  e.preventDefault();
  if (isNaN(input.value)) {
    
    alert('Veuillez rentrer un nombre svp, pas de texte')

  } else {

    secondes = input.value;
    start();
    e.preventDefault();
  }
});


const stop = () => {
  clearInterval(interval);
  count.innerHTML = 'Terminé !';
}
const decompte = () => {

  secondes--;
  if (secondes <= 0) {
    stop()  
  }
  else
  count.innerHTML = secondes;
}

