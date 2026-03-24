// ===== World-Class Portfolio JS - 10+ Unique Features =====
// Modular structure for performance

// Data
const TRANSLATIONS = {
  ar: { /* Arabic defaults already in HTML */ },
  en: {
    home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', 
    aiTools: 'AI Tools', timeline: 'Timeline', contact: 'Contact',
    // Add full translations for all data-*-ar
    'World-Class Frontend Engineer': 'World-Class Frontend Engineer',
    // ... more will be handled dynamically
  }
};

const AI_RESPONSES = {
  intents: {
    code: [
      { q: /كود|code|html|css|js/i, r: () => `<div class="code-snippet">/* AI Generated Responsive Card */\nconst card = \`<div class="card">\n  <h3>\${title}</h3>\n</div>\`;` },
    ],
    projects: [
      { q: /مشاريع|projects|olympia/i, r: 'Olympia Gym: Modern responsive gym site with animations. View: https://momen1010.github.io/Olampya-Gym/' },
    ],
    about: [
      { q: /عنك|about|experience/i, r: '3+ years Frontend expert. Specialize in HTML/CSS/JS, animations, AI tools.' },
    ],
    default: ['مرحبا! أنا مساعد AI لمؤمن. اسأل عن الكود، المشاريع، أو المهارات!', 'Hello! Mo\'men\'s AI Assistant. Ask about code, projects, skills!']
  }
};

// Init on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initAll();
});

function initAll() {
  initLoader();
  initParticles();
  initTypewriter();
  initTilt3D();
  initScrollReveal();
  initThemes();
  initLangToggle();
  initMobileMenu();
  initFilters();
  initStatsCounters();
  initAIChat();
  initModals();
  initRadarCharts();
  initForm();
  initDownloadCV();
  initCarousel();
}

// 1. Loader
function initLoader() {
  window.addEventListener('load', () => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => document.getElementById('loader').remove(), 500);
  });
}

// 2. Particles Canvas (Starfield + Rain)
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 0.5,
      radius: Math.random() * 2 + 1,
      alpha: Math.random()
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x += p.vx, p.y += p.vy, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${Date.now() * 0.01}, 70%, 60%, ${p.alpha})`;
      ctx.fill();
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}

// 3. Typewriter Effect
function initTypewriter() {
  const texts = ['مطور Frontend عالمي 🔥', 'AI-Powered Developer 🚀', 'Unique Experiences Only 💎'];
  let i = 0, j = 0, currentText = '';
  const element = document.getElementById('typewriter');
  
  function type() {
    if (j <= texts[i].length) {
      currentText = texts[i].slice(0, j++);
      element.textContent = currentText;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        j = texts[i].length;
        erase();
      }, 2000);
    }
  }
  
  function erase() {
    if (j >= 0) {
      currentText = texts[i].slice(0, j--);
      element.textContent = currentText;
      setTimeout(erase, 50);
    } else {
      i = (i + 1) % texts.length;
      setTimeout(type, 500);
    }
  }
  type();
}

// 4. 3D Tilt Effect
function initTilt3D() {
  document.getElementById('profileTilt').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    document.getElementById('flame').style.opacity = '1';
  });
  document.getElementById('profileTilt').addEventListener('mouseleave', () => {
    document.getElementById('profileTilt').style.transform = 'rotateX(0) rotateY(0)';
    document.getElementById('flame').style.opacity = '0';
  });
}

// 5. Scroll Reveal (AOS-like)
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  document.querySelectorAll('.section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
  });
}

// 6. Themes
function initThemes() {
  document.getElementById('themeToggle').addEventListener('change', (e) => {
    document.body.className = e.target.value + '-theme';
  });
}

// 7. Language Toggle
function initLangToggle() {
  document.getElementById('langToggle').addEventListener('change', (e) => {
    document.documentElement.lang = e.target.value;
    document.body.dir = e.target.value === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = e.target.value === 'en' ? el.dataset.en : el.textContent;
    });
  });
}

// 8. Mobile Menu
function initMobileMenu() {
  document.getElementById('mobileMenu').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// 9. Filters
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.category;
      document.querySelectorAll('.project-card').forEach(card => {
        card.style.display = cat === 'all' || card.dataset.category === cat ? 'block' : 'none';
      });
    });
  });
}

// 10. Stats Counters
function initStatsCounters() {
  const counters = document.querySelectorAll('[data-target]');
  counters.forEach(counter => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0, target = +counter.dataset.target, duration = 2000;
        const inc = target / (duration / 16);
        const timer = setInterval(() => {
          start += inc;
          if (start >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(start);
          }
        }, 16);
      }
    });
    observer.observe(counter);
  });
}

// 11. AI Chat Tool (Pure JS Intelligence)
function initAIChat() {
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');
  const messages = document.getElementById('chatMessages');
  const chat = document.getElementById('aiChat');
  const minimize = document.querySelector('.chat-minimize');
  
  minimize.addEventListener('click', () => chat.classList.toggle('minimized'));
  
  function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `chat-message ${isUser ? 'user' : 'ai'}`;
    div.textContent = text; // Use DOMPurify if needed
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function processAI(query) {
    for (let category in AI_RESPONSES.intents) {
      for (let match of AI_RESPONSES.intents[category]) {
        if (match.q.test(query)) {
          const response = typeof match.r === 'function' ? match.r() : match.r;
          return response;
        }
      }
    }
    return AI_RESPONSES.intents.default[Math.floor(Math.random() * AI_RESPONSES.intents.default.length)];
  }
  
  send.addEventListener('click', () => sendMessage());
  input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
  
  function sendMessage() {
    const query = input.value.trim();
    if (!query) return;
    addMessage(query, true);
    input.value = '';
    setTimeout(() => {
      const response = processAI(query);
      addMessage(response);
    }, 800);
  }
  
  // Welcome
  addMessage('مرحبا! أنا AI Assistant لمؤمن. كيف أساعدك؟');
}

// 12. Modals & Demos
function initModals() {
  document.querySelectorAll('.modal-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.target.dataset.modal;
      // Dynamic modal creation
      let modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `<div class="modal-content"><h3>${modalId}</h3><p>Project details here...</p><button class="close-modal">×</button></div>`;
      modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
      document.getElementById('projectModals').appendChild(modal);
    });
  });
  
  document.querySelectorAll('.demo-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      alert('AI Demo: ' + e.target.dataset.demo + ' - Pure JS generated content!');
    });
  });
}

// 13. Radar Charts (SVG)
function initRadarCharts() {
  document.querySelectorAll('.skill-radar').forEach(radar => {
    const skills = JSON.parse(radar.dataset.skills);
    const svg = radar.querySelector('.radar-svg');
    const max = 100;
    const points = [];
    
    skills.forEach((skill, i) => {
      const angle = (Math.PI * 2 * i) / skills.length;
      const x = 100 + (skill.value / max) * 70 * Math.cos(angle);
      const y = 100 + (skill.value / max) * 70 * Math.sin(angle);
      points.push(`${x},${y}`);
    });
    
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', points.join(' '));
    poly.setAttribute('fill', 'url(#radarGradient)');
    svg.appendChild(poly);
    
    // Labels
    skills.forEach((skill, i) => {
      const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
      const x = 100 + 90 * Math.cos(angle);
      const y = 100 + 90 * Math.sin(angle);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = skill.name;
      svg.appendChild(text);
    });
  });
}

// 14. Form Handling (Fake Send + PDF Sim)
function initForm() {
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'تم إرسال الرسالة! شكراً 📧';
    document.getElementById('formMessage').style.color = 'var(--primary)';
    e.target.reset();
  });
}

// 15. CV Download Sim
function initDownloadCV() {
  document.getElementById('downloadCV').addEventListener('click', () => {
    const cvContent = `Mo'men Tarek\nFrontend Engineer\nExperience: 3+ years\nSkills: HTML/CSS/JS/AI...`; // Full CV data
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'momen-cv.txt';
    a.click();
  });
}

// 16. Testimonials Carousel
function initCarousel() {
  let current = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  setInterval(() => {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
  }, 5000);
}

// Legacy Compat (if any old code)
document.getElementById('darkModeToggle')?.remove(); // Cleanup
