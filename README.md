# 🍸 Shaker & Soul — Craft Cocktail Catalogue

> *A curated catalogue of the world's most celebrated craft cocktails.*

[[View on Vercel](https://shaker-soul.vercel.app/)]

---

## 📖 Theme

**Shaker & Soul** is a visual catalogue dedicated to the craft cocktail world. The project showcases a curated selection of 10+ iconic cocktails from around the globe — from timeless classics like the Negroni Sbagliato to modern cult favourites like the Penicillin and the Jungle Bird.

Each card presents a cocktail with its origin, glassware, alcohol strength, rating, and a short editorial description, giving the catalogue an authentic bar-guide feel.

---

## 🎨 Design

The visual identity is built around a **speakeasy / luxury bar** aesthetic — dark, atmospheric, and refined.

**Colour palette** — Deep burgundy and near-black backgrounds (`#0f0508`, `#160a0f`) are paired with a warm gold accent (`#e5bc6d`, `#bc8f3f`) inspired by aged spirits and candlelight. A subtle dot-grid texture overlays the background to add depth without noise.

**Typography** — Two Google Fonts define the character of the project:
- `Playfair Display` (serif, display) — used for headings and the hero title, giving a classic editorial tone.
- `Lora` (serif, body) — used for all body text, badges, and UI labels, maintaining a warm and readable feel throughout.

**Cards** — Each cocktail card features a high-quality photograph hosted on Cloudinary, a category badge, strength indicator (Low / Medium / High), origin location, glassware type, year, and star rating. Cards have a subtle lift-and-glow hover effect.

**Filters** — Category filter buttons (All / Sour / Stirred / Aperitivo / Tiki) allow instant filtering of the catalogue without page reload.

**No CSS inline** — all styles are defined in `style.css` using custom properties (CSS variables) and class-based rules only.

---

## 📸 Screenshots

### Hero 
<img width="1875" height="708" alt="image" src="https://github.com/user-attachments/assets/fa48cb41-396d-4e06-b86f-736b248e57f2" />



### Cocktail Cards — Row 1
<img width="1833" height="850" alt="image" src="https://github.com/user-attachments/assets/f9e1a33d-644f-4f10-84a4-11b440774977" />


### Cocktail Cards — Row 2
<img width="1792" height="847" alt="image" src="https://github.com/user-attachments/assets/eafeca7a-d21c-4dd7-b582-5a5e690c6271" />


### Cocktail Cards — Row 3
<img width="1818" height="859" alt="image" src="https://github.com/user-attachments/assets/bffee547-4eef-4bb6-bc72-24b5b5a4ae67" />


### Cocktail Cards — Row 4
<img width="1785" height="867" alt="image" src="https://github.com/user-attachments/assets/f9ed5809-e3fe-4a6f-9173-c8a0115543c9" />


### Footer
<img width="1861" height="377" alt="image" src="https://github.com/user-attachments/assets/a12aa2ac-805e-4032-a28a-c7035dd06ccf" />


---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling (variables, gradients, transitions) |
| JavaScript (ES6+) | Dynamic card rendering, filter logic |
| Bootstrap 5.3 | Card layout and responsive grid |
| Bootstrap Icons | UI icons (location, glassware) |
| JSON Server 0.17.4 | Mock REST API serving cocktail data |
| Cloudinary | Image hosting |
| Google Fonts | Typography (Playfair Display + Lora) |

---

## ▶️ How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

### Steps

**1. Clone the repository**
```bash
git clone [https://github.com/your-username/shaker-and-soul.git](https://github.com/ruizdelavegaalba-png/shaker-soul.git)
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the JSON Server**
```bash
json-server db.json --port 3000
```

The API will be available at `http://localhost:3000/items`

**4. Open the project**

Open `index.html` with **Live Server** in VS Code, or simply open the file in your browser.

> ⚠️ **Note:** The JSON Server must be running locally for the cards to appear. Vercel only hosts the static frontend — the data layer runs on your machine during development.

---

## 📁 Project Structure

```
shaker-and-soul/
├── index.html       # Main HTML structure
├── style.css        # All custom styles (no inline CSS)
├── app.js           # Fetch logic, card rendering, filter functionality
├── db.json          # Cocktail data (served by JSON Server)
└── package.json     # Project config and dependencies
```

---

## 👩‍💻 Author

**Alba Ruiz de la Vega**  
Grado Superior en Desarrollo de Aplicaciones Web (DAW) — Sevilla, 2026
