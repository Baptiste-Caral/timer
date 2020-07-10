const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const count = document.querySelector('.counter')
let secondes;
let interval;

const start = () => {
  interval = setInterval(decompte, 1000);
  btn.innerHTML = 'Stop';
  input.style.display = 'none';
}

const decompte = () => { 
  secondes--;
  if (secondes <= 0) {
    stop();
    const audio = new Audio('./assets/bip.mp3');
    audio.play();
  }
  else
  count.innerHTML = secondes;  
}
const stop = () => {

  const reset = () => {
    count.innerHTML = "0";
    input.style.display = 'block';
    btn.innerHTML = 'Lancer le décompte';
  } 
  clearInterval(interval);
  count.innerHTML = "<span style='font-size:40px'>Terminé !</span>";
  secondes = 0; 
  setTimeout(reset, 1500);
  input.value = '';
  
}
btn.addEventListener('click',(e) => {

  e.preventDefault();

  if (isNaN(input.value)) { 
    alert('Veuillez rentrer un nombre svp, pas de texte')
  } else if (secondes > 0) {
    stop();
    e.preventDefault(); 
  } else {
    secondes = input.value;
    count.innerHTML = secondes;
    start();
    e.preventDefault();
  }
});





