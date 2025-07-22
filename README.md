# 💼 My Dev Portfolio

Welcome to **My Dev Portfolio** — a personal developer portfolio built with React and styled beautifully using Tailwind CSS. This project showcases your work, skills, and contact form integration using **EmailJS**.

## 🔗 Live Demo

> [Click Here to View Live Portfolio](https://jindalharry07.github.io/my-dev-portfolio)

---

## 🛠️ Tech Stack

- **React.js** — Frontend Framework
- **Tailwind CSS** — Utility-first CSS Framework
- **EmailJS** — Email contact form service
- **Vite** — Development server and bundler

---

## ✨ Features

- Responsive portfolio layout
- Project showcase section
- About me and skills sections
- Fully functional contact form via EmailJS
- Clean, modern UI

---

## 📦 Installation Guide (Clone and Run)

If you want to clone and run this portfolio locally, follow these steps:

1. Clone the Repo

```bash
git clone https://github.com/jindalharry07/my-dev-portfolio.git
cd my-dev-portfolio

2. Install Dependencies

Make sure you have Node.js and npm installed.
bash
Copy
Edit
npm install

3. Set Up EmailJS

To enable the contact form:

- Go to EmailJS
- Create an account
- Create a new email service
- Create a new email template using these fields:

from_name
from_email
message

In your code, add your:

-- Service ID
-- Template ID
-- User/Public Key

Example (in emailService.js or inside your form handler):

js
Copy
Edit
emailjs.send(
  'your_service_id',
  'your_template_id',
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  'your_public_key'
);
⚠️ DO NOT expose your keys in a public repo. Use .env file to store secrets.

4. Run the Project
bash
Copy
Edit
npm run dev
Visit: http://localhost:5173

🙋‍♂️ Contributing
Feel free to fork this repository and submit pull requests.

