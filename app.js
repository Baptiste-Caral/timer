const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const count = document.querySelector('.counter')
let secondes;
let interval;


const start = () => {

  interval = setInterval(decompte, 1000);
  btn.innerHTML = 'Stop';
  input.hidden;
}

btn.addEventListener('click',(e) => {
  e.preventDefault();
  if (isNaN(input.value) && !'...') {
    
    alert('Veuillez rentrer un nombre svp, pas de texte')

  } else if (secondes > 0) {
    stop();
    e.preventDefault();
    
  } else {

    secondes = input.value;
    start();
    e.preventDefault();
    input.value = ' ... ';
  }
});


const stop = () => {

  const reset = () => {
    count.innerHTML = "0";
  } 
  clearInterval(interval);
  count.innerHTML = "<span style='font-size:40px'>Terminé !</span>";
  secondes = 0;
  btn.innerHTML = 'Lancer le décompte';
  setTimeout(reset, 1500);
  input.value = ''
}
const decompte = () => {

  secondes--;
  if (secondes <= 0) {
    stop();
    const audio = new Audio('bip.mp3');
    audio.play();
    
  }
  else
  count.innerHTML = secondes;
  
}

