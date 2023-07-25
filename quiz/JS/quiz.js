// Function to retrieve data from local storage
function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to save data to local storage
function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to get quiz data from local storage
function getQuizData(quizKey) {
    const storedQuizData = localStorage.getItem(quizKey);
    if (storedQuizData) {
        return JSON.parse(storedQuizData);
    } else {
        console.log(`No quiz data found for key: ${quizKey}`);
        return [];
    }
}

// Function to start the quiz
function startQuiz(selectedQuizOption) {
    let quizKey;
    switch (selectedQuizOption) {
        case "HTML":
            quizKey = "quizDataHTML";
            break;
        case "CSS":
            quizKey = "quizDataCSS";
            break;
        case "JAVASCRIPT":
            quizKey = "quizDataJAVASCRIPT";
            break;
        default:
            // Default to English quiz if no valid option is found
            quizKey = "quizDataENGLISH";
            break;
    }
    const selectedQuizData = getQuizData(quizKey);
    if (selectedQuizData.length > 0) {
        const quiz = document.getElementById('quiz');
        const answerEls = document.querySelectorAll('.answer');
        const questionEl = document.getElementById('question');
        const a_text = document.getElementById('a_text');
        const b_text = document.getElementById('b_text');
        const c_text = document.getElementById('c_text');
        const d_text = document.getElementById('d_text');
        const submitBtn = document.getElementById('submit');
        const timerDisplay = document.getElementById('timer');
        const questionIndexDisplay = document.getElementById('question-index');
        const currentQuestionIndex = document.getElementById('current-question');
        const totalQuestions = document.getElementById('total-questions');

        let currentQuiz = 0;
        let score = 0;
        let userAnswers = [];

        loadQuiz();

        function loadQuiz() {
            deselectAnswers();
            const currentQuizData = selectedQuizData[currentQuiz];
            questionEl.innerText = currentQuizData.question;
            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d;

            // Update question index display
            currentQuestionIndex.innerText = currentQuiz + 1;
            totalQuestions.innerText = selectedQuizData.length;

            // Change button text for the last question
            if (currentQuiz === selectedQuizData.length - 1) {
                submitBtn.innerText = "Submit";
            } else {
                submitBtn.innerText = "Next";
            }
        }

        function endQuiz() {
            stopTimer();

            // Save the userAnswers array to local storage
            // saveDataToLocalStorage("userAnswers", userAnswers);
            localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
            localStorage.setItem("score", JSON.stringify(score));
            window.location.href = "PassOrFail.html";
        }

        function deselectAnswers() {
            answerEls.forEach(answerEl => (answerEl.checked = false));
        }

        function getSelected() {
            let answer;
            answerEls.forEach(answerEl => {
                if (answerEl.checked) {
                    answer = answerEl.id;
                }
            });
            return answer;
        }

        function stopTimer() {
            clearInterval(timerInterval);
        }

        let timerInterval;
        function startTimer() {
            let remainingTime = 200; // 3 minutes and 20 seconds

            timerInterval = setInterval(() => {
                remainingTime--;

                // Convert remaining time to minutes and seconds
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;

                // Format the time display to add leading zeros if needed
                const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

                timerDisplay.innerText = formattedTime;

                if (remainingTime === 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        submitBtn.addEventListener('click', () => {
            const answer = getSelected();
            if (answer) {
                // Get the current question index
                const questionIndex = currentQuiz;

                // Get the correct answer for the current question
                const correctAnswer = selectedQuizData[questionIndex].correct;

                // Save the user's answer and correct answer to the local storage
                const userAnswer = answer;
                userAnswers.push({
                          question: selectedQuizData[questionIndex].question,
                          userAnswer: selectedQuizData[questionIndex][answer], // Use the actual value instead of the character
                          correctAnswer: selectedQuizData[questionIndex].correct
});

                // Compare the user's answer to the correct answer and update the score
                if (answer === correctAnswer) {
                    score++;
                }

                currentQuiz++;

                if (currentQuiz < selectedQuizData.length) {
                    loadQuiz();
                } else {
                    endQuiz();
                }
            }
        });

        startTimer();
    } else {
        console.log(`No quiz data found for key: ${quizKey}`);
    }
}

// Retrieve the selected quiz option from local storage
const selectedQuizOption = localStorage.getItem("selectedQuizOption");

// Start the selected quiz when the page loads
if (selectedQuizOption) {
    startQuiz(selectedQuizOption);
}