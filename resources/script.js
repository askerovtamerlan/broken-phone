let shortcuts = {
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  c: 67,
  x: 88
};

const inputElement = document.querySelector('input');
let output = '';

const phone = document.querySelector('.numbers-shadow');
phone.addEventListener('click', function(event) {
  console.log(event.target);
  if (event.target.className === 'numbers numbers-shadow')
  return console.log('Frame have been clicked!');
  let cellShadow = event.target;
  cellShadow.classList.add('fire');
});

document.addEventListener ('animationend', function(event) {
  let cellShadow = event.target;
  cellShadow.classList.remove('fire');
});

document.addEventListener('keydown', function(event) {
  console.log(event.keyCode);

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return; // if key/audio pair does not exist exit from program
  audio.play();
  let cellShadow = document.getElementById(`${event.keyCode}`);
  cellShadow.classList.add('fire');

  if (event.keyCode === 67) output = ''; // key code of symbol 'c' is 67
  else if (event.keyCode === 88) {

    playback(output);
    output = 'CALL';
    setTimeout(function(){
      output = '';
      inputElement.value = output;
    }, 5000);
  }
  else output = inputElement.value + cellShadow.innerHTML;

  inputElement.value = output;
});

// write call function, playback string output
function playback(str) {
  for(let i = 0; i < str.length; i++) {
    let time = i * 500;
    let cellShadow = document.getElementById(shortcuts[str[i]]);
    setTimeout(function(){cellShadow.classList.add('fire')}, time);
  }
};

// document.addEventListener('click', function(event) {
//   if ( event.target.classList !== 'call' ) return;
//
//
//   output.forEach()
// });
//
//   setupTimeOut( function() {
//
//   },`${i}000`)
