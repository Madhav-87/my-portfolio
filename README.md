# Madhav's Portfolio Website

A personal developer portfolio built with **React + Vite**, showcasing projects, skills, experience, and a working contact form. Designed for recruiters and collaborators to learn about Madhav Bondhare — a final-year BCA Computer Science student and Full-Stack Developer from Nanded, India.

---

## 🚀 Live Demo

> https://madhavbondhare.vercel.app/

---

## 📸 Preview

> <img width="1897" height="903" alt="portfolio-dashboard" src="https://github.com/user-attachments/assets/4f949b30-8454-4cb2-8057-fe6f9b6fd9ed" />

---

## ✨ Features

- **Home** — Intro, about section, skills overview, featured project, certifications, and a CTA to connect
- **Projects** — Grid of selected work with tech stack tags and GitHub links
- **Experience** — Project-based experience timeline and education background
- **Contact** — Functional email form powered by **EmailJS** with toast notifications
- Responsive layout with mobile-friendly CSS
- Social links (GitHub, LinkedIn, Email) integrated from environment variables

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Framework    | React 19, Vite 8                     |
| Routing      | React Router DOM v7                  |
| Email        | EmailJS (`@emailjs/browser`)         |
| Notifications| React Toastify                       |
| Styling      | Plain CSS (component-scoped + utility classes) |
| Linting      | ESLint with React Hooks plugin       |

---

## 📁 Project Structure

```
portfolio-web/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── portfolio-icon.png
├── src/
│   ├── assets/              # Static images
│   ├── Components/
│   │   ├── Header.jsx       # Navigation bar
│   │   └── Footer.jsx       # Footer
│   ├── pages/
│   │   ├── Home/            # Landing page
│   │   ├── Project/         # Projects showcase
│   │   ├── Experience/      # Experience & education
│   │   └── Contact/         # Contact form
│   ├── App.jsx              # Route definitions
│   ├── main.jsx             # App entry point
│   ├── index.css            # Global base styles
│   └── utility.css          # Reusable utility classes
├── .env                     # Environment variables (not committed)
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Madhav-87/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Then fill in your values (see Environment Variables section below)

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
# Social & project links
VITE_GITHUB_URL=****
VITE_LINKEDIN_URL=****
VITE_GITHUB_GROWTH_TRACKER_URL=****
VITE_GITHUB_STUDY_PLANNER_URL=****
VITE_GITHUB_PORTFOLIO_URL=****

# EmailJS credentials (from https://www.emailjs.com)
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit your actual `.env` file to version control. Add it to `.gitignore`.

---

## 📧 Setting Up EmailJS

The contact form uses [EmailJS](https://www.emailjs.com) to send emails without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an **Email Service** (Gmail, Outlook, etc.) and note the **Service ID**
3. Create an **Email Template** with variables: `{{name}}`, `{{email}}`, `{{title}}`, `{{message}}`
4. Copy the **Template ID** and your **Public Key**
5. Paste all three values into your `.env` file

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## 🚢 Deployment

This project is a static Vite build and can be deployed to any static hosting platform:

**Vercel (recommended)**
```bash
npm run build
# Push to GitHub and import the repo on vercel.com
```

**Netlify**
```bash
npm run build
# Drag and drop the /dist folder on netlify.com, or connect via GitHub
```

Make sure to add your environment variables in the platform's dashboard before deploying.

---

## 🙋 About

**Madhav Bondhare**  
Final-year BCA Computer Science student at MGM's College, Nanded (CGPA: 9.42)  
Full-Stack Developer — React, Node.js, Express, MySQL

- 🌐 GitHub: [github.com/Madhav-87](https://github.com/Madhav-87)
- 💼 LinkedIn: [linkedin.com/in/madhav-bondhare](https://www.linkedin.com/in/madhav-bondhare/)

---
