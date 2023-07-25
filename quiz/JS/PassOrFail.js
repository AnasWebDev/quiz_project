 // Function to update the background color and score information
 function updateBackgroundColorAndScore() {
    // Retrieve the score from local storage
    var score = parseInt(localStorage.getItem("score"));

    // Calculate the score percentage
    var scorePercentage = (score / 10) * 100;

    // Get the elements for displaying score and wrong answers
    var scoreElement = document.getElementById("yourscor");
    var wrongAnswersElement = document.getElementById("missing");
    var phrase = document.getElementById("phrase");
    var header = document.getElementById("h1");
    var sec1 = document.getElementById('sec1');
    var h2 = document.getElementById('h2result');

    // Update the elements with the calculated values
    scoreElement.textContent = isNaN(scorePercentage) ? "N/A" : scorePercentage.toFixed(2) + "% (" + score + " points)";

    // Calculate the wrong answers as a percentage
    var wrongAnswersPercentage = ((10 - score) / 10) * 100;

    // Update the wrongAnswersElement with the calculated value
    wrongAnswersElement.textContent = isNaN(wrongAnswersPercentage) ? "N/A" : wrongAnswersPercentage.toFixed(2) + "% (" + (10 - score) + " wrong answers)";

    // Get the body element
    var body = document.getElementById("bdy");

    // Check the score and update the background color accordingly
    if (!isNaN(scorePercentage)) {
        if (scorePercentage >= 50) {
            sec1.style.border = "green";
            sec1.style.border = "solid";
            header.style.color = "green";
            wrongAnswersElement.style.color = "red";
            scoreElement.style.color = "green";
            h2.style.color = "green";
        
        } else {
            sec1.style.border = "red";
            header.style.color = "red";
            phrase.style.color = "red";
            phrase.textContent = "You Failed!";
            wrongAnswersElement.style.color = "red";
            header.textContent = "OOPS!";
            h2.style.color = "red";
            scoreElement.style.color = "green";
            sec1.style.border = "red";
            sec1.style.border = "solid";
        }
    }
}

// Call the updateBackgroundColorAndScore function when the page loads
updateBackgroundColorAndScore();