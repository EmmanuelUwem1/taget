# Taget Website
![logo-white](https://github.com/user-attachments/assets/a58c78d7-2967-421c-b3de-51c92c068065)

> **Set Goals, Learn, and Grow in the Web3 Ecosystem**  

Taget is a **community-driven Web3 platform** built to onboard, educate, and empower individuals in **Decentralized Autonomous Organizations (DAOs)**. It provides a seamless experience through **React, Vite, Framer Motion, React Router DOM, and Tailwind CSS**, ensuring **high performance, smooth animations, and dynamic routing**.

## 📌 Features
- ⚡ **Built with React + Vite** for fast development and optimized performance  
- 🎭 **Framer Motion animations** for smooth transitions and interactive UI elements  
- 🔗 **React Router DOM** for efficient client-side navigation  
- 🎨 **Tailwind CSS** for modern, responsive styling  
- 📅 **Dynamic page rendering** for events and community interactions  
- 🏗 **Smooth scrolling & automatic scroll-to-section functionality**  
- 🔍 **SEO-friendly meta tags and optimized loading**  

## ⚡ Technology Stack
| **Technology**           | **Usage**                                    |
|--------------------------|----------------------------------------------|
| **React**                | Component-based UI development               |
| **Vite**                 | Fast bundling & optimized HMR                |
| **Framer Motion**        | Smooth animations & page transitions         |
| **React Router DOM**     | Client-side navigation & dynamic routing     |
| **Tailwind CSS**         | Utility-first styling for responsiveness     |
| **TypeScript**           | Type safety & better maintainability         |
| **Vercel**       | Deployment platform                          |

## Project Structure 

/taget-website
 ├── src/
 │   ├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
 │   ├── pages/              # Page views (Home, Events, About, Contact, etc.)
 │   ├── data/               # Static data files (events, community info, etc.)
 │   ├── assets/             # Images, logos, icons
 │   ├── styles/             # Tailwind CSS styles
 │   ├── App.tsx             # Main App component with routes
 │   ├── main.tsx            # Entry point of the application
 │   ├── vite.config.ts      # Vite configuration
 │   ├── package.json        # Dependencies & scripts
 │   ├── README.md           # Documentation


## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/taget-website.git
cd taget-website


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
