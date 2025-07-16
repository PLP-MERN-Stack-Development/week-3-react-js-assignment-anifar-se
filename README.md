# 📋 PLP Task Manager App

A responsive and modern task manager built with **React**, **Vite**, and **Tailwind CSS**. This application allows users to manage tasks efficiently and explore posts from a public API. It showcases component architecture, hooks, state management, API integration, and light/dark theming.

---

## 🚀 Features

- ✅ Add, toggle, filter, and delete tasks
- 💾 LocalStorage persistence using a custom hook
- 🌗 Light/dark theme switcher via context
- 🔎 Search and display posts from JSONPlaceholder API
- 📱 Fully responsive across mobile, tablet, and desktop
- 🎨 Styled with Tailwind CSS and reusable UI components

---

## 🏗️ Technologies Used

| Technology      | Purpose                        |
|----------------|---------------------------------|
| React           | Frontend framework              |
| Vite            | Development and bundling tool   |
| Tailwind CSS    | Utility-first styling           |
| React Router    | Page routing                    |
| JSONPlaceholder | External API integration        |

---

## 📁 Folder Structure

src/ ├── components/ # Reusable UI components ├── context/ # Theme context provider ├── pages/ # Home, Tasks, and Posts pages ├── utils/ # Custom hooks (useLocalStorage) ├── App.jsx # Main routing logic ├── main.jsx # App entry point └── index.css # Tailwind styles

---

## 🧪 Screenshots

> Make sure to add actual screenshots in your repository under a `screenshots/` folder.

| Task View | API View |
|-----------|----------|
| ![Tasks](./screenshots/tasks.png) | ![Posts](./screenshots/posts.png) |

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js v18 or higher
- GitHub account
- Vercel account for deployment

### Installation

```bash
git clone https://github.com/your-username/plp-task-manager.git
cd plp-task-manager
npm install
npm run dev

Visit http://localhost:5173 to view the app locally.
Deployment
This app is live at: 👉 https://your-vercel-url.vercel.app

You can deploy via Vercel:

Sign in at vercel.com

Import your GitHub repo

Select Vite as the framework

Use npm run build and dist/ as output directory

Deploy and grab the link!

📖 Assignment Criteria
✅ Completed tasks include:

Full React component architecture

State and context management with hooks

External API integration with loading/error states

Theming and responsiveness via Tailwind CSS

GitHub-hosted code with frequent commits

README with setup, screenshots, and deployment

👨‍🎓 Author
Anifar Mariba Student @ Power Learn Project GitHub: @anifar-se


