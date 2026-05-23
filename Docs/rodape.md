# Documentação Técnica do Rodapé Premium AG5

Esta documentação descreve os detalhes técnicos e a arquitetura visual do rodapé reestruturado para a landing page da **Philos Assessoria Contábil**, seguindo estritamente as diretrizes da **Skill Rodapé AG5**.

## 1. Estrutura de Arquivos e Código

O rodapé foi implementado de forma modular e integrada nos três arquivos principais do projeto:
- [index.html](file:///c:/Users/elyon/OneDrive%20-%20UVA/Documentos/AG5%20AGENCIA/00%20Processo%20Landing%20Pages/02%20-%20LP%20(Processando)/LP%20-%20Philos%20Assessoria%20Cont%C3%A1bil/index.html) - Landing page principal.
- [termos-e-condicoes.html](file:///c:/Users/elyon/OneDrive%20-%20UVA/Documentos/AG5%20AGENCIA/00%20Processo%20Landing%20Pages/02%20-%20LP%20(Processando)/LP%20-%20Philos%20Assessoria%20Cont%C3%A1bil/termos-e-condicoes.html) - Página jurídica de termos.
- [politica-de-privacidade.html](file:///c:/Users/elyon/OneDrive%20-%20UVA/Documentos/AG5%20AGENCIA/00%20Processo%20Landing%20Pages/02%20-%20LP%20(Processando)/LP%20-%20Philos%20Assessoria%20Cont%C3%A1bil/politica-de-privacidade.html) - Página jurídica de privacidade.
- [style.css](file:///c:/Users/elyon/OneDrive%20-%20UVA/Documentos/AG5%20AGENCIA/00%20Processo%20Landing%20Pages/02%20-%20LP%20(Processando)/LP%20-%20Philos%20Assessoria%20Cont%C3%A1bil/style.css) - Folha de estilos centralizada.

---

## 2. Padrões Visuais e Cores

O design baseia-se na sofisticação da marca seguindo a vertente Editorial Premium Light:
- **Cor de Fundo (Footer Background):** `var(--branco)` `#FFFFFF` (Fundo branco puro, que camufla rebarbas e contornos brancos presentes na logo recortada do cliente, garantindo um visual limpo e integrado).
- **Borda Superior:** `1px solid rgba(26, 107, 74, 0.15)` (Tom verde principal `--verde-principal` `#1A6B4A` com 15% de opacidade).
- **Títulos (h4):** `--verde-escuro` `#0F4A32`, com estilo uppercase, bold e letter-spacing aprimorado de `0.1em`.
- **Textos e Links:** `rgba(44, 44, 42, 0.75)` (Grafite atenuado) para excelente contraste e suavidade visual sobre fundo branco.
- **Hover:** Transição suave de `300ms ease` alterando a cor do link para o verde principal `--verde-principal` `#1A6B4A`.

---

## 3. Composição de Colunas (footer-main)

A grade distribui-se em 4 colunas em desktop, reorganizando-se de forma fluida nos demais dispositivos:

1. **Coluna 1 — Marca (`.footer-brand`):**
   - Logo horizontal Philos (máximo `220px` desktop / `180px` mobile).
   - Descrição sucinta dos serviços.
   - Links sociais com efeito hover de elevação vertical (`translateY(-2px)`) e alteração para cor dourada.
2. **Coluna 2 — Serviços (`.footer-links`):**
   - Links âncoras dinâmicos para a seção de serviços da landing page (com compatibilidade de redirecionamento relativo nas subpáginas: `index.html#servicos`).
3. **Coluna 3 — Links Úteis (`.footer-links`):**
   - Menu de navegação interna estruturada.
4. **Coluna 4 — Contato (`.footer-contact`):**
   - **Ordem exata e obrigatória respeitada:**
     1. Nome da empresa (ícone SVG de edifício).
     2. Endereço com link ativo apontando para o Google Maps (ícone SVG de localização).
     3. Telefone/WhatsApp com link ativo wa.me (ícone SVG oficial do WhatsApp).
     4. Telefone fixo (ícone SVG de fone clássico).

---

## 4. Rodapé Inferior (footer-bottom)

- **Copyright:** Alinhado à esquerda: `© 2026 Philos Assessoria Contábil`.
- **Links Legais:** Cookies (integrado ao painel do cookie banner via JS nativo), Termos e Condições, e Política de Privacidade.
- **Crédito AG5:** Alinhado à direita: `Desenvolvido por AG5 Agência` apontando para o site oficial da agência.
- **Custom Cookie Switch:** Ícone estilizado simulando um interruptor (switch) de preferências de cookies ativo na própria linha, sem códigos pesados de terceiros.

---

## 5. Responsividade e overrides Mobile

Para telas abaixo de `767px`, aplicamos overrides estritos com a tag `!important` para anular paddings e margens customizados de desktop, garantindo:
- Alinhamento do conteúdo 100% à esquerda.
- Grid de 1 coluna vertical fluida.
- Padding lateral ajustado para `25px`.
