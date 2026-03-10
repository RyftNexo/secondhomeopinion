document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 40);
    });

    // Mobile nav
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Waitlist form
    const form = document.getElementById('waitlistForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('firstName').value.trim();
            const email = document.getElementById('email').value.trim();
            const type = document.getElementById('buyerType').value;
            if (!name || !email || !type) return;

            form.innerHTML = `
                <div class="form-success">
                    <h3>You're on the list, ${name}.</h3>
                    <p>We'll be in touch when founding spots open. Check your inbox at <strong>${email}</strong>.</p>
                </div>
            `;
        });
    }
});