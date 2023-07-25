var loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Retrieve the saved user information from local storage
  var formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    // Check if there's any user with the provided email and password
    var user = formData.find(item => item.email === username && item.password === password);
    if (user) {
      // Redirect to the welcome page
      localStorage.setItem("username", username);
      localStorage.setItem("selectedQuizOption", user.selectedQuizOption);
      window.location.href = "./startpage.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } else {
    alert("No registered users found. Please register first.");
  }
});