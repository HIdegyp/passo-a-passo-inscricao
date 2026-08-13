# Formulário multi-etapas — Inscrição

Wizard de inscrição em **4 etapas** + tela de confirmação, inspirado no desafio [Multi-step form](https://www.frontendmentor.io/challenges/multistep-form-YVUcWY6H6) do Frontend Mentor. Interface em português, feita com HTML, CSS e JavaScript puro — sem frameworks.

**Repositório:** [github.com/HIdegyp/passo-a-passo-inscricao](https://github.com/HIdegyp/passo-a-passo-inscricao)

---

## Visão geral

O usuário percorre um fluxo completo de assinatura:

1. **Informações pessoais** — nome, e-mail e telefone com validação  
2. **Escolher plano** — Arcade, Advanced ou Pro + cobrança mensal/anual  
3. **Extras** — serviço online, armazenamento e perfil personalizável  
4. **Resumo** — revisão dos valores, alteração de plano e confirmação  
5. **Obrigado** — feedback visual de assinatura confirmada  

A navegação é centralizada em uma única função (`setStep`), que sincroniza a sidebar, os painéis e o resumo dinâmico.

---

## Funcionalidades

| Recurso | Descrição |
| --- | --- |
| Navegação por etapas | Avançar via `submit` dos forms; voltar via botões `data-prev` |
| Validação do passo 1 | Campos obrigatórios + regex de e-mail; erros limpam ao digitar |
| Toggle mensal/anual | Atualiza preços, labels, `aria-checked` e bônus “2 meses grátis” |
| Resumo dinâmico | Calcula total a partir do plano e extras selecionados |
| Atalho “Alterar” | Volta direto ao passo 2 para mudar o plano |
| Tela de sucesso | Ícone e mensagem com animação sutil ao confirmar |
| Layout responsivo | Desktop (sidebar lateral) e mobile (steps no topo) |
| Acessibilidade | `aria-current`, `aria-invalid`, `aria-live`, `role="switch"` |

---

## Tecnologias e recursos utilizados

### Core
- **HTML5** — semântica (`main`, `aside`, `form`, `fieldset`, `legend`)
- **CSS3** — Flexbox, Grid, custom properties (design tokens), media queries
- **JavaScript (ES6+)** — DOM API, eventos, `dataset`, `requestAnimationFrame`

### Tipografia e assets
- **[Google Fonts — Ubuntu](https://fonts.google.com/specimen/Ubuntu)** (400 / 500 / 700)
- **SVG** — ícones de planos, check, thank-you e backgrounds da sidebar

### Padrões e práticas
- **BEM** na nomenclatura de classes (`.plan-card__price`, `.summary__addon`)
- **Mobile-first / desktop adaptado** com breakpoint dedicado
- **Validação customizada** (`novalidate` + mensagens próprias)
- **Preços no HTML** via `data-price-monthly` / `data-price-yearly` — o JS só sincroniza a UI
- **CSS transitions** na tela de agradecimento (fade + translateY)

### Ferramentas de desenvolvimento
- Editor / fluxo com **Cursor**
- Versionamento com **Git** + **GitHub**
- Specs e design system documentados em `/docs`

---

## Estrutura do projeto

```text
passo-a-passo-inscricao/
├── index.html              # Markup das 4 etapas + thank-you
├── js/
│   └── script.js           # Navegação, validação, billing e resumo
├── src/
│   ├── css/
│   │   └── style.css       # Tokens, layout, componentes, responsivo
│   └── assets/
│       └── images/         # Ícones e backgrounds SVG
├── docs/                   # Specs por etapa e design system
└── README.md
```

---

## Como executar

Não há build nem dependências de npm. Basta servir os arquivos estáticos:

```bash
# Opção 1 — abrir direto no navegador
open index.html

# Opção 2 — servidor local (Python)
python3 -m http.server 5500
```

Depois acesse `http://localhost:5500`.

> Dica: um servidor local evita restrições de alguns navegadores ao abrir `file://`.

---

## Arquitetura do JavaScript

| Função | Responsabilidade |
| --- | --- |
| `setStep(step)` | Clamp 1–4; sincroniza sidebar e painéis; chama `renderSummary` no passo 4 |
| `validateStep1(form)` | Valida nome, e-mail e telefone; retorna `true` / `false` |
| `setFieldError` / `clearFieldError` | UI de erro (`.field--error`, texto, `aria-invalid`) |
| `isYearlyBilling` / `syncBillingUI` | Estado e UI da cobrança mensal/anual |
| `parsePrice` / `renderSummary` | Extrai valores e monta o resumo + total |
| `showThankYou` | Esconde os steps e anima a tela de confirmação |

Fluxo resumido:

```text
Controles (Voltar / Submit / Alterar / Confirmar)
        ↓
   setStep(n)  ──►  sidebar + painéis
        ↓
   n === 4  ──►  renderSummary()
        ↓
   Confirmar  ──►  showThankYou()
```

---

## Destaques de CSS

- **Design tokens** em `:root` (cores, raios, sombra, medidas do card)
- Sidebar com background SVG (desktop e mobile)
- Cards de plano e extras com estados via `:checked` + pseudo/adjacente
- Barra de ações fixa no rodapé em viewports estreitas
- Tela `.thank-you` com entrada suave do ícone e do texto

---

## Acessibilidade

- Stepper com `aria-current="step"` no item ativo  
- Switch de billing com `role="switch"` e `aria-checked`  
- Erros de formulário com `aria-invalid` e `aria-live="polite"`  
- Textos auxiliares com `.visually-hidden` (legends e label do switch)  
- Foco visível (`:focus-visible`) em botões e controles  

---

## Créditos

- Desafio de UI baseado no **Frontend Mentor — Multi-step form**  
- Tipografia: **Ubuntu** (Google Fonts)  
- Implementação e localização em português: projeto pessoal  

---

## Licença

Uso livre para portfólio e estudos. Se for publicar uma solução do Frontend Mentor, siga as [regras da plataforma](https://www.frontendmentor.io/solution-guide) para créditos.
