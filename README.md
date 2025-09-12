# Personal Website

[![Built with Eleventy](https://img.shields.io/badge/Built%20with-Eleventy-1D4D4F?logo=eleventy&logoColor=white&style=for-the-badge)](https://www.11ty.dev)

### Project Structure

The main directories are:

*   `_includes`: Nunjucks templates for the base layout, header, and footer.
*   `_site`: The output directory for the generated site.
*   `assets`: Static assets.
*   `posts`: Blog posts in Markdown.
*   `styles`: CSS stylesheets.
*   `js`: Java script code for interactivity and experimental chatbot.

### Directory Tree

```
.
├── README.md
├── _includes
│   ├── about.html
│   ├── base.njk
│   ├── cv.html
│   ├── footer.html
│   └── publications.html
├── assets
│   ├── CV.pdf
│   ├── icon.ico
│   └── pic.png
├── blog.njk
├── index.njk
├── js
│   ├── chat-toggle.js
│   ├── llamachatbot.js
│   └── theme-toggle.js
├── package-lock.json
├── package.json
├── posts
│   ├── hello.md
│   └── ...
└── styles
    └── style.css
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and npm installed on your machine.

## Deployment

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy-pages.yml`.

[This very nice post](https://www.dawidsblog.com/posts/tutorial_11ty_github_pages/) explains how to deploy 11ty projects to GitHub pages.
