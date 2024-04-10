const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let intervalId;
let startTime;
let pausedTime = 0;

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime - pausedTime;
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
  if (!intervalId) {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1000);
  }
});

pauseButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    pausedTime += Date.now() - startTime;
    intervalId = null;
  }
});

resetButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  startTime = Date.now();
  pausedTime = 0;
  timerElement.textContent = '00:00:00';
});
