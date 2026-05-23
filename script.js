/* ==========================================
   PHILOS ASSESSORIA CONTABIL
   JavaScript Vanilla ES6+
   ========================================== */

// ===== DADOS =====
const servicosData = [
  // ── Os 6 principais serviços — exibidos imediatamente ──
  'Departamento Contábil para Empresas',
  'Departamento Pessoal para Empresas',
  'Departamento Fiscal para Empresas',
  'Imposto de Renda (Físico e Jurídico)',
  'Legalização de Empresas',
  'BPO Financeiro',
  // ── Demais serviços — revelados ao clicar em "Ver Todos" ──,
  'Consultoria Financeira e Tributária',
  'Planejamento Financeiro e Tributário',
  'Enquadramento no Simples Nacional',
  'Baixa de Empresas',
  'Alteração de Empresas',
  'Certificado Digital',
  'Parcelamentos na Receita Federal',
  'Parcelamentos na Prefeitura',
  'Parcelamentos na Fazenda Nacional',
  'Emissão de Alvará de Funcionamento',
  'Marcas e Patentes',
  'Reativação de CNPJ e Inscrição Estadual'
];

const depoimentosData = [
  { nome: 'Rodrigo Veloso', badge: '3 avaliações', tempo: '1 ano atrás', texto: 'Profissionais competentes, atendimento personalizado, soluções eficazes, equipe atenciosa, serviços de alta qualidade e prazo hábil. Recomendo!' },
  { nome: 'Jailson Leandro', badge: 'Local Guide · 149 avaliações · 1495 fotos', tempo: '1 ano atrás', texto: 'Excelente! Escritório bem localizado, no centro de Nova Iguaçu. Atendimento cortês e simpático. Excelentes prestadores de serviço! Recomendo!' },
  { nome: 'Fátima Mayer', badge: '2 avaliações', tempo: '1 ano atrás', texto: 'Queremos deixar aqui o nosso muito obrigado e parabenizar a equipe de profissionais pelo excelente trabalho.' },
  { nome: 'Fabio Goncalves da Mata', badge: '2 avaliações', tempo: '1 ano atrás', texto: 'Experiência maravilhosa. O melhor escritório de contabilidade da Baixada. Fica aqui minha indicação para quem quer um trabalho bem-feito e ser bem atendido.' },
  { nome: 'Gabriela Fogaça', badge: '1 avaliação', tempo: '10 meses atrás', texto: 'Atendimento de excelência, equipe de confiança e comprometida com o crescimento dos clientes.' },
  { nome: 'Diana Figueiredo', badge: '3 avaliações', tempo: '1 ano atrás', texto: 'A Philos Assessoria Contábil é uma excelente empresa. Maravilhosa, com atendimento de primeira, exatidão em esclarecimentos, pronto atendimento e assertividade cem por cento. Comprometimento total com o cliente. Parabéns!' },
  { nome: 'Igor Caruso', badge: '5 avaliações', tempo: '1 ano atrás', texto: 'Serviços sempre de excelência. Profissionais altamente capazes e estimulados a ajudar.' },
  { nome: 'Nova Carioca', badge: '1 avaliação', tempo: '1 ano atrás', texto: 'Ótima empresa e excelente atendimento. Todos muito atenciosos e profissionais.' },
  { nome: 'Celso Neto', badge: '86 avaliações · 18 fotos', tempo: '1 ano atrás', texto: 'Ótimos profissionais. Um serviço de qualidade com valor justo.' },
  { nome: 'Eduardo Bruno Castilho', badge: '8 avaliações', tempo: '1 ano atrás', texto: 'Excelência nos serviços prestados, profissionalismo e competência estão em primeiro lugar. Philos Assessoria recomendada.' },
  { nome: 'Daniele Nascimento', badge: '15 avaliações', tempo: '2 meses atrás', texto: 'A Philos é uma empresa bem localizada e estruturada, que se destaca pelo atendimento excelente e constante, acompanhando a rotina de trabalho da nossa empresa. Indicamos a Philos pela eficiência, qualidade e apoio ao crescimento, sempre com as melhores alternativas. Conhecemos a empresa por indicação e estamos muito satisfeitos com os serviços prestados. Esperamos que nossa parceria continue rendendo bons frutos.' }
];

const faqData = [
  { pergunta: 'Quanto custa o servico contabil?', resposta: 'O valor varia de acordo com os servicos prestados e o porte da sua empresa. Entre em contato para uma avaliacao personalizada e sem compromisso.' },
  { pergunta: 'A Philos atende empresas de outros estados?', resposta: 'Sim! Atendemos empresas de todo o Brasil de forma 100% digital. Nossa estrutura permite prestar servicos contabeis completos independentemente da localizacao da sua empresa.' },
  { pergunta: 'Quais documentos preciso para legalizar minha empresa?', resposta: 'Sao necessarios documentos pessoais dos socios (RG e CPF), comprovante de residencia, definicao do nome empresarial e da atividade da empresa (CNAE). Nossa equipe orienta em todo o processo.' },
  { pergunta: 'Como funciona o departamento pessoal?', resposta: 'Cuidamos de toda a folha de pagamento, admissoes, demissoes, obrigacoes trabalhistas e previdenciarias da sua empresa. Inclui calculo de rescisoes, ferias, 13 salario e todas as rotinas obrigatorias.' },
  { pergunta: 'A Philos faz imposto de renda para pessoa fisica?', resposta: 'Sim! Fazemos declaracao de Imposto de Renda para pessoa fisica (IRPF) e juridica (IRPJ), com agendamento previo e atendimento especializado.' },
  { pergunta: 'Qual o prazo para abertura de uma empresa?', resposta: 'Em media 5 a 10 dias uteis, dependendo do tipo de empresa, da cidade e da complexidade da atividade. Processos mais simples de MEI podem ser concluidos em ate 3 dias.' },
  { pergunta: 'A Philos oferece certificado digital?', resposta: 'Sim! Emitimos certificado digital A1 e A3 para empresas e pessoas fisicas, com todo o suporte necessario para instalacao e utilizacao.' }
];

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

function handleNavbarScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scrollY;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ===== MOBILE MENU (DRAWER PREMIUM) =====
const navToggle = document.getElementById('navToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerLinks = document.querySelectorAll('.drawer-link');

navToggle.addEventListener('click', () => {
  mobileOverlay.classList.add('active');
  mobileDrawer.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
  mobileOverlay.classList.remove('active');
  mobileDrawer.classList.remove('active');
  document.body.style.overflow = '';
}

drawerClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
drawerLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== RENDER SERVICOS =====
function renderServicos() {
  const grid = document.getElementById('servicosGrid');
  const btnVerMais = document.getElementById('btnVerMaisServicos');
  if (!grid) return;

  grid.innerHTML = servicosData.map((nome, i) => {
    const msg = encodeURIComponent("Olá, vim através do site e gostaria de saber sobre " + nome + ".");
    const isHidden = i >= 6 ? 'servico-item-hidden' : '';
    return `
      <a href="https://wa.me/5521964517864?text=${msg}" target="_blank" rel="noopener noreferrer" class="servico-item ${isHidden}" role="button" aria-label="Saber mais sobre ${nome} pelo WhatsApp">
        <div class="servico-content">
          <span class="servico-nome">${nome}</span>
          <svg class="servico-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </a>
    `;
  }).join('');

  if (btnVerMais) {
    let isOpen = false;
    btnVerMais.addEventListener('click', () => {
      const items = grid.querySelectorAll('.servico-item');
      
      if (!isOpen) {
        // Abrir: Revela todos
        items.forEach((item, index) => {
          if (index >= 6) {
            item.classList.remove('servico-item-hidden');
            item.classList.add('servico-item-revealed');
          }
        });
        btnVerMais.innerHTML = `
          Ver Menos Serviços
          <svg class="btn-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        `;
        isOpen = true;
      } else {
        // Fechar: Oculta a partir do 6º
        items.forEach((item, index) => {
          if (index >= 6) {
            item.classList.remove('servico-item-revealed');
            item.classList.add('servico-item-hidden');
          }
        });
        btnVerMais.innerHTML = `
          Ver Todos os Serviços
          <svg class="btn-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        `;
        isOpen = false;
        
        // UX de Luxo: Retornar suavemente para o início da seção de serviços ao fechar
        const section = document.getElementById('servicos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}

// ===== AUXILIAR: PEGAR INICIAIS =====
function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ===== RENDER DEPOIMENTOS (EDITORIAL PRESTIGE) =====
function renderDepoimentos() {
  const stage = document.getElementById('depStage');
  const authorArea = document.getElementById('depAuthorArea');
  const counterEl = document.getElementById('depCounter');
  const totalEl = document.getElementById('depTotal');
  const prevBtn = document.getElementById('depPrev');
  const nextBtn = document.getElementById('depNext');
  if (!stage) return;

  const starSVG = '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" style="color:var(--dourado)"/></svg>';

  // Render slides (quote only)
  stage.innerHTML = depoimentosData.map((dep, i) => `
    <div class="dep-slide${i === 0 ? ' dep-slide--active' : ''}" data-index="${i}">
      <blockquote class="dep-slide-quote">&#8220;${dep.texto}&#8221;</blockquote>
    </div>
  `).join('');

  // Update total
  if (totalEl) totalEl.textContent = depoimentosData.length;

  function renderAuthor(dep) {
    if (!authorArea) return;
    authorArea.innerHTML = `
      <div class="dep-author-badge" aria-hidden="true">${getInitials(dep.nome)}</div>
      <div class="dep-author-info">
        <span class="dep-author-name">${dep.nome}</span>
        <span class="dep-author-source">
          ${starSVG.repeat(5)}
          <span>Google Reviews</span>
        </span>
      </div>
    `;
  }

  function updateCounter(index) {
    if (!counterEl) return;
    const n = String(index + 1).padStart(2, '0');
    counterEl.innerHTML = `${n}<span class="dep-counter-sep"> /</span> <span class="dep-counter-total" id="depTotal">${depoimentosData.length}</span>`;
  }

  let current = 0;
  const slides = stage.querySelectorAll('.dep-slide');

  function goTo(index) {
    slides[current].classList.remove('dep-slide--active');
    current = index;
    slides[current].classList.add('dep-slide--active');
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
    renderAuthor(depoimentosData[current]);
    updateCounter(current);
  }

  // Init
  renderAuthor(depoimentosData[0]);
  updateCounter(0);
  if (prevBtn) prevBtn.disabled = true;

  if (prevBtn) prevBtn.addEventListener('click', () => { if (current > 0) { goTo(current - 1); resetAutoplay(); } });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (current < slides.length - 1) { goTo(current + 1); resetAutoplay(); } });

  // Touch swipe
  let touchStartX = 0;
  stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < slides.length - 1) goTo(current + 1);
      else if (diff < 0 && current > 0) goTo(current - 1);
      resetAutoplay();
    }
  });

  let autoTimer;
  function resetAutoplay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current < slides.length - 1 ? current + 1 : 0), 10000);
  }
  stage.addEventListener('mouseenter', () => clearInterval(autoTimer));
  stage.addEventListener('mouseleave', resetAutoplay);
  resetAutoplay();
}


// ===== RENDER FAQ =====
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = faqData.map((faq, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `
      <div class="faq-item ${i === 0 ? 'open' : ''}">
        <button class="faq-question" aria-expanded="${i === 0 ? 'true' : 'false'}">
          <span class="faq-question-main">
            <span class="faq-number">${num}</span>
            <span class="faq-text">${faq.pergunta}</span>
          </span>
          <span class="faq-icon-wrapper">
            <svg class="faq-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>${faq.resposta}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Accordion logic - only one open at a time
  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all
      container.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
        faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


// ===== INTERSECTION OBSERVER =====
function initObservers() {
  // Reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach(el => {
    revealObserver.observe(el);
  });


  // Lazy video loading
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('video[data-lazy]').forEach(video => {
    videoObserver.observe(video);
  });
}

// ===== FORM VALIDATION =====
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const success = document.getElementById('formSuccess');
  const telefoneInput = document.getElementById('formTelefone');
  const servicoSelect = document.getElementById('formServico');

  // Máscara de Telefone em Tempo Real (ex: (21) 96451-7864)
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      
      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  }

  // Cor do Select Dinâmica (Estética Premium: placeholder cinza e opção selecionada grafite)
  if (servicoSelect) {
    servicoSelect.addEventListener('change', () => {
      if (servicoSelect.value) {
        servicoSelect.style.color = 'var(--off-white)';
      } else {
        servicoSelect.style.color = 'rgba(242, 235, 217, 0.32)';
      }
    });
  }

  function validate() {
    const errors = {};
    const nome = document.getElementById('formNome');
    const email = document.getElementById('formEmail');
    const telefone = document.getElementById('formTelefone');
    const servico = document.getElementById('formServico');
    const mensagem = document.getElementById('formMensagem');

    // Limpa erros anteriores
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    if (!nome.value.trim()) errors.nome = 'Nome é obrigatório';
    
    if (!email.value.trim()) {
      errors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = 'E-mail inválido';
    }
    
    // Telefone precisa de validação de tamanho para garantir DDD + número completo
    const cleanPhone = telefone.value.replace(/\D/g, '');
    if (!telefone.value.trim()) {
      errors.telefone = 'Telefone é obrigatório';
    } else if (cleanPhone.length < 10) {
      errors.telefone = 'Telefone incompleto com DDD';
    }
    
    if (!servico.value) errors.servico = 'Por favor, selecione um serviço';
    if (!mensagem.value.trim()) errors.mensagem = 'Mensagem é obrigatória';

    if (errors.nome) document.getElementById('errorNome').textContent = errors.nome;
    if (errors.email) document.getElementById('errorEmail').textContent = errors.email;
    if (errors.telefone) document.getElementById('errorTelefone').textContent = errors.telefone;
    if (errors.servico) document.getElementById('errorServico').textContent = errors.servico;
    if (errors.mensagem) document.getElementById('errorMensagem').textContent = errors.mensagem;

    return Object.keys(errors).length === 0;
  }

  // Validação em tempo real no blur
  ['formNome', 'formEmail', 'formTelefone', 'formServico', 'formMensagem'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const errorEl = document.getElementById('error' + id.replace('form', ''));
      if (!el.value.trim() && el.hasAttribute('required') !== false) {
        const fieldName = id.replace('form', '').toLowerCase();
        const labels = { nome: 'Nome', email: 'E-mail', telefone: 'Telefone', servico: 'Serviço', mensagem: 'Mensagem' };
        if (errorEl) errorEl.textContent = labels[fieldName] + ' é obrigatório';
      } else {
        if (errorEl) errorEl.textContent = '';
      }
      
      if (id === 'formEmail' && el.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
        if (errorEl) errorEl.textContent = 'E-mail inválido';
      }
      
      if (id === 'formTelefone' && el.value.trim()) {
        const cleanPhone = el.value.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
          if (errorEl) errorEl.textContent = 'Telefone incompleto com DDD';
        }
      }
    });

    // Limpa erro específico do select ao alterar
    if (id === 'formServico') {
      el.addEventListener('change', () => {
        const errorEl = document.getElementById('errorServico');
        if (el.value && errorEl) errorEl.textContent = '';
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
      const nome = document.getElementById('formNome').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const telefone = document.getElementById('formTelefone').value.trim();
      const servico = document.getElementById('formServico').value;
      const mensagem = document.getElementById('formMensagem').value.trim();

      // Monta a mensagem perfeitamente estruturada em lista conforme regras exigidas
      const textMessage = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.

- E-mail: ${email}
- Telefone: ${telefone}
- Serviço: ${servico}
- Mensagem: ${mensagem}`;

      // Abre a API do WhatsApp com redirecionamento limpo
      const waUrl = `https://wa.me/5521964517864?text=${encodeURIComponent(textMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // UX Premium: Oculta formulário e exibe tela de sucesso
      form.style.display = 'none';
      success.classList.add('active');
    }
  });
}

// ===== WHATSAPP FLOAT (hide on footer) =====
function initWhatsAppFloat() {
  const container = document.querySelector('.wa-premium-container');
  const footer = document.querySelector('.footer');
  if (!container || !footer) return;

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      container.style.opacity = entry.isIntersecting ? '0' : '1';
      container.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      container.style.transform = entry.isIntersecting ? 'translateY(20px) scale(0.95)' : 'translateY(0) scale(1)';
    });
  }, { threshold: 0.1 });

  footerObserver.observe(footer);
}

// ===== WHATSAPP PREMIUM EXPERIENCE =====
function initWaPremium() {
  const bubble = document.getElementById('wa-message-bubble');
  const typing = document.getElementById('wa-typing');
  const realMessage = document.getElementById('wa-real-message');
  const badge = document.getElementById('wa-notification');
  const closeBtn = document.getElementById('wa-close-btn');
  const mainBtn = document.getElementById('wa-main-btn');

  if (!bubble || !typing || !realMessage || !badge || !closeBtn || !mainBtn) return;

  // 1. Mostrar o balão após 6 segundos
  setTimeout(() => {
    if (!bubble.classList.contains('show') && !badge.classList.contains('show')) {
      bubble.classList.add('show');

      // 2. Simular digitação por 2.5 segundos antes de mostrar a mensagem real
      setTimeout(() => {
        typing.style.display = 'none';
        realMessage.style.display = 'block';
        realMessage.style.opacity = '0';
        realMessage.style.transition = 'opacity 0.5s ease';
        // Trigger reflow
        realMessage.offsetHeight;
        realMessage.style.opacity = '1';
      }, 2500);
    }
  }, 6000);

  // Fechar o balão ao clicar no botão de fechar
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    bubble.classList.remove('show');
    // Mostrar badge de notificação após 2 segundos para engajar o usuário
    setTimeout(() => {
      if (!bubble.classList.contains('show')) {
        badge.classList.add('show');
      }
    }, 2000);
  });

  // Ao clicar no botão principal (WhatsApp), removemos o balão e a badge de notificação
  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    badge.classList.remove('show');
  });
}

// ===== GALERIA DE IMAGENS PREMIUM (Nosso Espaço) =====
function initPremiumGallery() {
  const gallery = document.querySelector('.premium-accordion-gallery');
  if (!gallery) return;

  const strips = gallery.querySelectorAll('.gallery-strip');

  strips.forEach(strip => {
    // Adiciona evento de clique para dispositivos móveis e suporte a toque
    strip.addEventListener('click', () => {
      if (strip.classList.contains('active')) return;

      // Remove classe active de todas
      strips.forEach(s => s.classList.remove('active'));
      // Adiciona classe active à atual
      strip.classList.add('active');
    });

    // Foco de teclado para acessibilidade premium
    strip.addEventListener('focus', () => {
      strips.forEach(s => s.classList.remove('active'));
      strip.classList.add('active');
    });
  });
}

// ===== CARROSSEL DE VÍDEOS PREMIUM =====
function initVideosCarousel() {
  const track = document.getElementById('videosGrid');
  const prevBtn = document.getElementById('videosPrev');
  const nextBtn = document.getElementById('videosNext');
  if (!track || !prevBtn || !nextBtn) return;

  const items = track.querySelectorAll('.videos-item');
  if (items.length === 0) return;

  let currentIndex = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  }

  function updateCarousel() {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, items.length - visibleCount);

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }

    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const translation = currentIndex * (itemWidth + gap);

    track.style.transform = `translateX(-${translation}px)`;

    // Habilitar/desabilitar botões
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    const maxIndex = items.length - visibleCount;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Suporte a gestos touch (arrastar com o dedo)
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const diffX = startX - currentX;
    
    // Se arrastou mais de 50px de diferença, muda de slide
    if (Math.abs(diffX) > 50) {
      const visibleCount = getVisibleCount();
      const maxIndex = items.length - visibleCount;
      if (diffX > 0 && currentIndex < maxIndex) {
        currentIndex++;
      } else if (diffX < 0 && currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    }
  });

  // Atualizar quando redimensionar a tela
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 100);
  });

  // Executar inicialização com um leve delay para garantir a renderização
  setTimeout(updateCarousel, 300);
}

// ===== CONTROLES DE VÍDEO PERSONALIZADOS (Play/Pause, Som, Fullscreen) =====
function initCustomVideoControls() {
  const wrappers = document.querySelectorAll('.videos-media-wrapper');
  
  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector('.videos-element');
    if (!video) return;

    // Iniciar pausado e sem reprodução automática concorrente
    video.removeAttribute('autoplay');
    video.pause();
    wrapper.classList.add('video-is-paused');

    // Criar o container de controles
    const controls = document.createElement('div');
    controls.className = 'video-custom-controls';
    
    // Injetar os botões na barra de controle (estado inicial pausado: play visível, pause oculto)
    controls.innerHTML = `
      <button class="video-btn-control btn-play-pause" aria-label="Reproduzir vídeo">
        <svg class="icon-pause" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        <svg class="icon-play" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <button class="video-btn-control btn-volume" aria-label="Ativar som">
        <svg class="icon-muted" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        <svg class="icon-unmuted" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      </button>
      <button class="video-btn-control btn-fullscreen" aria-label="Tela cheia">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      </button>
    `;
    
    wrapper.appendChild(controls);

    // Seletores locais
    const btnPlayPause = controls.querySelector('.btn-play-pause');
    const btnVolume = controls.querySelector('.btn-volume');
    const btnFullscreen = controls.querySelector('.btn-fullscreen');
    
    const iconPlay = btnPlayPause.querySelector('.icon-play');
    const iconPause = btnPlayPause.querySelector('.icon-pause');
    
    const iconMuted = btnVolume.querySelector('.icon-muted');
    const iconUnmuted = btnVolume.querySelector('.icon-unmuted');

    // Ao clicar no próprio vídeo dá play/pause
    video.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });

    // Controlar Play/Pause
    function togglePlay() {
      if (video.paused) {
        // Pausar todos os outros vídeos da seção para reprodução concorrente única
        document.querySelectorAll('.videos-element').forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
            otherVideo.currentTime = 0;
          }
        });

        video.play().then(() => {
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
          btnPlayPause.setAttribute('aria-label', 'Pausar vídeo');
          wrapper.classList.remove('video-is-paused');
        }).catch(() => {});
      } else {
        video.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        btnPlayPause.setAttribute('aria-label', 'Reproduzir vídeo');
        wrapper.classList.add('video-is-paused');
      }
    }

    btnPlayPause.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });

    // Controlar Volume (Mudo/Som)
    btnVolume.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (video.muted) {
        iconMuted.style.display = 'block';
        iconUnmuted.style.display = 'none';
        btnVolume.setAttribute('aria-label', 'Ativar som');
      } else {
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = 'block';
        btnVolume.setAttribute('aria-label', 'Mutar som');
      }
    });

    // Controlar Fullscreen via Modal Pop-Up Premium (Formato 9:16)
    btnFullscreen.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.openVideoModal) {
        video.pause();
        window.openVideoModal(video.currentSrc || video.querySelector('source').src);
      }
    });

    // Atualizar ícones com base no estado real (ex: se o Observer ou outro controle der play/pause)
    video.addEventListener('play', () => {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
      wrapper.classList.remove('video-is-paused');
    });
    
    video.addEventListener('pause', () => {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      wrapper.classList.add('video-is-paused');
    });
  });
}

// ===== MODAL DE VÍDEO POP-UP PREMIUM (Visualização 9:16) =====
function initVideoModal() {
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-overlay"></div>
      <div class="video-modal-container">
        <button class="video-modal-close" aria-label="Fechar vídeo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="video-modal-content">
          <video id="modalVideoElement" class="video-modal-element" loop playsinline controls></video>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const overlay = modal.querySelector('.video-modal-overlay');
  const closeBtn = modal.querySelector('.video-modal-close');
  const modalVideo = modal.querySelector('#modalVideoElement');

  function closeModal() {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.src = '';
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  window.openVideoModal = function(src) {
    // Pausar todos os outros vídeos da página e resetar posição
    document.querySelectorAll('.videos-element').forEach(otherVideo => {
      otherVideo.pause();
      otherVideo.currentTime = 0;
    });

    modalVideo.src = src;
    modalVideo.currentTime = 0;
    modalVideo.muted = false; // Começar com som ativado para uma experiência premium
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll no fundo

    modalVideo.play().catch(() => {
      // Caso o navegador bloqueie autoplay com som
    });
  };
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderServicos();
  renderDepoimentos();
  renderFAQ();
  initObservers();
  initForm();
  initWhatsAppFloat();
  initWaPremium();
  initPremiumGallery();
  initVideosCarousel();
  initCustomVideoControls();
  initVideoModal();
});
