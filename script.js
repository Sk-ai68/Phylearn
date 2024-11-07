function generateFlashcards() {
  const notes = document.getElementById('notes-textarea').value;
  const flashcardsContainer = document.getElementById('flashcards');
  flashcardsContainer.innerHTML = ''; // Clear existing flashcards

  const lines = notes.split('\n');
  lines.forEach(line => {
    if (line.trim() !== '') {
      const flashcard = document.createElement('div');
      flashcard.className = 'flashcard';
      flashcard.textContent = line;
      flashcardsContainer.appendChild(flashcard);
    }
  });
}

function startPomodoro() {
  let timeLeft = 25 * 60;
  const timerDisplay = document.getElementById('pomodoro-timer');

  const interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Time's up!";
      alert('Pomodoro session complete! Take a break.');
    }
  }, 1000);
}

function startBreathingExercise() {
  const timerDisplay = document.getElementById('breathing-timer');
  const phases = ['Inhale...', 'Hold...', 'Exhale...', 'Hold...'];
  let currentPhase = 0;

  setInterval(() => {
    timerDisplay.textContent = phases[currentPhase];
    currentPhase = (currentPhase + 1) % phases.length;
  }, 4000);
}
