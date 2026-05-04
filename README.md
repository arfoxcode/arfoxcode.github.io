# Arfoxcode GitHub Page

Halaman GitHub Pages sederhana untuk `arfoxcode`.

## Struktur

```text
.
├── index.html
├── style.css
├── robots.txt
├── sitemap.xml
└── assets/
    ├── favicon.svg
    └── og-cover.svg
```

## Cara upload ke GitHub Pages

Buat repository dengan nama:

```bash
arfoxcode.github.io
```

Lalu upload semua file ini ke repository tersebut.

## Command upload dari Termux / Linux

```bash
cd arfoxcode-github-page

git init
git branch -M main
git add .
git commit -m "Initial GitHub Pages site"

git remote add origin https://github.com/arfoxcode/arfoxcode.github.io.git
git push -u origin main
```

Setelah itu buka:

```text
https://arfoxcode.github.io/
```

Kalau belum muncul, cek:

```text
Repository > Settings > Pages > Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /root
```

## Catatan SEO

File ini sudah berisi:

- Title dan meta description
- Meta keywords
- Open Graph untuk preview saat dibagikan
- Twitter card
- Canonical URL
- JSON-LD schema
- robots.txt
- sitemap.xml
