tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                offblack: '#111111',
                offwhite: '#f4f0ec',
                vibrant: '#ff5c00'
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-offblack/95', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-white/10');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-offblack/95', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-white/10');
        }
    });

    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

tailwind.config.theme.extend.keyframes = {
    shimmer: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(200%)' }
    }
};
