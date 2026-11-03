// BLACK Multiplayer - Client Portal Scripts

document.addEventListener('DOMContentLoaded', () => {
    initCopyButtons();
    initLightbox();
    initFaqAccordion();
});

// ==========================================================================
// 1. Copy to Clipboard Handlers
// ==========================================================================
function initCopyButtons() {
    // Copy IP button
    const copyIpBtn = document.getElementById('copy-ip-btn');
    if (copyIpBtn) {
        copyIpBtn.addEventListener('click', () => {
            const ip = copyIpBtn.getAttribute('data-ip') || '189.126.105.191:1508';
            copyTextWithFeedback(ip, copyIpBtn, 'IP COPIADO!');
        });
    }

    // Copy Favorites config text
    const copyFavBtn = document.getElementById('copy-fav-btn');
    if (copyFavBtn) {
        copyFavBtn.addEventListener('click', () => {
            const favContent = copyFavBtn.getAttribute('data-clipboard') || "TDM-FAVORITES 1\n189.126.105.191:1508";
            copyTextWithFeedback(favContent, copyFavBtn, 'CONFIG COPIADA!');
        });
    }
}

function copyTextWithFeedback(text, buttonElement, successText) {
    navigator.clipboard.writeText(text).then(() => {
        const orig = buttonElement.textContent;
        buttonElement.textContent = successText;
        buttonElement.style.background = 'var(--green)';
        buttonElement.style.color = '#000';
        setTimeout(() => {
            buttonElement.textContent = orig;
            buttonElement.style.background = '';
            buttonElement.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Falha ao copiar:', err);
    });
}

// ==========================================================================
// 2. Lightbox Modal for Screenshots
// ==========================================================================
function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const backdrop = modal ? modal.querySelector('.lightbox-backdrop') : null;

    if (!modal || !modalImg) return;

    // Open lightbox when clicking any screenshot item
    const screenItems = document.querySelectorAll('.screen-item');
    screenItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullSrc = item.getAttribute('data-full') || item.querySelector('img')?.src;
            const caption = item.getAttribute('data-caption') || item.querySelector('.screen-caption')?.textContent || '';

            if (fullSrc) {
                modalImg.src = fullSrc;
                modalCaption.textContent = caption;
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // prevent scrolling while viewing
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        modalImg.src = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

// ==========================================================================
// 3. FAQ Accordion
// ==========================================================================
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.closest('.faq-item');
            if (!faqItem) return;

            const wasActive = faqItem.classList.contains('active');

            // Close other items
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== faqItem) {
                    activeItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (wasActive) {
                faqItem.classList.remove('active');
            } else {
                faqItem.classList.add('active');
            }
        });
    });
}
