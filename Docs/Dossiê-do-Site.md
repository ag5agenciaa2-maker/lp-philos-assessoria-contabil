Quero que você crie o Site institucional "Editorial Contábil — Split Numerado" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho contábil/escritório/equipe corporativa caso não haja imagens reais (a empresa enviou apenas a logo e 10 vídeos institucionais — usar os vídeos nas seções de vídeo/encantamento). Inclua URLs diretas das imagens.
IDENTIDADE VISUAL BASE:

Paleta: Verde profundo institucional #004030 (primária) · Verde médio #005030 (apoio) · Vinho/Bordô #800000 (acento de destaque) · Off-white #F7F5F1 (fundo) · Cinza grafite #2B2B2B (texto) · Cinza claro #D9D6CF (bordas/divisores)
Tipografia: Títulos em "Fraunces" ou "Spectral" (serifada editorial, peso 500–600); Corpo em "Inter" ou "Manrope" (sans-serif neutra, peso 400–500)
Estilo: Editorial corporativo sóbrio com toques clássicos — serifa nos títulos, numeração grande como elemento gráfico, generoso espaço em branco, divisores finos
Sensação: Confiança, solidez, tradição e cuidado — "um contador em quem você pode confiar"

LAYOUT ESCOLHIDO:

Hero: Opção A — Split assimétrico 55/45. Texto à esquerda (título serifado grande, subtítulo, dois CTAs: WhatsApp e "Conheça a Philos"), à direita imagem/vídeo institucional com clip-path diagonal sutil. Entrada em sequência: título sobe → subtítulo sobe → CTAs aparecem → mídia revela com clip-path.
Serviços: Opção F — Numeração grande (01, 02, 03...) como elemento visual. Lista de serviços com número em serifa de grande dimensão à esquerda e descrição à direita, divisores finos entre itens. (18 serviços — agrupar em blocos temáticos: Abertura & Legalização, Departamentos, Tributário & Financeiro, Regularização).
Depoimentos: Opção E — Carrossel fade + nota Google visível (5,0 ★ com 30 avaliações).
Sobre/Credenciais: Opção A — Counters animados (30 avaliações Google, nota 5,0, abrangência Brasil todo, 18+ serviços) + texto curto institucional.

ANIMAÇÕES DO PROJETO (do breakdown Webflow):

Hero título → de opacity:0, translateY(40px) para opacity:1, translateY(0) em 700ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load
Hero subtítulo + CTAs → mesmo movimento, stagger de 120ms entre elementos, trigger: load
Hero mídia → clip-path de inset(0 0 100% 0) para inset(0 0 0% 0) em 900ms, easing: cubic-bezier(0.65,0,0.35,1), trigger: load (delay 200ms)
Navbar → background de transparente para #F7F5F1 com sombra leve ao rolar > 80px, transição 300ms
Números de serviço (01,02...) → de opacity:0, translateX(-30px) para opacity:1, translateX(0) em 600ms, stagger: sim (100ms), trigger: scroll (IntersectionObserver)
Counters do Sobre → contagem incremental de 0 ao valor final em 1800ms, easing linear, trigger: scroll
Cards de serviço/seções → de opacity:0, translateY(30px) para opacity:1, translateY(0) em 600ms, trigger: scroll, stagger: sim
Depoimentos → fade-cross de 500ms entre slides, troca automática a cada 6s
Hover em CTAs → background de #004030 para #800000 em 250ms, easing: ease-out

SEÇÕES OBRIGATÓRIAS (intercalar todas e adicionar novas conforme o nicho):

Navbar
Hero [Split assimétrico 55/45]
Seção de alto impacto: dor e solução do público-alvo
Serviços/Produtos [Numeração grande 01, 02, 03...]
Seção de encantamento com vídeos institucionais da Philos (ambiente e apresentação)
Sobre/Credenciais [Counters animados + texto curto]
Depoimentos [Carrossel fade + nota Google]
Seção de avaliações Google com logo oficial e cards animados
FAQ
Localização: endereço + mapa (iframe fornecido) + Tour Virtual Google + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome "Philos Assessoria Contábil" → link Google Business: https://share.google/K7e6qTWmjBdMr5dp3
Endereço → link Google Maps rota (fornecido no dossiê)
Telefone fixo: (21) 2667-1159 → tel:02126671159
WhatsApp: (21) 96451-7864 → https://wa.me/5521964517864
Instagram: @philosassessoriacontabil → https://www.instagram.com/philosassessoriacontabil/
Facebook → https://www.facebook.com/PhilosAssessoriaContabil/

CRÉDITOS:

Esquerda: © Philos Assessoria Contábil 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor principal #004030, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza (usar verde + vinho + off-white)
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real

OPCIONAL (faz sentido para o nicho):

Barra animada horizontal (marquee): "Philos Assessoria Contábil • Atendimento em todo o Brasil • Contabilidade • Departamento Pessoal • Consultoria Tributária •"
Seção de avaliações Google com logo oficial e cards animados (5,0 ★ — 30 avaliações)



1 — MÍDIAS PRINCIPAIS
MídiaStatusLogo (.webp)✅ Recebida — verde/vinho sobre fundo branco, símbolo do caduceu alado com monograma "Ph"Vídeos institucionais✅ 2 recebidos (de 10 informados) — falam sobre a Philos e mostram o ambiente do escritórioFoto da fachada❌ Não enviadaFotos internas❌ Não enviadasFotos da equipe❌ Não enviadasFotos dos proprietários❌ Não enviadas
Observação sobre quantidade declarada: o formulário indica 2 fotos (contando a logo) e 10 vídeos. Como há apenas 1 foto utilizável (logo) e os vídeos são o ativo visual principal, as seções devem ser direcionadas para vídeo: hero com vídeo institucional, seção de encantamento em galeria/grade de vídeos do ambiente, e uso de imagens Unsplash premium do nicho para complementar onde não houver mídia real. Os 8 vídeos restantes devem ser solicitados (ver checklist).

2 — INFORMAÇÕES DA EMPRESA
Nome: Philos Assessoria Contábil
Nicho: Escritório de contabilidade / Assessoria contábil / Consultoria empresarial e financeira
Descrição institucional: Empresa de prestação de serviços contábeis para todos os tipos de empresas do Brasil.
Proposta de valor: "Foque no que importa: CRESCER" — especialista em cuidar da empresa do cliente, permitindo que o empresário se concentre no crescimento do negócio.
Público-alvo: MEI; empresas do terceiro setor (associações, igrejas, ONGs); empresas do Lucro Presumido e Simples Nacional; médicos, dentistas, fisioterapeutas, psicólogos, advogados; comércios, lojas de veículos, farmácias; construtoras, empreiteiras; colégios; pessoas físicas. Atende todos os tipos de empresas e pessoas físicas.
História: Será enviada posteriormente por áudio no WhatsApp (pendente).
Principais serviços (18):
Legalização de empresas · Baixa de empresas · Alteração de empresas · Imposto de renda físico e jurídico · Enquadramento no Simples Nacional · Departamento Pessoal para empresas · Departamento Fiscal para empresas · Departamento Contábil para empresas · BPO Financeiro · Certificado Digital · Parcelamentos na Receita Federal · Parcelamentos Prefeitura · Parcelamentos na Fazenda Nacional · Emissão de Alvará de Funcionamento · Marcas e Patentes · Consultoria Financeira e Tributária · Planejamento Financeiro e Tributário · Reativação de CNPJ e Inscrição Estadual
Diferenciais (extraídos das avaliações e do perfil): Atendimento personalizado e cortês · Equipe atenciosa e competente · Soluções eficazes no prazo · Escritório bem localizado e estruturado no centro de Nova Iguaçu · Acompanhamento constante da rotina do cliente · Perfil Google verificado com nota máxima.
Contato:

Telefone: (21) 2667-1159
WhatsApp: (21) 96451-7864
E-mail: ❌ não informado
Endereço: Ed. Merkanbank — R. Otávio Tarquino, 74, Apartamento 602 — Centro, Nova Iguaçu - RJ, CEP 26215-342
Abrangência de atendimento: todo o Brasil
Horário: Seg. a Sex. 9h às 18h · Sáb., Dom. e Feriados: Fechado

Links:

Site atual: não possui site próprio (formulário). Há um link de help-site no PlePer: https://www.philosassessoria.aghelp.site/
Instagram: @philosassessoriacontabil — https://www.instagram.com/philosassessoriacontabil/ (284 posts · 403 seguidores)
Facebook: https://www.facebook.com/PhilosAssessoriaContabil/
LinkedIn: ❌ não informado
Google Business: https://share.google/K7e6qTWmjBdMr5dp3 · Link de avaliação: https://search.google.com/local/writereview?placeid=ChIJ83Wi3wZnmQARr9rIWObtJGA
Place ID: ChIJ83Wi3wZnmQARr9rIWObtJGA · CID: 6927923700390484655
Coordenadas: -22.75931780, -43.45097270

iframe do Mapa (fornecido):
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.16...!2sPhilos%20Assessoria%20Cont%C3%A1bil!5e0!3m2!1spt-BR!2sbr!4v1778716966331
iframe Tour Virtual Google (fornecido):
https://www.google.com/maps/embed?pb=!4v1778717041188!6m8!1m7!1sjsCMChlrQbZlMkOwBjSHTw!2m2!1d-22.75923350413134!2d-43.45110241266084!3f124.91785!4f0!5f0.7820865974627469
Documentação: CNPJ ❌ não informado · Registro CRC (Conselho Regional de Contabilidade) ❌ não informado · Data de abertura ❌ não informada.
Quantidade de Fotos e vídeos: 2 fotos (incluindo logo) · 10 vídeos — direcionar seções para vídeo.

3 — AVALIAÇÕES
Plataforma: Google · Total de avaliações: 30 · Nota média: 5,0 ★ (PlePer) · Contagem de fotos no perfil: 54
(Listagem das 11 avaliações fornecidas no dossiê. Todas com 5 estrelas — listadas por ordem de recência. Comentários do proprietário não constavam, nada removido.)
NomeTempoEstrelasTextoDaniele Nascimento (15 avaliações)2 meses atrás★★★★★A Philos é uma empresa bem localizada e estruturada, que se destaca pelo atendimento excelente e constante, acompanhando a rotina de trabalho da nossa empresa. Indicamos a Philos pela eficiência, qualidade e apoio ao crescimento, sempre com as melhores alternativas. Conhecemos a empresa por indicação e estamos muito satisfeitos com os serviços prestados. Esperamos que nossa parceria continue rendendo bons frutos.Gabriela Fogaça (1 avaliação)10 meses atrás★★★★★Atendimento de excelência, equipe de confiança e comprometida com o crescimento dos clientes.RODRIGO VELOSO (3 avaliações)1 ano atrás★★★★★Profissionais competentes, atendimento personalizado, soluções eficazes, equipe atenciosa e serviços de alta qualidade e prazo hábil. Recomendo!!!Jailson Leandro (Local Guide · 149 avaliações · 1495 fotos)1 ano atrás★★★★★Excelente! Escritório bem localizado, no centro de Nova Iguaçu. Atendimento cortês e simpático. Excelentes prestadores de serviço! Recomendo!Fatima Mayer (2 avaliações)1 ano atrás★★★★★Queremos deixar aqui o nosso muito obrigado e parabenizar a equipe de profissionais pelo excelente trabalho.Fábio Gonçalves da Mata (2 avaliações)1 ano atrás★★★★★Experiência maravilhosa. O melhor escritório de contabilidade da Baixada. Fica aqui minha indicação para quem quer um trabalho bem feito e ser bem atendido.Diana Figueiredo (3 avaliações)1 ano atrás★★★★★Philos Assessoria Contábil é uma excelente empresa, Maravilhosa, atendimento de primeira, exatidão no que tange a dúvidas esclarecimento e resolução, pronto atendimento, assertividade cem por cento. Comprometimento com o cliente. Parabéns!!!igor caruso (5 avaliações)1 ano atrás★★★★★Serviços sempre de excelência. Profissionais altamente capazes e estimulados a ajudar.Nova Carioca (1 avaliação)1 ano atrás★★★★★Ótima empresa e excelente atendimento. Todos muitos atenciosos e profissionais.celso neto (86 avaliações · 18 fotos)1 ano atrás★★★★★Ótimos profissionais. Um serviço de qualidade com valor justo.Eduardo Bruno Castilho (8 avaliações)1 ano atrás★★★★★Excelência nos serviços prestados, profissionalismo e competência estão em primeiro lugar. Philos Assessoria RECOMENDADA.

4 — ANÁLISE DE BRANDING
Nicho: Escritório de contabilidade / assessoria contábil multissetorial.
Posicionamento: Médio-premium. A empresa não compete por preço (o valor "varia conforme o serviço"), tem perfil Google verificado com nota máxima, escritório estruturado no centro comercial de Nova Iguaçu e linguagem de parceria estratégica ("foque em crescer"). O posicionamento ideal é o de assessoria de confiança e proximidade, não de commodity barata nem de fintech impessoal.
Estilo visual predominante: Editorial corporativo clean com toque clássico. A logo já estabelece o tom: caduceu alado (símbolo tradicional de sabedoria/comércio — "Philos" remete a "amor pelo saber"), tipografia serifada elegante, paleta verde + vinho. O site deve estender esse universo: serifa nos títulos, numeração tipográfica grande como recurso gráfico, muito espaço em branco, divisores finos. Evitar o visual genérico de fintech (azul + ícones flat).
Paleta de cores recomendada (códigos hex):

#004030 — Verde profundo (primária, extraída da logo)
#005030 — Verde médio (apoio/hover suave)
#800000 — Vinho/Bordô (acento de destaque, do monograma "Ph" da logo)
#F7F5F1 — Off-white quente (fundo principal)
#2B2B2B — Cinza grafite (texto corpo)
#D9D6CF — Cinza-areia claro (bordas e divisores)

Direção estética: "Editorial Contábil" — combinar a credibilidade tradicional da profissão contábil com um layout moderno e arejado. Numeração serifada de grande dimensão organiza os 18 serviços; o vinho aparece apenas em pontos de ação (CTAs, hovers, destaques numéricos) para criar contraste sofisticado contra o verde dominante.
Sensação de marca: Confiança, solidez, tradição cuidadosa e parceria — a sensação de "minha empresa está em boas mãos e posso me dedicar a crescer".
Referências de empresas premium do mesmo nicho: escritórios contábeis e firmas de advisory com identidade editorial (uso de serifa, paletas terrosas/verdes em vez de azul corporativo), templates premium Webflow do segmento financeiro como o Contabile (Lightning Lab) e Accountant X (BRIX Templates) — analisados na seção 6.

5 — CHECKLIST DE PENDÊNCIAS
Mídias:

❌ Foto da fachada do escritório
❌ Fotos internas do ambiente
❌ Fotos da equipe
❌ Fotos dos proprietários
⚠️ 8 dos 10 vídeos informados não foram enviados (apenas 2 recebidos)

Contatos:

❌ E-mail institucional

Links / Documentação:

❌ LinkedIn (se houver)
❌ CNPJ
❌ Número de registro no CRC (Conselho Regional de Contabilidade) — importante para credibilidade do nicho
❌ Data de abertura da empresa
❌ História da empresa (será enviada por áudio no WhatsApp)

Outros:

⚠️ Arquivo BASE_CONHECIMENTO_AG5.md não foi anexado a esta solicitação — não foi possível conferir combinações de layout já usadas pela AG5 em outros sites contábeis. Recomenda-se anexá-lo antes da construção para garantir diferenciação.
⚠️ FAQ: apenas 1 pergunta fornecida ("O valor varia de acordo com os serviços prestados"). Recomenda-se solicitar mais 3–4 perguntas frequentes reais.


6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

Templates reais acessados e analisados na home page. A regra de cores foi respeitada: usar exclusivamente a paleta do branding Philos (verde + vinho + off-white), aproveitando apenas estrutura, proporção e comportamento dos templates.

TEMPLATE 1 — Contabile
URL: https://webflow.com/templates/html/contabile-accounting-website-template · Preview: https://contabile-accountant-theme.webflow.io/

HERO: Layout de coluna única, título dominante "An Accountant You Can Count On" alinhado à esquerda no topo, parágrafo de apoio abaixo e um único CTA "Learn More". Elemento diferenciador: simplicidade total — sem imagem competindo com o texto, tipografia faz o trabalho visual. Animação de entrada: título e parágrafo surgem em sequência suave ao carregar.
NAV: Navbar fixa simples, logo à esquerda, links âncora (Home / Services / About / Contact) e um botão de destaque "Request A Quote" que abre modal. Hover sublinha discreto nos links.
TIPOGRAFIA: Títulos com sans-serif de peso forte, corpo em sans-serif neutra; hierarquia clara, H1 de grande dimensão (aprox. 3,5–4rem desktop), corpo ~1rem.
CORES (aplicar do branding Philos): Fundo #F7F5F1, títulos #2B2B2B, primária/CTA #004030, acento hover #800000.
SERVIÇOS/CARDS: 3 colunas iguais — ícone no topo, título e descrição curta (Start-Up Service / Accountancy / Consultancy). Espaçamento generoso, cards sem borda forte.
ANIMAÇÕES (formato técnico): cards de serviço → de opacity:0, translateY(20px) para opacity:1, translateY(0) em ~500ms, easing: ease-out, trigger: scroll, stagger: sim. Seções → fade suave de entrada ao scroll.
MICRO-INTERAÇÕES: hover em botões com mudança de cor de fundo; modal "Request A Quote" deslizante; hover sutil nos cards.
ELEMENTOS DECORATIVOS: Mínimos — ícones SVG simples nos serviços, assinatura manuscrita SVG na seção de citação do fundador. Visual limpo, sem blobs.
RESUMO CONSTRUTIVO: Para recriar este estilo na Philos, priorize uma página de respiração: muito espaço em branco sobre off-white, tipografia grande conduzindo a hierarquia, seção de citação do fundador com assinatura. Mantenha o hero simples e direto, mas — para fugir do genérico — substitua o hero de coluna única por um split assimétrico e troque a sans-serif por uma serifa editorial nos títulos, mantendo a sobriedade que torna o Contabile confiável.

TEMPLATE 2 — Accountant X (BRIX Templates)
URL: https://webflow.com/templates/html/accountantx-accounting-website-template · Preview Home V1: https://accountanttemplates.webflow.io/home-pages/home-v1

HERO: Hero com título grande "Expert accounting for better businesses" alinhado à esquerda, parágrafo de apoio, dois CTAs lado a lado ("Contact us" + "Browse all services") e imagens fotográficas de apoio (equipe/escritório). Elemento diferenciador: combinação de título tipográfico forte com fotografia real de pessoas, transmitindo proximidade. Entrada com fade + leve subida dos blocos.
NAV: Navbar com logo à esquerda, menu central (Home / About / Pages dropdown / Pricing) e botão "Contact us" destacado à direita. Comportamento sticky ao rolar; dropdown de páginas no hover.
TIPOGRAFIA: Títulos sans-serif de peso alto e geométrico, corpo sans-serif neutra; H1 desktop grande (~3,5rem+), uso consistente de pesos para hierarquia.
CORES (aplicar do branding Philos): o template usa verde como cor de marca — encaixa perfeitamente. Aplicar #004030 como verde principal, #800000 como acento de ação, fundo #F7F5F1, decorações em tom claro #D9D6CF.
SERVIÇOS/CARDS: Grade de 3 cards "All-in-one accounting services" com imagem-thumbnail no topo + título (Tax planning / Audit services / Financial consulting); abaixo, bloco de diferenciais com ícone + título + texto em 3 itens. Espaçamento amplo, cantos suavemente arredondados.
ANIMAÇÕES (formato técnico): blocos de seção → de opacity:0, translateY(30px) para opacity:1, translateY(0) em ~600ms, easing: ease-out, trigger: scroll, stagger: sim. Counters da seção "impactful numbers" → contagem incremental de 0 ao valor final ao entrar em viewport.
MICRO-INTERAÇÕES: hover em cards com leve elevação/sombra; hover em botões com transição de cor; cards de case study clicáveis com realce.
ELEMENTOS DECORATIVOS: formas geométricas SVG (quadrados com recorte interno) em verde, posicionadas como acentos atrás de seções; ilustração de globo na seção de números. Decorações discretas, nunca dominantes.
RESUMO CONSTRUTIVO: Para recriar este estilo na Philos, aproveite a estrutura forte: hero com dois CTAs (WhatsApp + conhecer), seção de números com counters animados, blocos de diferenciais com ícones, FAQ em acordeão e CTA final recorrente. Use as formas geométricas SVG verdes como acento sutil de fundo. Para diferenciar do template original e evitar o "3 colunas de ícone genérico", converta a lista de serviços em formato de numeração editorial grande (01, 02, 03...) e adote títulos serifados — isso dá personalidade própria mantendo a credibilidade corporativa do Accountant X.


7 — SISTEMA DE VARIAÇÃO DE LAYOUT

Escolhas registradas (consulta à BASE_CONHECIMENTO_AG5.md não foi possível — arquivo não anexado; recomenda-se conferência antes da construção).

HERO — escolhido:

 A) Split assimétrico 55/45 — texto à esquerda, mídia (vídeo/imagem institucional) com clip-path diagonal à direita
Justificativa: equilibra a força tipográfica editorial com o ativo de vídeo da Philos; foge do hero centralizado genérico.

SERVIÇOS — escolhido:

 F) Numeração grande (01, 02, 03...) como elemento visual
Justificativa: organiza com elegância os 18 serviços, reforça o estilo editorial e diferencia do "3 colunas de ícone" dos templates analisados.

DEPOIMENTOS — escolhido:

 E) Carrossel fade + nota Google visível
Justificativa: destaca a nota máxima (5,0 ★ / 30 avaliações) como prova social central.

SOBRE / CREDENCIAIS — escolhido:

 A) Counters animados + texto curto
Justificativa: traduz a reputação em números (30 avaliações, nota 5,0, abrangência nacional, 18+ serviços) sem depender de fotos da equipe, que não foram enviadas.


RESUMO DA ENTREGA
O dossiê está completo: informações organizadas, 11 avaliações estruturadas (todas 5★), análise de branding com paleta extraída diretamente da logo (verde #004030 + vinho #800000), breakdown de 2 templates Webflow reais e verificados do nicho contábil, sistema de variação com 4 escolhas registradas, e checklist de pendências. O modelo definido — "Editorial Contábil — Split Numerado" — está pronto no comando de criação no topo deste documento.
Atenção prioritária para o construtor: a empresa enviou apenas a logo como foto e 2 dos 10 vídeos — o site deve ser direcionado a vídeo (hero e seção de encantamento), complementando com imagens Unsplash premium do nicho. Antes da construção, recomenda-se obter os itens do checklist, em especial o e-mail, o registro CRC e o arquivo BASE_CONHECIMENTO_AG5.md para garantir diferenciação dos sites contábeis já criados pela AG5.