# Spec — Step 3: Pick Add-ons

## Visão geral
Terceira etapa do wizard de 4 passos. Mantém a mesma estrutura base do Step 2 (sidebar + conteúdo), alterando apenas o conteúdo da coluna direita para uma lista de add-ons selecionáveis (checkboxes).

---

## 1. Estrutura do Card Principal
- Idêntica ao Step 2: container branco arredondado, sombra suave, centralizado, fundo da página azul claro
- Layout em duas colunas: sidebar (esquerda) + conteúdo (direita)

---

## 2. Sidebar de Navegação
Estrutura e estilo **idênticos ao Step 2** (mesmo componente reutilizado), com a única alteração sendo o estado ativo:

- **Step 3 (Add-ons)** agora está no estado **ativo**: círculo com fundo azul claro sólido, número em azul-marinho
- **Steps 1 e 2** voltam ao estado padrão (outline, sem preenchimento) — indicando que já foram visitados, mas sem indicação visual diferenciada de "concluído" (mesmo tratamento visual de "não ativo")
- **Step 4** permanece no estado padrão (ainda não alcançado)
- Elemento decorativo (blobs laranja/rosa + traços brancos) no rodapé: **mantido igual**

> Observação: não há distinção visual entre "step concluído" e "step futuro" neste design — ambos usam o mesmo estilo de círculo outline. Apenas o step atual se diferencia.

---

## 3. Área de Conteúdo (Direita)

### Cabeçalho
- **Título (H1):** "Pick add-ons" — grande, bold, azul-marinho escuro (mesmo estilo tipográfico do título do Step 2)
- **Subtítulo:** "Add-ons help enhance your gaming experience." — texto menor, cinza

### Lista de Add-ons
Lista vertical de 3 itens, cada um em um card horizontal de largura total.

**Estrutura de cada item:**
| Elemento | Posição | Descrição |
|---|---|---|
| Checkbox | Esquerda | Quadrado com cantos levemente arredondados |
| Título do add-on | Ao lado do checkbox | Bold, cor azul-marinho |
| Descrição | Abaixo do título | Texto menor, cor cinza |
| Preço adicional | Extrema direita | Formato "+$X/mo", cor azul (destaque), alinhado verticalmente ao centro do card |

**Itens:**
1. **Online service** — "Access to multiplayer games" — +$1/mo — ✅ marcado
2. **Larger storage** — "Extra 1TB of cloud save" — +$2/mo — ✅ marcado
3. **Customizable profile** — "Custom theme on your profile" — +$2/mo — ⬜ desmarcado

### Estados do card do add-on
- **Selecionado (checked):**
  - Checkbox preenchido em azul-índigo sólido com ícone de check branco
  - Borda do card em azul-índigo (mesma cor do checkbox)
  - Fundo do card levemente diferenciado (tom cinza-azulado muito sutil, distinguindo do branco puro)
- **Não selecionado (unchecked):**
  - Checkbox vazio, apenas contorno cinza claro
  - Borda do card em cinza claro (neutra)
  - Fundo branco puro
- **Hover** *(comportamento esperado, não visível no print)*: leve destaque de borda

### Espaçamento
- Cards empilhados verticalmente com espaçamento uniforme entre eles (~gap médio)
- Padding interno generoso em cada card (alinhado ao padding dos cards de plano do Step 2)

### Rodapé de Navegação
- **Idêntico ao Step 2**: "Go Back" (texto simples, cinza) à esquerda; botão "Next Step" (fundo azul-marinho, texto branco) à direita

---

## 4. Paleta de Cores (referência aproximada)

| Uso | Cor |
|---|---|
| Fundo da página | Azul muito claro |
| Sidebar | Roxo/Indigo |
| Indicador ativo (step) | Azul claro |
| Texto títulos | Azul-marinho escuro |
| Texto secundário/descrição | Cinza médio |
| Checkbox marcado / borda selecionada | Azul-índigo sólido (mesma família da sidebar) |
| Fundo do card selecionado | Cinza-azulado muito sutil |
| Preço adicional (+$X/mo) | Azul-índigo (texto de destaque) |
| Borda padrão (não selecionado) | Cinza claro |
| Botão primário | Azul-marinho escuro |

---

## 5. Tipografia
- Mesma família e hierarquia do Step 2:
  - Título da seção: bold/extrabold, tamanho grande
  - Nome do add-on: bold, tamanho médio
  - Descrição: peso regular, tamanho pequeno, cor neutra
  - Preço: peso medium/semibold, cor de destaque

---

## 6. Componentes reutilizáveis entre Step 2 e Step 3
Para fins de implementação, os seguintes elementos devem ser componentizados e compartilhados:
- `Sidebar` (lista de steps + decoração) — recebe apenas o step ativo como prop
- `FooterNav` (Go Back / Next Step)
- Estilo base de "card selecionável" (borda + fundo dinâmico conforme estado) — usado tanto nos planos (Step 2, seleção única/radio) quanto nos add-ons (Step 3, seleção múltipla/checkbox)

**Diferença de comportamento:**
- Step 2: seleção **única** (radio behavior) — apenas um plano pode estar ativo
- Step 3: seleção **múltipla** (checkbox behavior) — qualquer combinação de add-ons pode estar marcada

---

## 7. Responsividade (considerações)
- Em mobile, os cards de add-on mantêm largura total, empilhados (já é o padrão neste layout)
- Preço deve continuar alinhado à direita mesmo em telas menores; considerar quebra de linha se o espaço for insuficiente
- Sidebar segue mesma estratégia de colapso definida no Step 2

---

## 8. Acessibilidade (recomendações)
- Cada item deve ser um `<label>` associado a um `<input type="checkbox">` real, garantindo clique na área toda do card
- Estado marcado deve refletir `aria-checked`/`checked` nativo, não apenas estilo visual
- Preço deve estar semanticamente associado ao item (ex: dentro do mesmo `<label>`) para leitores de tela anunciarem o custo ao navegar
- Foco via teclado (`:focus-visible`) deve exibir contorno visível no card, consistente com o padrão do Step 2