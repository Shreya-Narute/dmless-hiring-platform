---

## 🌟 Problem Statement

Recruiters hire from different channels like LinkedIn, Instagram, and other platforms.

They need:
- A single dashboard
- A way to create hiring links
- MCQ-based knockout logic
- Resume upload only for shortlisted candidates
- Analytics dashboard

DMless solves this problem.

---

## 🔥 Features

### 👨‍💼 Recruiter Side
- Recruiter Login
- Dashboard
- Create Hiring Test
- Add Job Role & Job Description
- Add minimum 5 MCQs
- Set correct answers
- Generate unique hiring link
- View analytics:
  - Total Applicants
  - Knocked Out Candidates
  - Shortlisted Candidates

### 👩‍💻 Candidate Side
- Open hiring link
- Answer MCQs
- Knockout logic:
  - If 1 wrong answer → Rejected
  - If all correct → Shortlisted
- Resume upload (only if shortlisted)

---

## 🧠 Knockout Logic

- Recruiter sets correct answers.
- If candidate selects even one wrong answer:
  → Candidate is immediately rejected.
- If candidate answers all correctly:
  → Candidate is shortlisted.
  → Resume upload enabled.

---

## 🛠 Tech Stack

- HTML
- CSS (Bootstrap 5)
- JavaScript
- Local Storage (for data handling)
- GitHub (Version Control)
- Vercel (Deployment)

---

## 📁 Project Structure


dmless-hiring-platform/
│
├── index.html
├── dashboard.html
├── create-test.html
├── result.html
│
├── assets/
│ ├── css/
│ └── js/
│ ├── auth.js
│ ├── dashboard.js
│ ├── createTest.js
│ ├── testLogic.js
│ └── upload.js
│
├── components/
│ ├── navbar.html
│ └── footer.html
│
├── data/
│ └── mockData.json
│
└── README.md


---

## 🚀 How to Run Locally

1. Clone the repository
2. Open project folder
3. Open index.html in browser

---

## 🌍 Live Deployment

Deployed using Vercel.

---

## 🎯 Assignment Completion Checklist

✔ Recruiter Login  
✔ Create Test with minimum 5 MCQs  
✔ Generate Hiring Link  
✔ Candidate Page with MCQs  
✔ Knockout Logic Working  
✔ Resume Upload for Shortlisted  
✔ Dashboard Analytics Updated  
✔ GitHub Repository Created  
✔ Deployed on Vercel  

---

## 📌 Future Improvements

- Backend with Node.js & Express
- Database integration (MongoDB)
- Authentication with JWT
- Admin panel
- Email notifications
- Real analytics dashboard
- Unique shareable links

---

## 📜 License

This project is created for learning and demonstration purposes.