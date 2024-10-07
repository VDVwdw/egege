// Массив с загаданным словом
const chosenWord = 'пример'; // Вы можете заменить это на любое слово, которое хотите
let correctGuesses = Array(chosenWord.length).fill('_');
let attempts = 0;

// Обновляем интерфейс
function updateDisplay() {
    document.getElementById('correct_guesses').textContent = correctGuesses.join(' ');
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('word_length').textContent = chosenWord.length;
}

// Обработка отправки формы
document.getElementById('guess-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const guessWord = document.getElementById('guess_word').value.toLowerCase();

    // Проверка введенной буквы
    if (chosenWord.includes(guessWord)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === guessWord) {
                correctGuesses[i] = guessWord;
            }
        }
    } else {
        attempts++;
    }

    updateDisplay();
    document.getElementById('guess_word').value = ''; // Очистить поле ввода

    // Проверка на победу
    if (!correctGuesses.includes('_')) {
        alert(`Поздравляем! Вы угадали слово: ${chosenWord}.`);
        location.reload();
    }

    // Проверка на поражение
    if (attempts >= 100) { // Например, 100 попыток
        alert(`Вы проиграли! Загаданное слово было: ${chosenWord}.`);
        location.reload();
    }
});

// Обработка нажатия кнопки "Я сдаюсь"
document.getElementById('give-up-btn').addEventListener('click', function() {
    alert(`Вы сдались! Загаданное слово было: ${chosenWord}.`);
    location.reload();
});

// Инициализация интерфейса
updateDisplay();
