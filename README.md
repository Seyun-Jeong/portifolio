# portifolio

Personal portfolio and blog — built with React + Vite.

## Structure

```
src/
  data/
    content.js      # identity, projects, publications, skills, philosophy
    posts.js        # blog posts
  components/       # Cover, Identity, Project, Publications, Skills, Philosophy
  pages/            # BlogIndex, BlogPost
  App.jsx           # routes: / and /blog
  main.jsx
```

## Routes

| Path | Page |
|---|---|
| `/` | Portfolio |
| `/blog` | Writing index |
| `/blog/:slug` | Individual post |

## Stack

- React 19
- Vite 8
- React Router v7

## Dev

```bash
nvm use 22
npm install
npm run dev
```

## Deploy

Deployed on Vercel. Every push to `main` triggers a redeploy.
