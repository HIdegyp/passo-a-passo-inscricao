# Spec — Step 2: Select Plan

## Visão geral
Segunda etapa de um formulário multi-etapas (wizard) de 4 passos. Layout dividido em sidebar de navegação (esquerda) e área de conteúdo (direita), dentro de um card centralizado sobre fundo neutro claro.

---

## 1. Estrutura do Card Principal
- Container branco, cantos arredondados (`border-radius` grande, ~16–24px)
- Sombra suave (`box-shadow`) para efeito de elevação
- Centralizado horizontalmente na viewport
- Largura fixa/máxima (desktop), fundo da página em azul muito claro

**Layout interno:** duas colunas
- Coluna esquerda (sidebar): largura fixa, menor
- Coluna direita (conteúdo): largura flexível, maior

---

## 2. Sidebar de Navegação

### Container
- Fundo: azul-violeta sólido (roxo/indigo)
- Cantos arredondados apenas nos lados externos (topo-esquerda e base-esquerda), acompanhando o card
- Altura: 100% do card
- Padding interno generoso

### Lista de Steps (1–4)
Cada item contém:
| Elemento | Descrição |
|---|---|
| Indicador numérico | Círculo com número, alinhado à esquerda |
| Label pequeno | "STEP X" — texto pequeno, cor secundária (cinza-azulado claro) |
| Título | Nome do passo em maiúsculas, bold, cor branca |

**Steps:**
1. Step 1 — Your Info
2. Step 2 — Select Plan *(ativo)*
3. Step 3 — Add-ons
4. Step 4 — Summary

### Estados do indicador numérico
- **Inativo (padrão):** círculo com apenas borda (outline), fundo transparente, número branco
- **Ativo (atual):** círculo com fundo azul claro sólido, número em azul escuro/marinho — contraste forte para indicar "você está aqui"
- **Concluído** *(comportamento esperado, não visível no print atual)*: possivelmente ícone de check ou fundo diferenciado

### Elemento decorativo (rodapé da sidebar)
- Formas orgânicas abstratas (blobs) sobrepostas na parte inferior:
  - Círculo sólido laranja (canto inferior esquerdo)
  - Blob rosa/coral (canto inferior direito, formato irregular)
  - Pequenos traços/riscos brancos decorativos sobre os blobs
- Puramente estético, sem função interativa
- Deve respeitar o `overflow: hidden` do container para não vazar do card

---

## 3. Área de Conteúdo (Direita)

### Cabeçalho
- **Título (H1):** "Select your plan" — grande, bold, cor azul-marinho escuro
- **Subtítulo:** "You have the option of monthly or yearly billing." — texto menor, cor cinza

### Cards de Planos
Grid horizontal com 3 cards de mesma largura, espaçados igualmente.

**Estrutura de cada card:**
| Elemento | Descrição |
|---|---|
| Ícone | Círculo colorido com ícone branco centralizado no topo |
| Nome do plano | Texto bold, cor azul-marinho |
| Preço | Texto secundário, cor cinza, formato "$X/mo" |

**Planos:**
1. **Arcade** — ícone laranja (pessoa) — $9/mo
2. **Advanced** — ícone rosa/coral (cartão) — $12/mo
3. **Pro** — ícone azul (controle de videogame) — $15/mo

**Estados do card:**
- **Padrão:** borda cinza clara, fundo branco
- **Selecionado:** borda azul destacada (cor de destaque/primária), possivelmente leve alteração de fundo — no print, "Arcade" está selecionado
- **Hover** *(comportamento esperado)*: leve destaque de borda/sombra

### Toggle Monthly / Yearly
- Container: barra horizontal com fundo cinza muito claro, cantos arredondados, padding interno
- Conteúdo, da esquerda para direita:
  - Label "Monthly" (texto bold quando ativo)
  - Switch estilo iOS (fundo azul-marinho escuro quando "Monthly" ativo, bolinha branca à esquerda)
  - Label "Yearly" (texto cinza claro quando inativo)
- Ao alternar, os preços dos planos devem atualizar (comportamento esperado, não visível neste estado)

### Rodapé de Navegação
- Alinhado nas extremidades (space-between)
- **Esquerda:** "Go Back" — link/texto simples, sem ênfase, cor cinza
- **Direita:** botão "Next Step" — fundo azul-marinho escuro sólido, texto branco, bold, cantos arredondados, padding confortável (aparência de CTA primário)

---

## 4. Paleta de Cores (referência aproximada)

| Uso | Cor |
|---|---|
| Fundo da página | Azul muito claro |
| Sidebar | Roxo/Indigo (~#4F46E5 aprox.) |
| Indicador ativo | Azul claro (~#93C5FD aprox.) |
| Texto títulos | Azul-marinho escuro (~#0F1E3D aprox.) |
| Texto secundário | Cinza médio |
| Ícone Arcade | Laranja |
| Ícone Advanced | Rosa/Coral |
| Ícone Pro | Azul índigo |
| Botão primário | Azul-marinho escuro |
| Bordas padrão | Cinza claro |
| Borda selecionada | Azul (mesma família do indicador ativo) |

---

## 5. Tipografia
- Fonte sans-serif, estilo geométrico/moderno
- Títulos: bold/extrabold
- Labels pequenos (STEP X): uppercase, letter-spacing levemente aumentado, peso regular/medium
- Corpo de texto: peso regular, cor neutra

---

## 6. Responsividade (considerações)
*(não visível no print — desktop apenas, mas recomendações gerais)*
- Em telas menores, sidebar pode colapsar para topo (stepper horizontal) ou virar accordion
- Cards de planos devem empilhar verticalmente em mobile
- Toggle e botões devem manter área de toque adequada (mínimo ~44px)

---

## 7. Acessibilidade (recomendações)
- Steps devem ter `aria-current="step"` no item ativo
- Cards de plano devem ser `role="radio"` dentro de um `radiogroup`, navegáveis por teclado
- Toggle Monthly/Yearly deve ser um `switch` acessível com `aria-checked`
- Contraste de texto sobre a sidebar roxa deve ser validado (WCAG AA)