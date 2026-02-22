document.addEventListener("DOMContentLoaded", function () {
  const testData = JSON.parse(localStorage.getItem("hiringTest"));

  if (!testData) {
    alert("No test found! Please ask recruiter for link.");
    return;
  }

  // Set Job Role & Description
  document.getElementById("jobRole").innerText = testData.role || "N/A";
  document.getElementById("jobDesc").innerText = testData.desc || "N/A";

  const container = document.getElementById("questionsContainer");

  // Render Questions
  testData.questions.forEach((q, index) => {
    const qHTML = `
      <div class="card">
        <p><strong>Q${index + 1}. ${q.question}</strong></p>
        <label><input type="radio" name="q${index}" value="a"/> ${q.options.a}</label><br/>
        <label><input type="radio" name="q${index}" value="b"/> ${q.options.b}</label><br/>
        <label><input type="radio" name="q${index}" value="c"/> ${q.options.c}</label><br/>
        <label><input type="radio" name="q${index}" value="d"/> ${q.options.d}</label>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", qHTML);
  });

  // Submit Logic
  document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("candidateName").value.trim();
    const email = document.getElementById("candidateEmail").value.trim();

    if (!name || !email) {
      alert("Please fill your details");
      return;
    }

    let knockedOut = false;
    let unanswered = false;

    testData.questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (!selected) {
        unanswered = true;
      } else if (selected.value !== q.correct) {
        knockedOut = true;
      }
    });

    if (unanswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    document.getElementById("resultSection").style.display = "block";

    if (knockedOut) {
      document.getElementById("resultMessage").innerText =
        "❌ You are knocked out due to incorrect answers.";
      updateStats("knocked");
    } else {
      document.getElementById("resultMessage").innerText =
        "✅ Congratulations! You are shortlisted.";
      document.getElementById("resumeUpload").style.display = "block";
      updateStats("shortlisted");
    }

    // Increase applied count
    let applied = parseInt(localStorage.getItem("appliedCount")) || 0;
    localStorage.setItem("appliedCount", applied + 1);
  });
});

// Update Dashboard Stats
function updateStats(status) {
  if (status === "knocked") {
    let knocked = parseInt(localStorage.getItem("knockedCount")) || 0;
    localStorage.setItem("knockedCount", knocked + 1);
  } else {
    let shortlisted = parseInt(localStorage.getItem("shortlistedCount")) || 0;
    localStorage.setItem("shortlistedCount", shortlisted + 1);
  }
}

// Resume Upload (Mock)
function saveResume() {
  alert("Resume uploaded successfully! Recruiter will review.");
}