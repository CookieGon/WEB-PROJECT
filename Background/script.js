// alert('test');
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// id 선택시 getElementById 나머지 querySelector
const body = document.getElementById('gradient');

function set() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  h3.textContent = body.style.background;
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
