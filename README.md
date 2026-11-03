# BLACK Dedicated Server - Portal & Player Hub (Next.js)

A high-performance tactical portal and player hub for the **BLACK Multiplayer Mod** (Criterion Games 2006 port to PC x86-64) and its official Linux dedicated server.

Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, and **TypeScript**.

---

## 🚀 Features

- **Live Server Card:** Official 24/7 dedicated server in Brazil (`189.126.105.191:1508` / `black-mp.vps-kinghost.net`) with 1-click IP copy.
- **Dica Pro (Favorites):** Integrated instructions and 1-click copy for `tdm-favorites.txt` to automatically pin the server in the client's F10 menu.
- **3-Step Setup Guide:** Clear steps for players (Alpha download, `Black.iso` in `assets\`, launch and connect).
- **Native Port & Specs Grid:** Highlights native C++ execution (no emulators), Vulkan 1.2+ rendering, 60+ FPS, and native controller/mouse support.
- **Interactive Screenshot Lightbox:** Real in-game screenshots with full-screen zoom, keyboard navigation (`Esc`), and high-res previews.
- **Tactical Controls Cheat-Sheet:** In-game HUD shortcuts cheat-sheet (`F10`, `TAB`, `B`, `T`, `U`, `V`, `G`, `F6`).
- **Interactive Player FAQ:** Instant accordion answering common setup and gameplay questions.
- **Server API Route (`/api/server`):** Built-in REST endpoint returning server host info, port, game mode, and client requirements.
- **Clan Hosting Guide:** Lean Linux setup commands for server administrators.

---

## 🛠️ Development & Build

### Requirements
- **Node.js** 18+ (tested on Node v24)
- **npm** 10+

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

---

## 🌐 Deployment Options

1. **Vercel (Recommended):**
   - Push to GitHub and import into Vercel for zero-config global edge hosting.
2. **VPS (Ubuntu / Linux) with PM2 or Systemd:**
   - Run `npm run build && npm run start` behind Nginx/Caddy reverse proxy.
3. **Static Export (Optional):**
   - Configure `output: 'export'` in `next.config.mjs` to deploy to GitHub Pages, Cloudflare Pages, or static Nginx.
