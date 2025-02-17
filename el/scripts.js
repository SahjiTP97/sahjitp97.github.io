document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuTab = document.getElementById('menuTab');
    const closeMenu = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        menuTab.style.transform = 'translateX(0)';
        body.classList.add('menu-open');
        menuOverlay.classList.add('show');
    });

    const closeMenuFunction = () => {
        menuTab.style.transform = 'translateX(-100%)';
        body.classList.remove('menu-open');
        menuOverlay.classList.remove('show');
    };

    menuOverlay.addEventListener('click', closeMenuFunction);

    closeMenu.addEventListener('click', closeMenuFunction);
});

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    const contactOptions = document.querySelectorAll('.contact-option');

    contactButton.addEventListener('click', () => {
        contactOptions.forEach(option => {
            if (option.classList.contains('show')) {
                option.classList.remove('show');
            } else {
                option.classList.add('show');
            }
        });
    });
});

// Intersection Observer for scroll trigger
  document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.pop-in-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.style.opacity = '1';
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    observer.observe(document.querySelector('#downloadSection'));
  });