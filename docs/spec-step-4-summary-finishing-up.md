# Spec — Step 4: Summary ("Finishing up")

## Visão geral
Quarta e última etapa do wizard. Mantém a estrutura base (sidebar + conteúdo) dos steps anteriores, exibindo um resumo consolidado do plano e add-ons escolhidos, com valor total e ação de confirmação final.

Este print também documenta **estados de interação (hover/active)**, visíveis pelo cursor "mão" posicionado sobre elementos clicáveis.

---

## 1. Estrutura do Card Principal
- Idêntica aos steps anteriores: container branco arredondado, sombra suave, centralizado, fundo da página azul claro
- Layout em duas colunas: sidebar (esquerda) + conteúdo (direita)

---

## 2. Sidebar de Navegação
Estrutura e estilo **idênticos aos steps anteriores** (componente reutilizado):

- **Step 4 (Summary)** no estado **ativo**: círculo com fundo azul claro sólido, número em azul-marinho
- **Steps 1, 2 e 3** no estado padrão (outline, sem preenchimento)
- Elemento decorativo (blobs laranja/rosa + traços brancos) no rodapé: **mantido igual**

---

## 3. Área de Conteúdo (Direita)

### Cabeçalho
- **Título (H1):** "Finishing up" — grande, bold, azul-marinho escuro (mesmo estilo dos títulos anteriores)
- **Subtítulo:** "Double-check everything looks OK before confirming." — texto menor, cinza

### Card de Resumo
Container único (não uma lista de cards separados como no Step 3), com fundo levemente acinzentado/azulado e borda sutil, dividido em seções internas por linhas divisórias finas.

**Seção 1 — Plano selecionado**
| Elemento | Descrição |
|---|---|
| Nome do plano + ciclo | "Arcade (Monthly)" — bold, azul-marinho |
| Link "Change" | Abaixo do nome do plano, texto azul-índigo, sublinhado, menor que o título — ação de editar/voltar à seleção |
| Preço | Alinhado à direita, mesma linha do nome do plano — "$9/mo" |

**Divisor:** linha horizontal fina separando a seção do plano da lista de add-ons

**Seção 2 — Add-ons selecionados**
Lista simples (sem checkboxes, apenas leitura), um item por linha:
| Elemento | Descrição |
|---|---|
| Nome do add-on | Texto regular, cor cinza (menos destaque que o nome do plano) |
| Preço adicional | Alinhado à direita, formato "+$X/mo", cor cinza |

- Online service — +$1/mo
- Larger storage — +$2/mo

> Nota: apenas os add-ons que foram marcados no Step 3 aparecem aqui (comportamento dinâmico esperado). "Customizable profile" não aparece pois não foi selecionado.

### Total
Fora do card de resumo, abaixo dele, com espaçamento maior:
| Elemento | Descrição |
|---|---|
| Label | "Total (per month)" — texto cinza, tamanho regular |
| Valor total | "+$12/mo" — bold, cor azul-índigo (cor de destaque), tamanho maior que os demais preços |

Cálculo: $9 (plano) + $1 (online service) + $2 (larger storage) = $12/mo

### Rodapé de Navegação
- **"Go Back"**: texto simples, cinza, sem destaque (igual aos steps anteriores)
- **Botão "Confirm"**: substitui o "Next Step" dos steps anteriores
  - Estado padrão (esperado): fundo azul-marinho escuro sólido (mesma cor do "Next Step")
  - **Estado hover/active (capturado no print):** fundo muda para um tom **roxo/lilás mais claro e dessaturado** — indicando feedback visual ao passar o mouse ou clicar
  - Cursor exibido no print: ícone de "mão" (clique), reforçando que o botão está em estado interativo

---

## 4. Estados de Interação Documentados no Print

Este print é valioso por capturar **dois elementos em estado de hover simultaneamente** (provavelmente para fins de documentação de design, não reflete uso real simultâneo):

1. **Link "Change"**
   - Cursor "mão" posicionado sobre o texto
   - Sugere estado hover: possivelmente sublinhado mantido + leve mudança de cor/opacidade (comportamento padrão de link)

2. **Botão "Confirm"**
   - Cursor "mão" posicionado sobre o botão
   - Estado hover/active: fundo azul-marinho escuro → roxo/lilás claro (mais claro que o "Next Step" padrão dos steps anteriores)
   - Possível interpretação: transição de cor suave (`transition`) no `:hover`, similar a um "lighten" da cor base

---

## 5. Paleta de Cores (referência aproximada)

| Uso | Cor |
|---|---|
| Fundo da página | Azul muito claro |
| Sidebar | Roxo/Indigo |
| Indicador ativo (step) | Azul claro |
| Texto títulos | Azul-marinho escuro |
| Texto secundário (add-ons, total label) | Cinza médio |
| Fundo do card de resumo | Cinza-azulado muito sutil |
| Link "Change" | Azul-índigo, sublinhado |
| Valor total (+$12/mo) | Azul-índigo, bold |
| Botão "Confirm" (padrão) | Azul-marinho escuro |
| Botão "Confirm" (hover/active) | Roxo/lilás claro |

---

## 6. Tipografia
- Consistente com os steps anteriores:
  - Título da seção: bold/extrabold, tamanho grande
  - Nome do plano: bold, tamanho médio
  - Nome dos add-ons: peso regular, cor neutra
  - Total: bold, tamanho maior que os demais valores, cor de destaque

---

## 7. Componentes reutilizáveis
- `Sidebar` e `FooterNav` — mesmos componentes dos steps 2 e 3
- Card de resumo é um componente novo (`SummaryCard`), mas reaproveita o padrão de "linha com label à esquerda + valor à direita" já usado nos add-ons do Step 3
- Botão de ação principal (`PrimaryButton`) deve suportar variação de label ("Next Step" vs "Confirm") mantendo o mesmo estilo base e estado de hover

---

## 8. Responsividade (considerações)
- Card de resumo deve manter largura total do container de conteúdo em qualquer breakpoint
- Em telas estreitas, considerar quebra do preço para a linha seguinte caso o nome do plano/add-on seja longo

---

## 9. Acessibilidade (recomendações)
- Link "Change" deve navegar programaticamente de volta ao Step 2 (ou reabrir seleção), com foco visível (`:focus-visible`)
- Botão "Confirm" deve ter estado `:disabled` prevendo validações pendentes (não visível neste print, mas recomendado)
- Total deve ser anunciado de forma clara por leitores de tela (ex: `aria-live` se o valor mudar dinamicamente ao voltar e alterar seleções)
- Contraste do texto "Change" (azul sobre fundo claro) deve ser validado (WCAG AA)