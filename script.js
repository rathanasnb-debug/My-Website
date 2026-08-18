document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle && navLinks && navActions) {
        menuToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navActions.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navActions.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '82px';
            navLinks.style.left = '16px';
            navLinks.style.right = '16px';
            navLinks.style.background = 'rgba(255,255,255,0.9)';
            navLinks.style.border = '1px solid rgba(23,23,23,0.08)';
            navLinks.style.borderRadius = '18px';
            navLinks.style.padding = '18px';
            navLinks.style.boxShadow = '0 18px 38px rgba(17,17,17,0.08)';
            navActions.style.position = 'absolute';
            navActions.style.top = 'calc(82px + 180px)';
            navActions.style.left = '16px';
            navActions.style.right = '16px';
            navActions.style.background = 'rgba(255,255,255,0.9)';
            navActions.style.border = '1px solid rgba(23,23,23,0.08)';
            navActions.style.borderRadius = '18px';
            navActions.style.padding = '14px 18px';
            navActions.style.boxShadow = '0 18px 38px rgba(17,17,17,0.08)';
        });
    }

    document.querySelector('.newsletter')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const button = event.currentTarget.querySelector('button');
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Joined!';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                event.currentTarget.reset();
            }, 1600);
        }
    });
});
