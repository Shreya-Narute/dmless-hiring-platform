let mcqCount = 0;

function addMCQ() {
  if (mcqCount >= 5) {
    alert("Only 5 MCQs allowed");
    return;
  }

  mcqCount++;
  const container = document.getElementById("mcqContainer");

  const mcqHTML = `
    <div class="mcq-block">
      <h4>Question ${mcqCount}</h4>
      <input type="text" placeholder="Enter question" id="q${mcqCount}" />

      <div class="options">
        <input type="text" placeholder="Option A" id="q${mcqCount}a" />
        <input type="text" placeholder="Option B" id="q${mcqCount}b" />
        <input type="text" placeholder="Option C" id="q${mcqCount}c" />
        <input type="text" placeholder="Option D" id="q${mcqCount}d" />
      </div>

      <label>Correct Answer:</label>
      <select id="ans${mcqCount}">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
        <option value="d">Option D</option>
      </select>
      <hr/>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", mcqHTML);
}

function generateLink() {
  const role = document.getElementById("jobRole").value;
  const desc = document.getElementById("jobDesc").value;

  if (!role || !desc || mcqCount < 5) {
    alert("Please fill job details and 5 MCQs");
    return;
  }

  let testData = {
    role,
    desc,
    questions: []
  };

  for (let i = 1; i <= 5; i++) {
    testData.questions.push({
      question: document.getElementById(`q${i}`).value,
      options: {
        a: document.getElementById(`q${i}a`).value,
        b: document.getElementById(`q${i}b`).value,
        c: document.getElementById(`q${i}c`).value,
        d: document.getElementById(`q${i}d`).value,
      },
      correct: document.getElementById(`ans${i}`).value
    });
  }

  localStorage.setItem("hiringTest", JSON.stringify(testData));

  const link = `${window.location.origin}/candidate-test.html`;
  document.getElementById("hiringLink").value = link;
  document.getElementById("linkSection").style.display = "block";
}