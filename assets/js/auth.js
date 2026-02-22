document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // Save recruiter session
    localStorage.setItem("recruiterLoggedIn", "true");
    localStorage.setItem("recruiterEmail", email);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter valid credentials");
  }
});