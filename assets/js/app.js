// ==========================================================================
// BLACK (2006) - DEDICATED SERVER OPS LOGIC & TACTICAL INTERACTION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initTacticalAudio();
    initTomlGenerator();
    initInteractiveCLI();
    initDossierTabs();
    initCopyButtons();
});

// Subtle Mechanical Click / Tactical Feedback via Web Audio API
let audioCtx = null;
let soundEnabled = true;

function initTacticalAudio() {
    const audioBtn = document.getElementById('sound-toggle');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        audioBtn.textContent = soundEnabled ? 'SFX: ON [AUDIO]' : 'SFX: MUTED';
        audioBtn.style.color = soundEnabled ? 'var(--amber-hot)' : 'var(--text-dim)';
        if (soundEnabled) playMechanicalClick(800, 0.04);
    });
}

function playMechanicalClick(freq = 600, duration = 0.03) {
    if (!soundEnabled) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + duration);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}

// --------------------------------------------------------------------------
// 1. INTERACTIVE CLI SIMULATOR (server/cmd.sh Emulator)
// --------------------------------------------------------------------------
function initInteractiveCLI() {
    const cliInput = document.getElementById('cli-input');
    const cliWindow = document.getElementById('cli-output');
    const pills = document.querySelectorAll('.cli-pill');
    if (!cliInput || !cliWindow) return;

    let serverState = {
        name: "BLACK Dedicated",
        port: 1508,
        match: 1,
        phase: "waiting",
        fragsBlackOps: 0,
        fragsSeventhWave: 0,
        timeLeft: "10:00",
        fragLimit: 20,
        password: "no",
        players: [
            { id: 1, name: "Jack_Kellar", team: "Black Ops", kills: 4, deaths: 1, ping: 24, ip: "187.61.216.117" },
            { id: 2, name: "Seventh_Operator", team: "Seventh Wave", kills: 1, deaths: 4, ping: 48, ip: "189.6.244.253" }
        ],
        bans: ["192.168.1.100  # speedhack, 2026-11-01 14:20 UTC"]
    };

    function appendOutput(text, isCommand = false, isError = false) {
        const line = document.createElement('div');
        line.className = 'cli-output-line';
        if (isCommand) {
            line.innerHTML = `<span style="color: var(--amber-hot); font-weight: 800;">qkeq@vps:~/BLACK-Coop$ server/cmd.sh ${escapeHtml(text)}</span>`;
        } else if (isError) {
            line.innerHTML = `<span style="color: var(--red-alert);">console: ${escapeHtml(text)}</span>`;
        } else {
            line.innerHTML = `<span style="color: #94a3b8;">console: </span><span style="color: #f3f4f6;">${escapeHtml(text)}</span>`;
        }
        cliWindow.appendChild(line);
        cliWindow.scrollTop = cliWindow.scrollHeight;
    }

    function processCommand(rawInput) {
        const input = rawInput.trim();
        if (!input) return;

        appendOutput(input, true);
        playMechanicalClick(950, 0.05);

        const parts = input.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(' ');

        switch(cmd) {
            case 'help':
                appendOutput("commands: status | say <text> | kick <id> | ban <id> | unban <ip> | bans | restart | fraglimit <n> | timelimit <minutes> | grenades <n> | maxplayers <n> | password <text or -> | reload | clear");
                break;

            case 'status':
                appendOutput(`status name="${serverState.name}" port=${serverState.port} match=${serverState.match} phase=${serverState.phase} score=${serverState.fragsBlackOps}:${serverState.fragsSeventhWave} (Black Ops:Seventh Wave) time_left=${serverState.timeLeft} frag_limit=${serverState.fragLimit} password=${serverState.password}`);
                serverState.players.forEach(p => {
                    appendOutput(`status player=${p.id} name="${p.name}" team=${p.team} kills=${p.kills} deaths=${p.deaths} ping=${p.ping} ip=${p.ip}`);
                });
                appendOutput(`status players=${serverState.players.length}/7`);
                break;

            case 'restart':
                serverState.match++;
                serverState.fragsBlackOps = 0;
                serverState.fragsSeventhWave = 0;
                serverState.phase = "countdown";
                appendOutput("match restart requested");
                appendOutput(`[BROADCAST 255]: The match was restarted by the server.`);
                setTimeout(() => {
                    serverState.phase = "playing";
                    appendOutput(`match id=${serverState.match} phase=playing live_at=NOW countdown=complete`);
                }, 1500);
                break;

            case 'say':
                if (!arg) {
                    appendOutput("say needs a text", false, true);
                } else {
                    appendOutput(`[SERVER BROADCAST]: ${arg}`);
                }
                break;

            case 'kick':
                const kickId = parseInt(arg, 10);
                const pIdx = serverState.players.findIndex(p => p.id === kickId);
                if (pIdx >= 0) {
                    const kicked = serverState.players.splice(pIdx, 1)[0];
                    appendOutput(`kicked ${kicked.id} (${kicked.name})`);
                    appendOutput(`[BROADCAST 255]: ${kicked.name} was kicked.`);
                } else {
                    appendOutput(`no player ${arg} (status lists them)`, false, true);
                }
                break;

            case 'ban':
                const banId = parseInt(arg, 10);
                const bIdx = serverState.players.findIndex(p => p.id === banId);
                if (bIdx >= 0) {
                    const banned = serverState.players.splice(bIdx, 1)[0];
                    serverState.bans.push(`${banned.ip}  # ${banned.name}, manual ban`);
                    appendOutput(`banned ${banned.id} (${banned.name}, ${banned.ip})`);
                    appendOutput(`[BROADCAST 255]: ${banned.name} was banned.`);
                } else {
                    appendOutput(`no player ${arg} (status lists them)`, false, true);
                }
                break;

            case 'bans':
                if (serverState.bans.length === 0) {
                    appendOutput("no bans");
                } else {
                    serverState.bans.forEach(b => appendOutput(`banned ${b}`));
                }
                break;

            case 'unban':
                if (!arg) {
                    appendOutput("unban needs an IP", false, true);
                } else {
                    const lenBefore = serverState.bans.length;
                    serverState.bans = serverState.bans.filter(b => !b.startsWith(arg));
                    if (serverState.bans.length < lenBefore) {
                        appendOutput(`unbanned ${arg}`);
                    } else {
                        appendOutput(`${arg} is not banned`, false, true);
                    }
                }
                break;

            case 'fraglimit':
                const fl = parseInt(arg, 10);
                if (fl >= 1 && fl <= 1000) {
                    serverState.fragLimit = fl;
                    appendOutput(`fraglimit=${fl} from the next match (restart applies it now)`);
                } else {
                    appendOutput("fraglimit needs a number (1-1000)", false, true);
                }
                break;

            case 'reload':
                appendOutput("re-reading server.toml configuration without restarting process");
                appendOutput("settings reloaded: rules, motd and bans refreshed");
                break;

            case 'clear':
                cliWindow.innerHTML = '';
                break;

            default:
                appendOutput(`unknown command '${cmd}'. Type 'help' for available directives.`, false, true);
                break;
        }
    }

    cliInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(cliInput.value);
            cliInput.value = '';
        }
    });

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const cmd = pill.getAttribute('data-cli-cmd');
            if (cmd) {
                processCommand(cmd);
            }
        });
    });
}

// --------------------------------------------------------------------------
// 2. TACTICAL server.toml GENERATOR & DOWNLOAD
// --------------------------------------------------------------------------
function initTomlGenerator() {
    const nameInput = document.getElementById('cfg-name');
    const playersSlider = document.getElementById('cfg-players');
    const playersDisplay = document.getElementById('cfg-players-val');
    const passInput = document.getElementById('cfg-password');
    const fragsInput = document.getElementById('cfg-frags');
    const timeInput = document.getElementById('cfg-time');
    const grenadesInput = document.getElementById('cfg-grenades');
    const motdInput = document.getElementById('cfg-motd');
    const bansInput = document.getElementById('cfg-bans');
    const tomlPreview = document.getElementById('toml-preview-content');
    const dlBtn = document.getElementById('dl-toml-btn');

    if (!tomlPreview) return;

    function renderToml() {
        const name = nameInput.value.trim() || "BLACK Dedicated";
        const players = playersSlider.value;
        const password = passInput.value.trim();
        const frags = fragsInput.value || 20;
        const time = timeInput.value || 10;
        const grenades = grenadesInput.value || 1;
        const bans = bansInput.value.trim() || "bans.txt";

        if (playersDisplay) playersDisplay.textContent = players;

        const motdLines = motdInput.value.split('\n')
            .map(l => l.trim())
            .filter(l => l.length > 0);

        let out = `# =============================================================================\n`;
        out += `# BLACK DEDICATED SERVER CONFIGURATION\n`;
        out += `# Criterion Games (2006) - Multiplayer Recomp\n`;
        out += `# File: server/server.toml\n`;
        out += `# =============================================================================\n\n`;
        out += `name = "${name}"\n`;
        out += `max_players = ${players}       # 1 to 7 (host arbiter slot 0 excluded)\n`;
        out += `password = "${password}"          # empty = public battlefield\n\n`;
        out += `# Match Operations\n`;
        out += `frag_limit = ${frags}        # score quota to claim victory\n`;
        out += `time_limit = ${time}        # duration in minutes\n`;
        out += `grenades = ${grenades}          # starting tactical grenades per life (0-9)\n\n`;
        out += `# Message of the Day (transmitted to HUD upon player join)\n`;
        out += `motd = [\n`;
        motdLines.forEach(l => {
            out += `    "${l.replace(/"/g, '\\"')}",\n`;
        });
        out += `]\n\n`;
        out += `# Persistent Banned Addresses (one IP per line)\n`;
        out += `bans_file = "${bans}"\n`;

        tomlPreview.textContent = out;
        playMechanicalClick(1100, 0.015);
    }

    [nameInput, playersSlider, passInput, fragsInput, timeInput, grenadesInput, motdInput, bansInput].forEach(el => {
        if (el) el.addEventListener('input', renderToml);
    });

    renderToml();

    if (dlBtn) {
        dlBtn.addEventListener('click', () => {
            const blob = new Blob([tomlPreview.textContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'server.toml';
            a.click();
            URL.revokeObjectURL(url);
            playMechanicalClick(1400, 0.08);
        });
    }
}

// --------------------------------------------------------------------------
// 3. DOSSIER TABS
// --------------------------------------------------------------------------
function initDossierTabs() {
    const tabs = document.querySelectorAll('.dossier-tab');
    const panes = document.querySelectorAll('.dossier-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-dossier');
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
            playMechanicalClick(750, 0.03);
        });
    });
}

// --------------------------------------------------------------------------
// 4. COPY BUTTONS WITH AUDIO FEEDBACK
// --------------------------------------------------------------------------
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('[data-copy-target]');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-copy-target');
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const text = targetEl.textContent || targetEl.innerText;
            navigator.clipboard.writeText(text.trim()).then(() => {
                const orig = btn.innerHTML;
                btn.innerHTML = `<span style="color: var(--green-radar);">✓ CONFIRMED</span>`;
                playMechanicalClick(1200, 0.05);
                setTimeout(() => { btn.innerHTML = orig; }, 2000);
            });
        });
    });

    const directCopyIp = document.getElementById('copy-ip-btn');
    if (directCopyIp) {
        directCopyIp.addEventListener('click', () => {
            const ip = directCopyIp.getAttribute('data-ip') || '189.126.105.191:1508';
            navigator.clipboard.writeText(ip).then(() => {
                const orig = directCopyIp.textContent;
                directCopyIp.textContent = 'COPIED TO CLIPBOARD';
                directCopyIp.style.background = 'var(--green-radar)';
                directCopyIp.style.color = '#000';
                playMechanicalClick(1300, 0.06);
                setTimeout(() => {
                    directCopyIp.textContent = orig;
                    directCopyIp.style.background = '';
                    directCopyIp.style.color = '';
                }, 2000);
            });
        });
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
