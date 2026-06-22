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
let scrollRafPending = false;

function handleNavbarScroll() {
  if (scrollRafPending) return;
  scrollRafPending = true;
  requestAnimationFrame(() => {
    scrollRafPending = false;
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ===== MOBILE MENU (DRAWER PREMIUM) =====
const navToggle = document.getElementById('navToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerLinks = document.querySelectorAll('.drawer-link');

function closeMobileMenu() {
  if (mobileOverlay) mobileOverlay.classList.remove('active');
  if (mobileDrawer) mobileDrawer.classList.remove('active');
  document.body.classList.remove('no-scroll'); // PageSpeed: evita style inline (forced reflow)
}

// Páginas secundárias (ex: servicos.html) podem não ter o drawer mobile completo
if (navToggle && mobileOverlay && mobileDrawer) {
  navToggle.addEventListener('click', () => {
    mobileOverlay.classList.add('active');
    mobileDrawer.classList.add('active');
    document.body.classList.add('no-scroll'); // PageSpeed: evita style inline (forced reflow)
  });
  if (drawerClose) drawerClose.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  drawerLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
}

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

// ===== RENDER SERVICOS (HOME — 6 com imagem) =====
function renderServicos() {
  const grid = document.getElementById('servicosGrid');
  if (!grid) return;

  const imagensServicos = [
    'Assets/philos-servico-contabil.png',
    'Assets/philos-servico-pessoal.png',
    'Assets/philos-servico-fiscal.png',
    'Assets/philos-servico-imposto.png',
    'Assets/philos-servico-legalizacao.png',
    'Assets/philos-servico-bpo.png'
  ];

  // Home exibe apenas os 6 serviços com imagem; os demais ficam na página servicos.html
  grid.innerHTML = servicosData.slice(0, 6).map((nome, i) => {
    const msg = encodeURIComponent("Olá, vim através do site e gostaria de saber sobre " + nome + ".");
    const num = String(i + 1).padStart(2, '0');
    return `
      <a href="https://wa.me/5521964517864?text=${msg}" target="_blank" rel="noopener noreferrer" class="servico-item servico-item-com-imagem" role="button" aria-label="Saber mais sobre ${nome} pelo WhatsApp">
        <div class="servico-bg-image-wrapper">
          <img src="${imagensServicos[i]}" alt="${nome}" class="servico-bg-img" loading="lazy">
        </div>
        <div class="servico-gradient-overlay"></div>
        <div class="servico-card-content">
          <span class="servico-num-overlay">${num}</span>
          <div class="servico-card-footer">
            <h3 class="servico-nome-overlay">${nome}</h3>
            <svg class="servico-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

// ===== RENDER SERVICOS (PÁGINA servicos.html — demais serviços sem imagem) =====
function renderServicosPage() {
  const grid = document.getElementById('servicosPageGrid');
  if (!grid) return;

  // Serviços a partir do 7º (sem imagem), renumerados a partir de 01 nesta página
  grid.innerHTML = servicosData.slice(6).map((nome, i) => {
    const msg = encodeURIComponent("Olá, vim através do site e gostaria de saber sobre " + nome + ".");
    const num = String(i + 1).padStart(2, '0');
    return `
      <a href="https://wa.me/5521964517864?text=${msg}" target="_blank" rel="noopener noreferrer" class="servico-item servico-item-simples" role="button" aria-label="Saber mais sobre ${nome} pelo WhatsApp">
        <div class="servico-content">
          <div class="servico-info-meta">
            <span class="servico-num">${num}</span>
            <span class="servico-nome">${nome}</span>
          </div>
          <svg class="servico-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </a>
    `;
  }).join('');
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

  const starSVG = '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" style="color:var(--vinho)"/></svg>';

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
    if (index >= slides.length) {
      current = 0;
    } else if (index < 0) {
      current = slides.length - 1;
    } else {
      current = index;
    }
    slides[current].classList.add('dep-slide--active');
    
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
    
    renderAuthor(depoimentosData[current]);
    updateCounter(current);
  }

  // Init
  renderAuthor(depoimentosData[0]);
  updateCounter(0);
  if (prevBtn) prevBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });

  // Touch swipe
  let touchStartX = 0;
  stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(current + 1);
      else if (diff < 0) goTo(current - 1);
      resetAutoplay();
    }
  });

  let autoTimer;
  function resetAutoplay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
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
        servicoSelect.style.color = 'var(--grafite)';
      } else {
        servicoSelect.style.color = 'rgba(44, 44, 42, 0.65)';
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

      // Monta a mensagem estruturada em lista conforme as regras da Skill AG5
      let textMessage = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n`;
      textMessage += `\n- E-mail: ${email}`;
      textMessage += `\n- Telefone: ${telefone}`;
      textMessage += `\n- Serviço: ${servico}`;
      if (mensagem) {
        textMessage += `\n- Mensagem: ${mensagem}`;
      }

      // Abre a API do WhatsApp com redirecionamento limpo
      const waUrl = `https://wa.me/5521964517864?text=${encodeURIComponent(textMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // UX Premium: Oculta formulário e exibe tela de sucesso
      form.style.display = 'none';
      success.classList.add('active');
    }
  });
}

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)

   Timeline:
     • t=0s  → usuário chega na 3ª seção (ID_SECAO_GATILHO) → botão verde aparece imediatamente
     • t=25s → balão sobe ("digitando..." por 2.5s → mensagem real)
     • t=40s → balão some automaticamente (visível por 15s)
     • t=45s → badge vermelho "1" aparece (5s depois de sumir) — só em nicho tranquilo

   Se o usuário fechar manualmente: badge aparece 5s depois (tranquilo) ou nada (rigoroso).
   Se o usuário clicar no botão WhatsApp: tudo é limpo (sem badge), abre wa.me.
─────────────────────────────────────────────── */
(function initWaPremium() {
  // ─── CONFIGURAÇÃO POR PROJETO ───
  const MODO_COMPLIANCE = true; // true = nicho rigoroso (advocacia/médico/contábil) → SEM badge
                                // false = nicho tranquilo (beleza/varejo/gastronomia) → COM badge

  const bubble        = document.getElementById('wa-message-bubble');
  const typing        = document.getElementById('wa-typing');
  const realMessage   = document.getElementById('wa-real-message');
  const badge         = document.getElementById('wa-notification');
  const closeBtn      = document.getElementById('wa-close-btn');
  const mainBtn       = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('servicos') || document.body;

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO            = 25000; // 25s após entrar na seção
  const DURATION_TYPING        = 2500;  // 2.5s de "digitando..."
  const DURATION_BALAO_VISIVEL = 15000; // 15s exibido depois de aparecer
  const DELAY_BADGE_APOS_SUMIR = 5000;  // 5s após sumir → badge

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        // Botão flutuante aparece imediatamente
        mainBtn.classList.add('visible');

        // t=25s → balão sobe
        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          // 2.5s de "digitando..." → mensagem real (via classes utilitárias, sem inline style)
          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          // t=40s → balão some automaticamente
          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');

            // t=45s → badge "1" aparece (só se NÃO for Compliance)
            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    // Badge pós-close: só em nicho tranquilo
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });
})();

// ===== GALERIA DE IMAGENS PREMIUM (Nosso Espaço) =====
function initPremiumGallery() {
  // Modelo de grid com exibição estática das imagens, sem necessidade de acordeão
  return;
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

  window.openVideoModal = function(src, startTime) {
    // Pausar todos os outros vídeos da página
    document.querySelectorAll('video').forEach(otherVideo => {
      if (otherVideo !== modalVideo) otherVideo.pause();
    });

    const begin = (typeof startTime === 'number' && isFinite(startTime)) ? startTime : 0;
    modalVideo.src = src;
    modalVideo.muted = false; // Começar com som ativado para uma experiência premium
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll no fundo

    // Abre no mesmo ponto do vídeo de origem (regra Link 360: ampliar continua de onde parou)
    const seekAndPlay = () => {
      try { modalVideo.currentTime = begin; } catch (e) {}
      modalVideo.play().catch(() => {});
      modalVideo.removeEventListener('loadedmetadata', seekAndPlay);
    };
    if (modalVideo.readyState >= 1) seekAndPlay();
    else modalVideo.addEventListener('loadedmetadata', seekAndPlay);
  };
}

// ===== LOCALIZAÇÃO: TABS (MAPA / VÍDEO COMO CHEGAR) =====
function initLocalizacaoTabs() {
  const tabs = document.querySelectorAll('.loc-tab-btn');
  const mapaFrame = document.getElementById('locTabContent-mapa');
  const videoFrame = document.getElementById('locTabContent-video');
  const videoEl = videoFrame ? videoFrame.querySelector('video') : null;

  if (!tabs.length || !mapaFrame || !videoFrame) return;

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      if (target === 'mapa') {
        videoFrame.style.display = 'none';
        mapaFrame.style.display = 'block';
        if (videoEl) videoEl.pause();
      } else {
        mapaFrame.style.display = 'none';
        videoFrame.style.display = 'block';
      }
    });
  });
}

// ===== BLOG POST (player inline do vídeo + compartilhar) =====
function initBlogPost() {
  // Player inline: toca na própria página (sem pop-up). Clique no vídeo = play/pause.
  // Overlay com botão de som (mute/unmute) e ampliar (abre o modal global no mesmo tempo).
  document.querySelectorAll('.blog-post-video').forEach(box => {
    const video = box.querySelector('video');
    if (!video) return;

    const btnSound = box.querySelector('.bpv-sound');
    const btnExpand = box.querySelector('.bpv-expand');

    video.muted = true;
    video.setAttribute('playsinline', '');
    box.classList.add('is-paused');

    function syncSoundIcon() {
      if (!btnSound) return;
      btnSound.classList.toggle('muted', video.muted);
      btnSound.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Desativar som');
    }

    function play() {
      // Mutex de mídia: pausa qualquer outro vídeo da página
      document.querySelectorAll('video').forEach(o => { if (o !== video) o.pause(); });
      video.play().then(() => {
        box.classList.add('is-playing');
        box.classList.remove('is-paused');
      }).catch(() => {});
    }
    function pause() {
      video.pause();
      box.classList.remove('is-playing');
      box.classList.add('is-paused');
    }
    function toggle() { if (video.paused) play(); else pause(); }

    // Clique em qualquer área do vídeo = play/pause (ignora os botões do overlay)
    box.addEventListener('click', (e) => {
      if (e.target.closest('.bpv-controls')) return;
      toggle();
    });

    video.addEventListener('ended', () => { box.classList.remove('is-playing'); box.classList.add('is-paused'); });

    // Botão de som (mute/unmute). Ao ativar o som com o vídeo parado, já começa a tocar.
    if (btnSound) {
      btnSound.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (!video.muted && video.paused) play();
        syncSoundIcon();
      });
    }

    // Botão ampliar: abre o modal global no mesmo ponto do vídeo
    if (btnExpand) {
      btnExpand.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = video.querySelector('source') ? video.querySelector('source').src : video.currentSrc;
        const at = video.currentTime || 0;
        pause();
        if (window.openVideoModal) window.openVideoModal(src, at);
      });
    }

    syncSoundIcon();
  });

  // FAQ accordion do post (1 aberto por vez)
  const faqItems = document.querySelectorAll('.blog-post-faq .blog-faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.blog-faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Botão copiar link
  const copyBtn = document.querySelector('.blog-share-btn.copy');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const url = window.location.href;
      const done = () => {
        copyBtn.classList.add('copied');
        copyBtn.setAttribute('aria-label', 'Link copiado');
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.setAttribute('aria-label', 'Copiar link');
        }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(() => {});
      } else {
        const ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }
}

// ===== PLAYER DOS VÍDEOS DO SITE (hero + sobre): som + ampliar + clique play/pause =====
function initSiteVideoPlayer() {
  document.querySelectorAll('[data-siteplayer]').forEach(wrap => {
    const video = wrap.querySelector('video');
    if (!video) return;

    const btnSound = wrap.querySelector('.sv-sound');
    const btnExpand = wrap.querySelector('.sv-expand');

    // Mantém o autoplay mudo em loop (quando houver); o controle é por cima
    video.muted = true;

    function syncSoundIcon() {
      if (!btnSound) return;
      btnSound.classList.toggle('muted', video.muted);
      btnSound.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Desativar som');
    }

    // Mostra/esconde o indicador de play conforme o estado (para vídeos sem autoplay)
    function syncState() {
      wrap.classList.toggle('is-playing', !video.paused);
      wrap.classList.toggle('is-paused', video.paused);
    }
    video.addEventListener('play', syncState);
    video.addEventListener('pause', syncState);
    syncState();

    // Clique em qualquer área do vídeo = play/pause (ignora os botões do overlay)
    wrap.addEventListener('click', (e) => {
      if (e.target.closest('.sv-controls')) return;
      if (video.paused) {
        document.querySelectorAll('video').forEach(o => { if (o !== video) o.pause(); });
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    // Som: ao ativar, pausa outros vídeos com som; se estava pausado, retoma
    if (btnSound) {
      btnSound.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (!video.muted) {
          document.querySelectorAll('video').forEach(o => { if (o !== video) { o.muted = true; } });
          if (video.paused) video.play().catch(() => {});
        }
        syncSoundIcon();
      });
    }

    // Ampliar: abre o modal global no mesmo ponto do vídeo
    if (btnExpand) {
      btnExpand.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = video.querySelector('source') ? video.querySelector('source').src : video.currentSrc;
        const at = video.currentTime || 0;
        video.pause();
        if (window.openVideoModal) window.openVideoModal(src, at);
      });
    }

    syncSoundIcon();
  });
}

// ===== HERO VIDEO: LOOP ANTECIPADO (CORTE DE 2 SEGUNDOS) =====
function initHeroVideoLoop() {
  const heroVideo = document.querySelector('.composition-main-image');
  if (!heroVideo) return;

  // Desativamos o loop nativo para ter controle sobre a re-inicialização antecipada
  heroVideo.removeAttribute('loop');

  heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.duration) {
      // Reinicia o vídeo 2 segundos antes do final
      if (heroVideo.currentTime >= heroVideo.duration - 2) {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
      }
    }
  });

  // Evento de segurança caso haja lentidão no trigger do timeupdate
  heroVideo.addEventListener('ended', () => {
    heroVideo.currentTime = 0;
    heroVideo.play().catch(() => {});
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderServicos();
  renderServicosPage();
  renderDepoimentos();
  renderFAQ();
  initObservers();
  initForm();
  initPremiumGallery();
  initVideosCarousel();
  initCustomVideoControls();
  initVideoModal();
  initLocalizacaoTabs();
  initBlogPost();
  initHeroVideoLoop();
  initSiteVideoPlayer();
});
