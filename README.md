# Personal Portfolio – PhD Graduate Template

A clean, responsive, single-page portfolio website built with plain HTML, CSS, and JavaScript — no frameworks required. Designed for academics and researchers who want to showcase their work after completing a PhD.

## Features

- **Navigation** – sticky navbar with smooth scroll and mobile hamburger menu
- **Hero** – photo, title, tagline, and call-to-action buttons
- **About** – bio, education timeline, and skills
- **Research** – three thematic research cards
- **Publications** – journal, conference, and preprint entries with badge labels
- **Projects** – project cards with GitHub links and technology tags
- **CV** – downloadable PDF link and an inline timeline of experience, teaching, and awards
- **Contact** – social links and a contact form (powered by [Formspree](https://formspree.io) by default)
- **Fade-in animations** via IntersectionObserver
- **Fully responsive** (works on mobile, tablet, and desktop)

## Getting Started

1. **Fork or clone** this repository.
2. **Edit `index.html`** – replace every `[placeholder]` with your own information.
3. **Add your photo** – save it as `assets/profile.jpg` (or update the `src` attribute in the `<img>` tag). If the file is missing, a 👤 emoji is shown automatically.
4. **Add your CV** – save the PDF as `assets/cv.pdf`.
5. **Set up the contact form** (optional):
   - Create a free account at [formspree.io](https://formspree.io).
   - Replace `YOUR_FORM_ID` in the `<form action="…">` attribute with your real form endpoint.
6. **Publish via GitHub Pages**:
   - Go to *Settings → Pages* in your repository.
   - Set the source to the `main` branch, root folder.
   - Your site will be live at `https://<username>.github.io`.

## Customisation

| What | Where |
|------|-------|
| Colour scheme | CSS custom properties at the top of `style.css` (`:root { … }`) |
| Fonts | Google Fonts `<link>` in `<head>` of `index.html` + `--font-body` / `--font-serif` in `style.css` |
| Sections | Add/remove `<section>` blocks in `index.html` and the matching `<li>` in the navbar |
| Publications | Duplicate a `.pub-item` block and update the `.pub-badge` class (`journal` / `conference` / `preprint`) |
| Projects | Duplicate a `.project-card` block |

## File Structure

```
.
├── index.html      # Main page
├── style.css       # All styles
├── script.js       # Smooth scroll, mobile nav, fade-in animations
├── assets/
│   ├── profile.jpg # Your profile photo (add this)
│   └── cv.pdf      # Your CV (add this)
└── README.md
```

## License

This template is released under the [MIT License](LICENSE). Feel free to use, modify, and redistribute it.