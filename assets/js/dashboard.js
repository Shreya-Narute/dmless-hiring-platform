// Redirect if not logged in
if (localStorage.getItem("recruiterLoggedIn") !== "true") {
  window.location.href = "index.html";
}

// Fetch counts from localStorage
let applied = localStorage.getItem("appliedCount") || 0;
let knocked = localStorage.getItem("knockedCount") || 0;
let shortlisted = localStorage.getItem("shortlistedCount") || 0;

// Display values
document.getElementById("appliedCount").innerText = applied;
document.getElementById("knockedCount").innerText = knocked;
document.getElementById("shortlistedCount").innerText = shortlisted;

// Logout function
function logout(){
  localStorage.removeItem("recruiterLoggedIn");
  window.location.href = "index.html";
}