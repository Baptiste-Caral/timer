const btn = document.querySelector('.btn');
let secondes = 10;
let interval;


const start = () => {
  interval = setInterval(decompte, 1000);
}

btn.addEventListener('click',start);


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

