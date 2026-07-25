# Ay 5edma (أي خدمة) — Home Services Booking Website

A multi-page website for browsing and booking home services (cleaning, electrical, maintenance, moving, plumbing, and furniture assembly), with a full multi-step booking flow and a confirmation page.

---

## 🚀 Live Demo

> _Add your deployed Vercel link here after deployment, e.g._
> **https://ay-5edma.vercel.app**

## 📦 Repository

> _Add your GitHub repository link here, e.g._
> **https://github.com/your-username/ay-5edma**

## 🎥 Preview

> _Add a link to your 1–3 minute preview video here (YouTube/Drive/Loom), or attach screenshots in a `/preview` folder and reference them below._

---

## 🧰 Tech Stack

- **HTML5** — semantic markup, multi-page structure
- **CSS3** — custom styling (`style.css`, `booking.css`)
- **JavaScript (Vanilla)** — no framework; each page is powered by its own script
- **Bootstrap 5.3** — layout grid, forms, navbar (via CDN)
- **Font Awesome 6.7** — icons (via CDN)
- **Google Fonts (Poppins)** — typography (via CDN)

This is a **static front-end project** — no backend or database. Booking data is temporarily stored in the browser's `localStorage` between the booking form and the confirmation page.

---

## ✨ Features

- Home page with hero section, service categories, and testimonials
- Category listing pages (Cleaning, Electrical, Maintenance, Moving, Plumbing, Furniture) with **search** and **sort** (price / rating)
- Service detail pages with full descriptions, what's included, and related services
- A unified **4-step booking flow**:
  1. Choose date
  2. Choose time
  3. Enter name, phone, and address
  4. Review and confirm
- Live booking summary card showing the selected service's image, price, rating, duration, and availability
- Form validation with toast notifications at every step
- Booking confirmation page with a generated booking ID and full order summary
- Fully responsive layout (desktop, tablet, mobile)

---

## 📁 Project Structure

```
Ay 5edma WebSite/
├── index.html                    # Home page
├── services.html                 # All services (cleaning)
├── service.js
├── service-details.html          # Cleaning service details
├── details.js
│
├── electrical.html / electrical.js
├── electrical-details.html / electrical-details.js
│
├── maintenance.html / maintenance.js
├── maintenance-details.html / maintenance-details.js
│
├── moving.html / moving.js
├── moving-details.html / moving-details.js
│
├── plumbing.html / plumbing.js
├── plumbing-details.html / plumbing-details.js
│
├── furniture.html / furniture.js
├── furniture-details.html / furniture-details.js
│
├── booking.html                  # 4-step booking flow
├── booking.js
├── booking.css
├── booking-success.html          # Confirmation page
├── booking-success.js
│
├── services-data.js              # Shared services data used by booking.js
├── style.css                     # Global styles
├── main.js
└── img/                          # All images
```

---

## ▶️ Running Locally

This is a static site — no build step or dependencies required.

**Option 1 — Open directly**
Double-click `index.html` to open it in your browser.

**Option 2 — Local server (recommended, avoids relative-path issues)**
```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve .
```
Then visit `http://localhost:8000`.

---

## 🔗 How the Booking Flow Is Linked

Every "Book Now" button across the site links to:
```
booking.html?category=<category>&id=<serviceId>
```
`booking.js` reads these two parameters, looks up the matching service in `services-data.js`, and populates the booking summary card and review step automatically. On confirmation, the full booking (service, date, time, and customer details) is saved to `localStorage` and shown on `booking-success.html`.

---

## 📤 Deliverables Checklist (for submission email)

- [ ] GitHub Repository link
- [ ] Live Demo link (Vercel preferred)
- [ ] Preview video (1–3 min) or screenshots
- [ ] This updated README

---

## 👤 Author

Ay 5edma — Sohag, Egypt
📞 +20 1557461609 · ✉️ support@ay5edma.com
