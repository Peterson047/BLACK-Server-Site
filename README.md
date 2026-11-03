# BLACK Dedicated Server - Portal & Documentation

A dedicated tactical website and documentation portal for the **BLACK Multiplayer Dedicated Server** (Linux / Ubuntu 24.04).

## Features
- **Official Live Server Card:** Shows the active VPS host (`black-mp.vps-kinghost.net:1508`) with 1-click IP copy.
- **Interactive `server.toml` Visual Configurator:** Real-time form with sliders, MOTD editor, and copyable TOML output.
- **Admin Console Command Reference (`cmd.sh`):** Interactive filterable table of runtime server commands (`status`, `restart`, `kick`, `ban`, `say`, etc.).
- **Step-by-Step Deployment Guide:** Dedicated tabs for Ubuntu 24.04 VPS, WSL2 Local LAN, and Systemd Service.
- **Player Connection Guide:** Step-by-step connection guide for the Windows client and in-game tactical keybind cheat sheet.
- **Zero-Dependency Architecture:** Pure HTML5, modern vanilla CSS with tactical military HUD styling, and responsive JavaScript.

## How to Preview Locally
Simply double-click `index.html` to open in any web browser, or launch a quick local static server:

```bash
# Python
python -m http.server 8080

# Or Node.js
npx serve .
```

Open `http://localhost:8080`.

## How to Host
1. **GitHub Pages:** Push this repository to GitHub and enable GitHub Pages in Settings -> Pages -> Deploy from branch `main` / root.
2. **VPS (KingHost / Nginx / Caddy):** Copy this folder to `/var/www/black-server` and point a domain or subdomain (e.g. `server.black-mp...`) to it.
3. **Vercel / Netlify:** Import the repository for instant global CDN hosting.
