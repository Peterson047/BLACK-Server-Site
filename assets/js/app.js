// BLACK Dedicated Server Portal - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    initTomlGenerator();
    initCommandSearch();
    initTabSwitchers();
    initCopyButtons();
});

// Interactive server.toml Generator
function initTomlGenerator() {
    const nameInput = document.getElementById('cfg-name');
    const playersInput = document.getElementById('cfg-players');
    const playersVal = document.getElementById('cfg-players-val');
    const passwordInput = document.getElementById('cfg-password');
    const fragsInput = document.getElementById('cfg-frags');
    const timeInput = document.getElementById('cfg-time');
    const grenadesInput = document.getElementById('cfg-grenades');
    const motdInput = document.getElementById('cfg-motd');
    const bansInput = document.getElementById('cfg-bans');
    const previewArea = document.getElementById('toml-preview');

    if (!previewArea) return;

    function updatePreview() {
        const name = nameInput.value.trim() || "BLACK Dedicated";
        const players = playersInput.value;
        const password = passwordInput.value.trim();
        const frags = fragsInput.value || 20;
        const time = timeInput.value || 10;
        const grenades = grenadesInput.value || 1;
        const bans = bansInput.value.trim() || "bans.txt";

        if (playersVal) playersVal.textContent = players;

        // Parse MOTD lines
        const motdLines = motdInput.value.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        let toml = `# BLACK Dedicated Server Configuration\n`;
        toml += `# File: server/server.toml\n\n`;
        toml += `# Server Name in browser and join notifications\n`;
        toml += `name = "${name}"\n\n`;
        toml += `# Player slots (1 to 7 - host never takes a slot)\n`;
        toml += `max_players = ${players}\n\n`;
        toml += `# Server Password (empty = public join)\n`;
        toml += `password = "${password}"\n\n`;
        toml += `# Match Rules\n`;
        toml += `frag_limit = ${frags}\n`;
        toml += `time_limit = ${time}   # in minutes\n`;
        toml += `grenades = ${grenades}     # starting tactical grenades\n\n`;
        toml += `# Message of the Day (shown when players join)\n`;
        toml += `motd = [\n`;
        motdLines.forEach(line => {
            toml += `    "${line.replace(/"/g, '\\"')}",\n`;
        });
        toml += `]\n\n`;
        toml += `# Banned addresses relative to this file\n`;
        toml += `bans_file = "${bans}"\n`;

        previewArea.textContent = toml;
    }

    const inputs = [nameInput, playersInput, passwordInput, fragsInput, timeInput, grenadesInput, motdInput, bansInput];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', updatePreview);
        }
    });

    updatePreview();
}

// Copy to Clipboard with Visual Feedback
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('[data-copy-target]');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-copy-target');
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const textToCopy = targetEl.textContent || targetEl.innerText;
            navigator.clipboard.writeText(textToCopy.trim()).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = `<span style="color: #00e676;">✓ COPIED</span>`;
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy:", err);
            });
        });
    });

    // Special standalone IP copy button
    const copyIpBtn = document.getElementById('copy-ip-btn');
    if (copyIpBtn) {
        copyIpBtn.addEventListener('click', () => {
            const ip = copyIpBtn.getAttribute('data-ip') || '189.126.105.191:1508';
            navigator.clipboard.writeText(ip).then(() => {
                const orig = copyIpBtn.textContent;
                copyIpBtn.textContent = 'COPIED!';
                setTimeout(() => { copyIpBtn.textContent = orig; }, 2000);
            });
        });
    }
}

// Search and Filter Server Console Commands
function initCommandSearch() {
    const searchInput = document.getElementById('cmd-search');
    const tableRows = document.querySelectorAll('#cmd-table-body tr');

    if (!searchInput || !tableRows.length) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Category Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-filter');

            tableRows.forEach(row => {
                const tag = row.getAttribute('data-category');
                if (cat === 'all' || tag === cat) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// Tab Switching (Setup Guides)
function initTabSwitchers() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}
