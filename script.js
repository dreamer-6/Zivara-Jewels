// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== NAVBAR LINK ACTIVE STATE =====
const updateActiveLink = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .links');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
};

updateActiveLink();


  document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const navLinks = document.getElementById("navLinks");

  // Open the side menu
  openBtn.addEventListener("click", () => {
    navLinks.classList.add("show-menu");
  });

  // Close the side menu
  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
  });

  // Optional: Close menu when a link is clicked
  const links = document.querySelectorAll(".links");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show-menu");
    });
  });
});


// ===== INTERSECTION OBSERVER FOR LAZY ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'fadeUp 0.8s ease forwards';
    }
  });
}, observerOptions);

// Observe signature cards and edit cards
document.querySelectorAll('.signature-card, .edit-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===== SMOOTH IMAGE LOADING =====
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });

  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.style.opacity = '0.95';
  }
});

// ===== CART AND WISHLIST ANIMATIONS =====
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== NEWSLETTER FORM HANDLING =====
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]');
    const btn = newsletterForm.querySelector('button');
    const originalText = btn.textContent;

    // Simple validation
    if (!email.value.includes('@')) {
      email.style.borderColor = '#d32f2f';
      setTimeout(() => {
        email.style.borderColor = '';
      }, 2000);
      return;
    }

    // Success state
    btn.textContent = '✓ Joined!';
    btn.style.background = 'var(--accent-hover)';
    email.value = '';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  });
}

// ===== SMOOTH PARALLAX EFFECT (OPTIONAL) =====
/* const parallaxElements = document.querySelectorAll('.hero-bg, .model-box img');

window.addEventListener('scroll', () => {
  parallaxElements.forEach(el => {
    const scrollPosition = window.pageYOffset;
    const elementOffset = el.parentElement.offsetTop;

    if (scrollPosition < elementOffset + 800) {
      el.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
  });
}, { passive: true }); */

// ===== PRODUCT CARD TILT EFFECT =====
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.animation = 'fadeIn 0.6s ease forwards';
});

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any modals if needed
    console.log('Escape pressed');
  }
});

// ===== CONSOLE EASTER EGG =====
console.log('%c🌟 Welcome to ZIVARA Jewels 🌟', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cCrafting elegance since 1994', 'font-size: 14px; color: #8b8076; font-style: italic;');