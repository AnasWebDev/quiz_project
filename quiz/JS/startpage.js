// Retrieve the formData from local storage
var formData = JSON.parse(localStorage.getItem("formData"));

// Get the last entry in the formData array (latest registration)
var latestRegistration = formData && formData.length > 0 ? formData[formData.length - 1] : null;
var firstName = latestRegistration ? latestRegistration.firstName : null;
var type = latestRegistration ? latestRegistration.selectedQuizOption : null;

// Display the welcome message
var welcomeMessage = document.getElementById("welcomeMessage");

if (firstName) {
  welcomeMessage.textContent = "Welcome " + firstName + "!";
  
} else {
  welcomeMessage.textContent = "Welcome!";
}
    // Your existing quizData array
    document.getElementById("startTheQuiz").addEventListener("click", acessTest);
    function acessTest (){
    
    window.location.href = "quiz.html";
}
    let quizDataCSS = [
       
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "b",
    },
    {
        question: "How do you include an external CSS file in an HTML document?",
        a: '<link rel="stylesheet" href="styles.css">',
        b: "<style src='styles.css'>",
        c: "<css href='styles.css'>",
        d: "<external-css href='styles.css'>",
        correct: "a",
    },
    {
        question: "Which CSS property is used to change the font color of an element?",
        a: "color",
        b: "font-color",
        c: "text-color",
        d: "font-style",
        correct: "a",
    },
    {
        question: "Which CSS property is used to add space between the content and the border of an element?",
        a: "padding",
        b: "margin",
        c: "space",
        d: "border-spacing",
        correct: "a",
    },
    {
        question: "Which CSS selector targets all <h1> elements in the document?",
        a: "h1",
        b: ".h1",
        c: "#h1",
        d: "*h1",
        correct: "a",
    },
    {
        question: "Which CSS property is used to make text bold?",
        a: "font-weight",
        b: "text-weight",
        c: "bold",
        d: "text-bold",
        correct: "a",
    },
    {
        question: "How do you set the background color of an element in CSS?",
        a: "background-color",
        b: "bg-color",
        c: "color-background",
        d: "background-style",
        correct: "a",
    },
    {
        question: "Which CSS property is used to control the size of an element's font?",
        a: "font-size",
        b: "text-size",
        c: "size",
        d: "text-font",
        correct: "a",
    },
    {
        question: "What is the correct CSS syntax for targeting an element with ID 'header'?",
        a: "#header {}",
        b: ".header {}",
        c: "header {}",
        d: "id='header' {}",
        correct: "a",
    },
    {
        question: "Which CSS property is used to create rounded corners for an element?",
        a: "corner-radius",
        b: "border-radius",
        c: "rounded-border",
        d: "border-style",
        correct: "b",
    },
    ];

    // Additional quiz data arrays
    let quizDataHTML = [
        
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Text Markup Language",
        c: "Hyperlinking Text Markup Language",
        d: "Hyper Transfer Markup Language",
        correct: "a",
    },
    {
        question: "Which HTML tag is used to define the title of a webpage?",
        a: "<header>",
        b: "<h1>",
        c: "<title>",
        d: "<head>",
        correct: "c",
    },
    {
        question: "Which HTML tag is used to create a line break?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<newline>",
        correct: "a",
    },
    {
        question: "Which attribute is used to provide an alternative text for an image in HTML?",
        a: "src",
        b: "alt",
        c: "href",
        d: "title",
        correct: "b",
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<li>",
        d: "<list>",
        correct: "b",
    }, {
        question: "What is the correct HTML element for inserting a horizontal rule?",
        a: "<break>",
        b: "<rule>",
        c: "<hr>",
        d: "<line>",
        correct: "c",
    }, {
        question: "Which attribute is used to specify a URL in an anchor (<a>) tag?",
        a: "href",
        b: "src",
        c: "link",
        d: "url",
        correct: "a",
    }, {
        question: "Which HTML tag is used to define a table row?",
        a: "<table>",
        b: "<row>",
        c: "<tr>",
        d: "<td>",
        correct: "c",
    }, {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<url>",
        b: "<link>",
        c: "<a>",
        d: "<hyper>",
        correct: "c",
    }, {
        question: "Which HTML tag is used to define the main content of an HTML document?",
        a: "<body>",
        b: "<content>",
        c: "<main>",
        d: "<section>",
        correct: "a",
    },
    ];

    let quizDataJAVASCRIPT = [
       
    {
        question: "What does 'JS' stand for?",
        a: "Java Server",
        b: "JavaScript",
        c: "Just Saying",
        d: "Jumping Script",
        correct: "b",
    },
    {
        question: "How do you declare a variable in JavaScript?",
        a: "var x;",
        b: "variable x;",
        c: "v x;",
        d: "let x;",
        correct: "d",
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        a: "//This is a comment",
        b: "<!--This is a comment-->",
        c: "/This is a comment/",
        d: "'This is a comment'",
        correct: "a",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function = myFunction() {}",
        b: "function myFunction() {}",
        c: "var myFunction() {}",
        d: "func myFunction() {}",
        correct: "b",
    },
    {
        question: "Which operator is used for equality comparison in JavaScript?",
        a: "==",
        b: "=",
        c: "===",
        d: "equals()",
        correct: "c",
    },
    {
        question: "How do you add an element to the end of an array in JavaScript?",
        a: "array.add(element);",
        b: "array.push(element);",
        c: "array.append(element);",
        d: "array.insert(element);",
        correct: "b",
    },
    {
        question: "What does NaN stand for in JavaScript?",
        a: "Not a Number",
        b: "Null and None",
        c: "Not Available Now",
        d: "Negative Number",
        correct: "a",
    },
    {
        question: "How do you convert a string to an integer in JavaScript?",
        a: "parseInt()",
        b: "toInt()",
        c: "parseInteger()",
        d: "convertInt()",
        correct: "a",
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        a: "array.removeLast()",
        b: "array.pop()",
        c: "array.deleteLast()",
        d: "array.spliceLast()",
        correct: "b",
    },
    {
        question: "What is the correct way to loop through an array in JavaScript?",
        a: "for i = 0 to array.length",
        b: "for (i = 0; i < array.length; i++)",
        c: "foreach (element in array)",
        d: "loop(array)",
        correct: "b",
    },
    ];
    let quizDataENGLISH =[
    {
        question: "Which word is a synonym for 'happy'?",
        a: "Sad",
        b: "Joyful",
        c: "Angry",
        d: "Tired",
        correct: "b",
    },
    {
        question: "Identify the correct spelling of the word:",
        a: "Recieve",
        b: "Recievee",
        c: "Receive",
        d: "Receeve",
        correct: "c",
    },
    {
        question: "Choose the correct sentence with proper punctuation:",
        a: "i love to read books.",
        b: "I love to read books",
        c: "I love to read books?",
        d: "i love to read books.",
        correct: "b",
    },
    {
        question: "What is the plural form of 'child'?",
        a: "Childs",
        b: "Childes",
        c: "Childen",
        d: "Children",
        correct: "d",
    },
    {
        question: "Which sentence is in the past tense?",
        a: "She is eating dinner.",
        b: "He will go to school tomorrow.",
        c: "They play football every day.",
        d: "I visited my grandmother yesterday.",
        correct: "d",
    },
    {
        question: "Identify the correct use of the word 'their' in the sentence:",
        a: "They're",
        b: "There",
        c: "Their",
        d: "Thier",
        correct: "c",
    },
    {
        question: "What is the superlative form of the adjective 'tall'?",
        a: "Taller",
        b: "Talliest",
        c: "Tallest",
        d: "Tallerest",
        correct: "c",
    },
    {
        question: "Choose the correct word to complete the sentence:",
        a: "Go",
        b: "Went",
        c: "Going",
        d: "Gone",
        correct: "b",
    },
    {
        question: "What is the opposite of the word 'happy'?",
        a: "Joyful",
        b: "Excited",
        c: "Sad",
        d: "Content",
        correct: "c",
    },
    {
        question: "Identify the correct use of the word 'too' in the sentence:",
        a: "Two",
        b: "To",
        c: "Too",
        d: "Tutu",
        correct: "c",
    },
];


  
    // Store the quiz data arrays in localStorage
    localStorage.setItem("quizDataENGLISH", JSON.stringify(quizDataENGLISH));
    localStorage.setItem("quizDataHTML", JSON.stringify(quizDataHTML));
    localStorage.setItem("quizDataCSS", JSON.stringify(quizDataCSS));
    localStorage.setItem("quizDataJAVASCRIPT", JSON.stringify(quizDataJAVASCRIPT));
    localStorage.setItem("selectedQuizOption", selectedQuizOption);