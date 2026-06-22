# LEIA ANTES DE MEXER — Estrutura do site Philos Assessoria Contábil

Este arquivo é o primeiro a ser lido por qualquer IA (ou pessoa) antes de criar ou editar
uma página deste projeto. Evita os erros recorrentes (footer invisível, nav com caminho
errado, página sem cookie/drawer, grid quebrado). Mora em `Docs/`, não vai pro ar.

---

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade ({{BASE}}) |
|---|---|---|
| `index.html` | raiz | `` (home, usa `#secao`) |
| `servicos.html` | raiz | `` |
| `termos-e-condicoes.html` | raiz | `` |
| `politica-de-privacidade.html` | raiz | `` |
| `blog/index.html` | `blog/` | `../` (Blog no nav = `index.html`) |
| `blog/<slug>.html` (posts) | `blog/` | `../` (links entre posts são relativos à pasta) |

---

## 2. Template canônico (ponto de partida obrigatório)

Página NOVA começa copiando os blocos de **`Docs/_nav-footer-template.html`**:
nav + footer + drawer mobile + cookie LGPD + scripts. NÃO copiar de outra página
qualquer (pode estar desatualizada). O template é a fonte única de verdade.

Trocar o placeholder `{{BASE}}`:
- Página na **raiz** → `{{BASE}}` = `` (vazio). Ex: `href="index.html"`, `src="Assets/x.webp"`.
- Página em **subpasta** (`blog/`) → `{{BASE}}` = `../`. Ex: `href="../index.html"`, `src="../Assets/x.webp"`.

---

## 3. Caminhos por profundidade (regra crítica)

| Recurso | Raiz | Em `blog/` |
|---|---|---|
| CSS | `style.css` | `../style.css` |
| Cookie CSS | `cookie-banner.css` | `../cookie-banner.css` |
| JS | `script.js` | `../script.js` |
| Cookie JS | `cookie-banner.js` | `../cookie-banner.js` |
| Assets | `Assets/...` | `../Assets/...` |
| Home | `index.html` | `../index.html` |
| Blog (índice) | `blog/` | `index.html` |
| Política | `politica-de-privacidade.html` | `../politica-de-privacidade.html` |

URLs absolutas (canonical, og:url, schema, share) sempre com o domínio completo:
`https://www.philoscontabil.com.br/blog/<slug>.html` e `/blog/` para o índice.

---

## 4. Itens obrigatórios em TODA página

- [ ] Nav idêntico ao do template (logo, links, hamburger `#navToggle`).
- [ ] Footer idêntico (4 colunas, contatos, social, créditos AG5).
- [ ] Drawer mobile (`#mobileOverlay` + `#mobileDrawer`) + funciona ao clicar no hamburger.
- [ ] Cookie LGPD: banner `#ck-banner` + modal `#ck-modal` + botão `#ck-prefs-btn` + `cookie-banner.js`.
- [ ] `script.js` antes de `</body>` (libs antes dele, `cookie-banner.js` depois).
- [ ] `<head>`: charset, viewport, canonical, `style.css`, `cookie-banner.css`, favicon.
- [ ] SEO: description, og/twitter, geo tags, JSON-LD (ver Skill-SEO e Skill-Schema).

---

## 5. Armadilhas conhecidas deste projeto (não repetir)

- **Footer invisível em termos/política:** as regras `body.subpage p/li/h2/h3/ul/section/.last-updated`
  são escopadas para **`body.subpage main`** (não o body inteiro). Se voltar a `body.subpage p`,
  o texto do footer herda grafite escuro e SOME no fundo verde. (Bug real 2026-06, já corrigido.)
- **Grid do blog quebrado:** ao remover elementos por regex multilinha (ex: tirar o ícone de play
  do card), pode comer os fechamentos `</a></div></div></section></main>` e o `.blog-grid` "engole"
  footer/cookie como se fossem cards. Sempre conferir o balanceamento de tags depois de regex.
- **Página sem drawer/cookie:** posts gerados por agente a partir de template antigo nasceram sem
  drawer/banner. Toda página tem que ter os 4 blocos do template. (Corrigido 2026-06.)
- **JS que quebra em página secundária:** funções do `script.js` devem ter guarda de null
  (`if (!el) return`) porque nem toda página tem todos os elementos (ex: drawer só existe se houver
  o markup). Listeners globais protegidos com `if (navToggle && mobileOverlay && mobileDrawer)`.
- **Cards do blog:** capa é `<img>` (foto Pexels ou capa gerada), NÃO `<video>`. Vídeo fica só
  DENTRO do post (player inline com som/ampliar). Ver Skill-Blog.

---

## 6. Como verificar antes de entregar

1. Render no navegador: footer legível (textos claros no fundo verde), hamburger abre o drawer,
   cookie banner aparece.
2. Links do nav com a profundidade certa para a pasta da página.
3. Sem 404 de CSS/JS/imagem no console; sem `<script>` duplicado.
4. `</body>`/`</html>` únicos e tags balanceadas.

> Template = o código pra colar (`_nav-footer-template.html`).
> README = as regras pra não errar (este arquivo). Os dois ficam em `Docs/`, nunca vão pro ar.
