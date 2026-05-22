# 🍸 Shaker & Soul — Craft Cocktail Catalogue

> *A curated catalogue of the world's most celebrated craft cocktails.*

**Live demo:** [View on Vercel](https://your-vercel-url-here.vercel.app) <!-- Replace with your Vercel URL -->

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

### Hero & Filters
![Hero section showing the Shaker & Soul header with gold typography and category filter buttons](screenshot-hero.png)

### Cocktail Cards — Row 1
![Three cocktail cards: Negroni Sbagliato, Penicillin and Jungle Bird](screenshot-cards-1.png)

### Cocktail Cards — Row 2
![Three cocktail cards: Paper Plane, Naked & Famous and Toronto](screenshot-cards-2.png)

### Cocktail Cards — Row 3
![Three cocktail cards: Gimlet, Oaxacan Old Fashioned and Clover Club](screenshot-cards-3.png)

### Cocktail Cards — Row 4
![Three cocktail cards: Last Word, Bees Knees and Corpse Reviver #2](screenshot-cards-4.png)

### Footer
![Footer with the tagline Drink curious. Drink well.](screenshot-footer.png)

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
git clone https://github.com/your-username/shaker-and-soul.git
cd shaker-and-soul
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