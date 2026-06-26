# E-Comm-LinkCu

A modern, responsive **fashion e-commerce website** built with HTML and CSS. The project showcases a semi-formal clothing store with separate collections for men and women, product listings, and essential storefront pages such as About, Contact, and Login.

![Hero Banner](./assets/images/banner/hero.png)

---

## Live Demo

Open `index.html` in your browser, or serve the project locally with any static file server (see [Getting Started](#getting-started)).

---

## Features

- **Responsive layout** — Mobile-friendly navigation with a hamburger menu
- **Home page** — Hero section, feature highlights, featured products, promotional banners, and newsletter signup
- **Shop** — Category landing page with Men's and Women's collections
- **Product grids** — Dedicated pages for men's and women's products with pricing (EGP)
- **About page** — Brand story, team section, and company values
- **Contact page** — Contact form and embedded Google Maps location
- **Login page** — User login UI with remember-me and register links
- **Consistent branding** — Shared header, footer, and color theme across pages

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with featured products and promotions |
| Shop | `shop.html` | Men's & Women's collection categories |
| Men's Shop | `shop-men.html` | Men's product catalog |
| Women's Shop | `shop-women.html` | Women's product catalog |
| About | `about.html` | Brand story and team |
| Contact | `contact-us.html` | Contact form and location map |
| Login | `login.html` | User authentication UI |

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, and responsive design |
| [Font Awesome 6](https://fontawesome.com/) | Icons (navigation, social links, ratings) |
| [Boxicons](https://boxicons.com/) | Login page icons |
| Google Maps Embed | Store location on contact page |

---

## Project Structure

```
E-Comm-LinkCu/
├── index.html              # Home page
├── shop.html               # Shop categories
├── shop-men.html           # Men's collection
├── shop-women.html         # Women's collection
├── about.html              # About us
├── contact-us.html         # Contact form
├── login.html              # Login page
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles (home)
│   │   ├── about.css       # About page styles
│   │   ├── contact.css     # Contact page styles
│   │   ├── mshop.css       # Men's shop styles
│   │   ├── pstyle.css      # Shop & women's styles
│   │   └── pstyle2.css     # Login page styles
│   └── images/
│       ├── banner/         # Hero & promotional banners
│       ├── products/       # Featured product images
│       ├── men-products/   # Men's collection images
│       ├── shop/           # Women's collection images
│       ├── features/       # Feature icons
│       ├── about/          # About page images
│       └── logo.png        # Site logo
└── README.md
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any local static server

### Run locally

**Option 1 — Open directly**

1. Clone the repository:
   ```bash
   git clone https://github.com/IMazen9/E-Comm-LinkCu.git
   cd E-Comm-LinkCu
   ```
2. Open `index.html` in your browser.

**Option 2 — Use a local server (recommended)**

Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using VS Code Live Server:
1. Open the project folder in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## Design

The site uses a warm, fashion-forward palette defined in CSS custom properties:

- **Primary accent:** `#810B38`
- **Background tones:** `#F1E2D1`, `#DCC3AA`

Typography uses system UI fonts (`Segoe UI`, Tahoma, Geneva, Verdana, sans-serif) for fast loading and a clean look.

---

## Contact

**Location:** Maadi, Cairo, Egypt — Building 12, Road 9, Near Maadi Metro Station  
**Phone:** 01116447739  
**Email:** MA-Store23@gmail.com

---

## License

This project is open source and available for learning and portfolio use. Feel free to fork and customize it for your own e-commerce front-end projects.

---

## Author

Developed as part of the **LinkCu** e-commerce initiative.

**Repository:** [github.com/IMazen9/E-Comm-LinkCu](https://github.com/IMazen9/E-Comm-LinkCu)
