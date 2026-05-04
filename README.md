# Arfoxcode GitHub Page

Simple bilingual GitHub Pages site for `arfoxcode`.

## Displayed Projects

- Notif Logs
- Novel Reader & Downloader

`Notif Forwarder` has been removed from this version.

## Languages

The page supports:

- Indonesian
- English

The visitor can switch language using the `ID / EN` button. The selected language is saved in the browser using `localStorage`.

## Structure

```text
.
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── assets/
    ├── favicon.svg
    └── og-cover.svg
```

## Upload to GitHub Pages

Create a repository named:

```bash
arfoxcode.github.io
```

Then upload all files into that repository.

## Upload commands from Termux / Linux

```bash
cd arfoxcode-github-page-v3-bilingual

git init
git branch -M main
git add .
git commit -m "Create bilingual Arfoxcode page"

git remote add origin https://github.com/arfoxcode/arfoxcode.github.io.git
git push -u origin main
```

If the repository already exists and the remote is already configured:

```bash
git add .
git commit -m "Update bilingual project page"
git push
```

Open:

```text
https://arfoxcode.github.io/
```

If it does not appear, check:

```text
Repository > Settings > Pages > Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /root
```

## SEO included

- Title and meta description
- Meta keywords
- Open Graph preview
- Twitter card
- Canonical URL
- JSON-LD schema
- robots.txt
- sitemap.xml
