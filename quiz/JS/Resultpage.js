  // Function to retrieve data from local storage
  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to populate the table with data from the userAnswers array
function populateResultTable() {
    const resultTableBody = document.querySelector("#resultTable tbody");

    // Clear existing table rows if any
    resultTableBody.innerHTML = "";

    // Get the userAnswers array and quizData from the local storage
    const userAnswers = getDataFromLocalStorage("userAnswers");
    const selectedQuizOption = localStorage.getItem("selectedQuizOption");
    const quizData = getDataFromLocalStorage("quizData" + selectedQuizOption);

     // Check if userAnswers and quizData are available and in sync
if (userAnswers && quizData && userAnswers.length === quizData.length) {
    // Populate the table with data using forEach
    userAnswers.forEach((result, index) => {
        const questionData = quizData[index];

        const row = document.createElement("tr");
        const questionCell = document.createElement("td");
        const userAnswerCell = document.createElement("td");
        const correctAnswerCell = document.createElement("td");

        questionCell.textContent = questionData.question;
        userAnswerCell.textContent = getAnswerText(result.userAnswer, questionData);
        correctAnswerCell.textContent = getAnswerText(questionData.correct, questionData);

        // Compare the user's answer with the correct answer to apply styles
        if (getAnswerText(questionData.correct, questionData) === getAnswerText(result.userAnswer, questionData)) {
            userAnswerCell.style.color = "green";
        } else {
            // userAnswerCell.className = "wrong";
            userAnswerCell.style.color = "red";
        }

        row.appendChild(questionCell);
        row.appendChild(userAnswerCell);
        row.appendChild(correctAnswerCell);

        resultTableBody.appendChild(row);
    });
} else {
    // Show a message or handle the case when userAnswers or quizData is not available or not in sync
    alert("No user answers or quiz data found, or they are not in sync.");
}
}

// Function to get the full text of the answer based on the selected letter
function getAnswerText(answerLetter, questionData) {
switch (answerLetter) {
    case 'a':
        return questionData.a;
    case 'b':
        return questionData.b;
    case 'c':
        return questionData.c;
    case 'd':
        return questionData.d;
    default:
        return answerLetter; // Return the original answer if it doesn't match 'a', 'b', 'c', or 'd'
}
}

// Call the function to populate the table with data
populateResultTable();