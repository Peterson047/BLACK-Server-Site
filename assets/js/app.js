// BLACK Multiplayer - Client Portal Scripts

document.addEventListener('DOMContentLoaded', () => {
    initCopyButtons();
});

// Copy to Clipboard with Feedback
function initCopyButtons() {
    const copyIpBtn = document.getElementById('copy-ip-btn');
    if (copyIpBtn) {
        copyIpBtn.addEventListener('click', () => {
            const ip = copyIpBtn.getAttribute('data-ip') || '189.126.105.191:1508';
            navigator.clipboard.writeText(ip).then(() => {
                const orig = copyIpBtn.textContent;
                copyIpBtn.textContent = 'IP COPIADO!';
                copyIpBtn.style.background = 'var(--green)';
                copyIpBtn.style.color = '#000';
                setTimeout(() => {
                    copyIpBtn.textContent = orig;
                    copyIpBtn.style.background = '';
                    copyIpBtn.style.color = '';
                }, 2000);
            });
        });
    }
}
