# Gatsby Hands-On POC

This project is part of the **Gatsby Hands-On Tasks for Interns**.  
It demonstrates key Gatsby concepts such as pages, navigation, Markdown blogs, GraphQL queries, and image optimization.

---

## Project Overview

**Gatsby** is a React-based open-source framework for creating fast, secure, and modern websites.  
This POC project showcases how to build a simple blog using static site generation, Markdown content, and Gatsby plugins.

---

## Tech Stack

- **Framework:** Gatsby (React)
- **Language:** JavaScript / JSX
- **Styling:** CSS Modules
- **Data Source:** Markdown files (`.md`)
- **GraphQL:** For content querying
- **Image Optimization:** `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`
- **Environment:** WSL (Ubuntu on Windows)  
  > Worked entirely in **WSL Ubuntu** to keep the personal Windows system storage safe and isolated from development dependencies.

---

## Project Structure

gatsby-project/
│
├── content/ # Markdown blog posts
│ ├── first-post.md
│ └── second-post.md
├── Image/
├── src/
│ ├── components/
│ │ ├── layout.js
│ │ ├── header.js
│ │ └── seo.js
│ ├── pages/
│ │ ├── index.js
│ │ ├── about.js
│ │ ├── contact.js
│ │ └── blog.js
│ └── templates/
│ └── blog-post.js
│
├── gatsby-config.js
├── gatsby-node.js
└── package.json

