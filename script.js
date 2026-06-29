/* ============================================
   ALEJO ELECTRICAL SUPPLY — Main Script
   ============================================ */

// ---- Language Data ----
const translations = {
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navProfile: 'Company Profile',
    navContact: 'Contact Us',

    // Hero
    heroTitle1: 'Alejo',
    heroTitle2: 'Electrical Supply',
    heroTagline: 'Heater Fabrication • Electrical Solutions',
    heroDesc: 'Your trusted partner in quality electrical supplies and custom heater fabrication in Davao City.',
    heroBtnProfile: 'View Company Profile',
    heroBtnContact: 'Contact Us',
    scrollText: 'Scroll Down',

    // About
    aboutBadge: 'About Us',
    aboutTitle: 'Your Trusted <span class="accent">Electrical Partner</span> in Davao',
    aboutP1: 'Alejo Electrical Supply is a leading provider of quality electrical supplies and custom heater fabrication services located in Sitio Sta. Marina, Binugao, Toril, Davao City.',
    aboutP2: 'Under the leadership of proprietor Alejo M. Orbillo, we have built a reputation for reliability, craftsmanship, and dedication to customer satisfaction. We provide a wide range of electrical products and specialized heater fabrication services to meet your needs.',
    aboutYears: 'Years of',
    aboutExperience: 'Excellence',
    aboutH1: 'Quality Products',
    aboutH2: 'Expert Fabrication',
    aboutH3: 'Davao City Based',
    aboutH4: 'Customer Focused',

    // Services
    servicesBadge: 'Our Services',
    servicesTitle: 'What We Offer',
    servicesSubtitle: 'Comprehensive electrical supply solutions and custom heater fabrication services.',
    svc1Title: 'Heater Fabrication',
    svc1Desc: 'Custom-designed and fabricated heating elements for industrial, commercial, and residential applications.',
    svc2Title: 'Electrical Supplies',
    svc2Desc: 'Wide range of quality electrical products, wiring, switches, panels, and components.',
    svc3Title: 'Custom Solutions',
    svc3Desc: 'Tailored electrical solutions designed to meet your specific requirements and standards.',
    svc4Title: 'Installation & Repair',
    svc4Desc: 'Professional installation and repair services for all electrical and heating systems.',

    // Profile
    profileBadge: 'Company Profile',
    profileTitle: 'Learn More About Us',
    profileSubtitle: 'Browse through our company profile to learn about our products, services, and commitment to quality.',
    profileBtn: 'Open Company Profile',
    profileModalTitle: 'Company Profile — Alejo Electrical Supply',

    // Contact
    contactBadge: 'Get In Touch',
    contactTitle: 'Contact <span class="accent">Us</span>',
    contactDesc: 'Have questions or need a quote? Reach out to us through any of the channels below. We\'d love to hear from you!',
    contactProprietor: 'Proprietor',
    contactProprietorVal: 'Alejo M. Orbillo',
    contactAddress: 'Address',
    contactAddressVal: 'Sitio Sta. Marina, Binugao, Toril, Davao City',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactFb: 'Facebook',
    contactFbVal: 'Alejo Electrical Supply',
    mapTitle: 'Find Us',

    // Footer
    footerCopy: '© 2024 Alejo Electrical Supply. All Rights Reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  },
  fil: {
    // Navbar
    navHome: 'Home',
    navAbout: 'Tungkol',
    navServices: 'Serbisyo',
    navProfile: 'Profile ng Kumpanya',
    navContact: 'Makipag-ugnayan',

    // Hero
    heroTitle1: 'Alejo',
    heroTitle2: 'Electrical Supply',
    heroTagline: 'Heater Fabrication • Solusyong Elektrikal',
    heroDesc: 'Ang inyong mapagkakatiwalaang kasosyo sa de-kalidad na electrical supplies at custom heater fabrication sa Davao City.',
    heroBtnProfile: 'Tingnan ang Company Profile',
    heroBtnContact: 'Makipag-ugnayan',
    scrollText: 'Mag-scroll Pababa',

    // About
    aboutBadge: 'Tungkol sa Amin',
    aboutTitle: 'Ang Inyong Mapagkakatiwalaang <span class="accent">Kasosyo sa Elektrikal</span> sa Davao',
    aboutP1: 'Ang Alejo Electrical Supply ay isang nangungunang tagapagbigay ng de-kalidad na electrical supplies at custom heater fabrication services na matatagpuan sa Sitio Sta. Marina, Binugao, Toril, Davao City.',
    aboutP2: 'Sa pamumuno ni proprietor Alejo M. Orbillo, nagtatag kami ng reputasyon para sa pagiging maaasahan, husay sa paggawa, at dedikasyon sa kasiyahan ng customer. Nagbibigay kami ng malawak na hanay ng mga produktong elektrikal at espesyal na serbisyo sa heater fabrication.',
    aboutYears: 'Taon ng',
    aboutExperience: 'Kahusayan',
    aboutH1: 'De-kalidad na Produkto',
    aboutH2: 'Eksperto sa Fabrication',
    aboutH3: 'Base sa Davao City',
    aboutH4: 'Nakatuon sa Customer',

    // Services
    servicesBadge: 'Aming mga Serbisyo',
    servicesTitle: 'Ano ang Aming Inaalok',
    servicesSubtitle: 'Komprehensibong electrical supply solutions at custom heater fabrication services.',
    svc1Title: 'Heater Fabrication',
    svc1Desc: 'Custom-designed at fabricated heating elements para sa industrial, commercial, at residential na gamit.',
    svc2Title: 'Electrical Supplies',
    svc2Desc: 'Malawak na hanay ng de-kalidad na electrical products, wiring, switches, panels, at iba pang components.',
    svc3Title: 'Custom na Solusyon',
    svc3Desc: 'Mga solusyong elektrikal na idinisenyo ayon sa inyong partikular na pangangailangan at pamantayan.',
    svc4Title: 'Pag-install at Repair',
    svc4Desc: 'Propesyonal na installation at repair services para sa lahat ng electrical at heating systems.',

    // Profile
    profileBadge: 'Profile ng Kumpanya',
    profileTitle: 'Alamin Pa ang Tungkol sa Amin',
    profileSubtitle: 'Mag-browse sa aming company profile para malaman ang tungkol sa aming mga produkto, serbisyo, at dedikasyon sa kalidad.',
    profileBtn: 'Buksan ang Company Profile',
    profileModalTitle: 'Company Profile — Alejo Electrical Supply',

    // Contact
    contactBadge: 'Makipag-ugnayan',
    contactTitle: 'Makipag-ugnayan <span class="accent">sa Amin</span>',
    contactDesc: 'May mga katanungan o kailangan ng quotation? Makipag-ugnayan sa amin sa alinman sa mga channel sa ibaba. Nais naming marinig mula sa inyo!',
    contactProprietor: 'May-ari',
    contactProprietorVal: 'Alejo M. Orbillo',
    contactAddress: 'Address',
    contactAddressVal: 'Sitio Sta. Marina, Binugao, Toril, Davao City',
    contactPhone: 'Telepono',
    contactEmail: 'Email',
    contactFb: 'Facebook',
    contactFbVal: 'Alejo Electrical Supply',
    mapTitle: 'Hanapin Kami',

    // Footer
    footerCopy: '© 2024 Alejo Electrical Supply. Lahat ng Karapatan ay Nakalaan.',
    footerPrivacy: 'Patakaran sa Privacy',
    footerTerms: 'Mga Tuntunin ng Serbisyo',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('alejo-lang', lang);
}

// ---- Global Success Modal ----
window.showSuccessModal = function(message, redirectUrl = 'index.html') {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  
  const container = document.createElement('div');
  container.className = 'modal-container';
  container.style.textAlign = 'center';
  container.style.padding = '3rem 2rem';
  container.style.maxWidth = '400px';
  container.style.transform = 'translateY(0)';
  
  const icon = document.createElement('i');
  icon.className = 'fas fa-check-circle';
  icon.style.fontSize = '4rem';
  icon.style.color = '#4caf50';
  icon.style.marginBottom = '1.5rem';
  icon.style.display = 'block';
  
  const msg = document.createElement('h3');
  msg.style.color = 'var(--neutral-800)';
  msg.style.marginBottom = '1rem';
  msg.textContent = 'Success!';
  
  const submsg = document.createElement('p');
  submsg.style.color = 'var(--neutral-600)';
  submsg.textContent = message;
  
  container.appendChild(icon);
  container.appendChild(msg);
  container.appendChild(submsg);
  overlay.appendChild(container);
  document.body.appendChild(overlay);
  
  let isClosed = false;
  const closeAndRedirect = () => {
    if (isClosed) return;
    isClosed = true;
    overlay.classList.remove('open');
    setTimeout(() => {
      overlay.remove();
      window.location.href = redirectUrl;
    }, 300); // Wait for fade out
  };

  overlay.addEventListener('click', closeAndRedirect);
  setTimeout(closeAndRedirect, 3000);
};

// ---- Navbar Scroll ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    navOverlay.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile nav on overlay click
  navOverlay.addEventListener('click', closeNav);

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.classList.contains('nav-dropdown-btn') && window.innerWidth <= 768) {
        return; // Don't close the entire menu when expanding the dropdown
      }
      closeNav();
    });
  });

  function closeNav() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // Populate Mega Menu
  const megaMenu = document.getElementById('mega-menu');
  if (megaMenu && typeof window.products !== 'undefined') {
    // Define Categories
    const categories = {
      "Immersion Heaters": ["Immersion Heater", "Flange Heater", "Screw Flange Heater", "Circulation Heater"],
      "Tubular Heaters": ["Tubular Heater", "Tubular Heater with Nipple", "U-Shaped Tubular Heater", "Fins Heater"],
      "Industrial Heaters": ["Band Heater", "Cartridge Heater", "Strip Heater", "Coil Heater", "Plate Heater"],
      "Specialty Heaters": ["Air Heater", "Boiler Heater", "Oven Heater"],
      "Commercial & Appliance": ["Coffee Maker Heater", "Defrost Heater", "Dish Washing Heater", "French Fries Heater", "Hand Dryer Heater", "Sauna Bath Heater"],
      "Bunker/Oil Heaters": ["Bunker Fuel Oil Heater", "Bunker Heater", "Shipping Vessels Bunker/Oil Heater"]
    };

    // Keep track of assigned products to put the rest in "Other"
    const assignedIds = new Set();

    Object.keys(categories).forEach(catName => {
      const catProductsNames = categories[catName];
      const catProducts = window.products.filter(p => catProductsNames.includes(p.name));
      
      if (catProducts.length > 0) {
        catProducts.forEach(p => assignedIds.add(p.id));

        const groupLi = document.createElement('li');
        groupLi.className = 'mega-menu-group';
        groupLi.innerHTML = `<a>${catName} <i class="fas fa-chevron-right" style="font-size: 0.7em; color: var(--neutral-400);"></i></a>`;
        
        const subMenuUl = document.createElement('ul');
        subMenuUl.className = 'mega-submenu';
        
        catProducts.forEach(prod => {
          const linkLi = document.createElement('li');
          const link = document.createElement('a');
          link.href = `product.html?id=${prod.id}`;
          link.innerHTML = `<i class="far fa-play-circle" style="color: var(--neutral-400); margin-right: 4px; font-size: 0.8em;"></i> ${prod.name}`;
          linkLi.appendChild(link);
          subMenuUl.appendChild(linkLi);
        });
        
        groupLi.appendChild(subMenuUl);
        megaMenu.appendChild(groupLi);
      }
    });

    // Handle any unassigned products
    const unassigned = window.products.filter(p => !assignedIds.has(p.id));
    if (unassigned.length > 0) {
      const groupLi = document.createElement('li');
      groupLi.className = 'mega-menu-group';
      groupLi.innerHTML = `<a>Other Products <i class="fas fa-chevron-right" style="font-size: 0.7em; color: var(--neutral-400);"></i></a>`;
      
      const subMenuUl = document.createElement('ul');
      subMenuUl.className = 'mega-submenu';
      
      unassigned.forEach(prod => {
        const linkLi = document.createElement('li');
        const link = document.createElement('a');
        link.href = `product.html?id=${prod.id}`;
        link.innerHTML = `<i class="far fa-play-circle" style="color: var(--neutral-400); margin-right: 4px; font-size: 0.8em;"></i> ${prod.name}`;
        linkLi.appendChild(link);
        subMenuUl.appendChild(linkLi);
      });
      
      groupLi.appendChild(subMenuUl);
      megaMenu.appendChild(groupLi);
    }
  }

  // Mobile Dropdown Toggle
  const navDropdownBtn = document.querySelector('.nav-dropdown-btn');
  if (navDropdownBtn) {
    navDropdownBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        navDropdownBtn.parentElement.classList.toggle('active');
      }
    });
  }

  // Mobile Submenu Toggle
  document.querySelectorAll('.mega-menu-group > a').forEach(groupBtn => {
    groupBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentLi = groupBtn.parentElement;
        parentLi.classList.toggle('active');
        const icon = groupBtn.querySelector('i');
        if (icon) {
          if (parentLi.classList.contains('active')) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
          } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
          }
        }
      }
    });
  });
}

// ---- PDF Scroll Viewer ----
let pdfDoc = null;

async function initPDFViewer() {
  const openBtn = document.getElementById('open-profile-btn');
  const overlay = document.getElementById('pdf-modal-overlay');
  const closeBtn = document.getElementById('pdf-modal-close');

  if (!openBtn || !overlay) return;

  openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    if (!pdfDoc) loadPDF();
  });

  closeBtn.addEventListener('click', closePDFModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePDFModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closePDFModal();
  });

  function closePDFModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
}

async function loadPDF() {
  const loadingEl = document.getElementById('pdf-loading');
  const scrollViewer = document.getElementById('pdf-scroll-viewer');

  loadingEl.style.display = 'flex';
  scrollViewer.style.display = 'none';

  try {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    pdfDoc = await pdfjsLib.getDocument('Company Profile.pdf').promise;
    const totalPages = pdfDoc.numPages;

    scrollViewer.innerHTML = '';

    // Render all pages
    for (let i = 1; i <= totalPages; i++) {
      const page = await pdfDoc.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport: viewport }).promise;
      
      const pageWrapper = document.createElement('div');
      pageWrapper.className = 'pdf-scroll-page';
      pageWrapper.appendChild(canvas);
      scrollViewer.appendChild(pageWrapper);
    }

    loadingEl.style.display = 'none';
    scrollViewer.style.display = 'flex';

  } catch (err) {
    console.error('Error loading PDF:', err);
    loadingEl.innerHTML = `
      <div style="color: var(--neutral-500); text-align: center;">
        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary);"></i>
        <p>Unable to load the Company Profile.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Please try refreshing the page.</p>
      </div>
    `;
  }
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

// ---- ScrollSpy ----
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPDFViewer();
  initScrollAnimations();
  initScrollSpy();
  initSmoothScroll();

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Restore saved language
  const savedLang = localStorage.getItem('alejo-lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }



  // Initial navbar state
  if (window.scrollY > 60) {
    document.getElementById('navbar').classList.add('scrolled');
  }
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
function initSearch() {
  const searchOpenBtns = document.querySelectorAll('#search-open-btn');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchModal) return;

  // Open search modal
  searchOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('open');
      document.body.classList.add('no-scroll');
      setTimeout(() => searchInput.focus(), 100);
      renderSearchResults('');
    });
  });

  // Close search modal
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('open');
      document.body.classList.remove('no-scroll');
      searchInput.value = '';
    });
  }

  // Close on outside click
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('open');
      document.body.classList.remove('no-scroll');
      searchInput.value = '';
    }
  });

  // Handle search input
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.toLowerCase());
    });
  }

  function renderSearchResults(query) {
    searchResults.innerHTML = '';
    
    if (!window.products || window.products.length === 0) return;

    const filtered = window.products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = '<p style="color: #666; padding: 1rem; text-align: center;">No products found.</p>';
      return;
    }

    filtered.forEach(p => {
      const a = document.createElement('a');
      a.href = `product.html?id=${p.id}`;
      a.style.display = 'block';
      a.style.padding = '1rem';
      a.style.textDecoration = 'none';
      a.style.color = 'var(--neutral-800)';
      a.style.background = 'var(--neutral-50)';
      a.style.borderRadius = '8px';
      a.style.transition = 'background 0.2s';
      
      a.onmouseenter = () => a.style.background = '#ffe5e5';
      a.onmouseleave = () => a.style.background = 'var(--neutral-50)';

      a.innerHTML = `
        <h4 style="margin: 0; color: var(--primary); font-size: 1.1rem;">${p.name}</h4>
        <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem; color: #555; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${p.description}</p>
      `;
      searchResults.appendChild(a);
    });
  }
}

function initInquiryModal() {
  const openInquiryBtn = document.getElementById('open-inquiry-btn');
  const inquiryModal = document.getElementById('inquiry-modal');
  const inquiryClose = document.getElementById('inquiry-close');
  const inquiryForm = document.getElementById('inquiry-form');

  if (!inquiryModal || !openInquiryBtn) return;

  openInquiryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inquiryModal.classList.add('open');
    document.body.classList.add('no-scroll');
  });

  if (inquiryClose) {
    inquiryClose.addEventListener('click', () => {
      inquiryModal.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  }

  inquiryModal.addEventListener('click', (e) => {
    if (e.target === inquiryModal) {
      inquiryModal.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = inquiryForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(inquiryForm);
        
        const response = await fetch(inquiryForm.action, {
          method: "POST",
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
        });

        if (response.ok) {
          inquiryModal.classList.remove('open');
          document.body.classList.remove('no-scroll');
          inquiryForm.reset();
          window.showSuccessModal('Thank you! Your ticket has been submitted. We will get back to you shortly.', 'index.html');
        } else {
          alert('Oops! There was a problem submitting your form. Please try again.');
        }
      } catch (error) {
        alert('Oops! There was a problem submitting your form. Please check your connection.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initInquiryModal();
});
