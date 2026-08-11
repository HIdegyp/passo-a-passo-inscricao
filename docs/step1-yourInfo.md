# Spec — Step 1: Your Info

## 1. Visão geral

| Item | Descrição |
|---|---|
| Nome da etapa | Step 1 — Your Info |
| Título da seção | "Personal info" |
| Descrição | "Please provide your name, email address, and phone number." |
| Posição no fluxo | 1 de 4 (Your Info → Select Plan → Add-ons → Summary) |
| Ação principal | Botão "Next Step" |

---

## 2. Layout

- Container geral: card branco arredondado, sombra suave, centralizado na tela, fundo da página cinza-azulado claro.
- Dividido em 2 colunas:
  - **Coluna lateral esquerda** (~28% da largura): navegação de etapas (sidebar).
  - **Coluna principal direita** (~72% da largura): conteúdo do formulário.

---

## 3. Sidebar de navegação (steps)

### Container
- Fundo em gradiente/cor sólida roxo-azulado (indigo), cantos arredondados no lado esquerdo, ocupando 100% da altura do card.
- Elementos decorativos no rodapé: formas orgânicas (blob salmão, círculo laranja) + riscos brancos diagonais.

### Cada item de step contém
- Círculo numerado (1–4)
- Label em duas linhas: "STEP N" (menor, uppercase) + Nome da etapa (maior, bold, uppercase)

### Estados

| Estado | Círculo | Texto |
|---|---|---|
| Ativo (atual) | Preenchido (branco/azul-claro), número em cor escura | Branco, bold, alta ênfase |
| Inativo (futuro) | Apenas contorno branco, fundo transparente | Cinza-claro / baixa opacidade |
| Concluído (se aplicável) | *(não visível neste print — inferir checkmark ou preenchido)* | — |

---

## 4. Área de conteúdo (formulário)

### Cabeçalho
- **H1:** "Personal info" — azul-marinho escuro, bold, grande.
- **Subtexto:** cinza médio, peso normal, abaixo do título.

### Campos do formulário (ordem vertical)

#### Campo 1 — Name
- Label: "Name"
- Tipo: text input
- Estado no print: preenchido, valor = "Vanessa Mint"
- Estilo padrão: borda cinza-clara, cantos arredondados, fundo branco

#### Campo 2 — Email Address
- Label: "Email Address"
- Tipo: email input
- Estado no print: **foco (focus)**, valor parcial = "vanessamint@" com cursor visível
- Estilo focus: borda em azul/roxo (cor de destaque, mesma da sidebar), mais espessa que o padrão

#### Campo 3 — Phone Number
- Label: "Phone Number"
- Tipo: tel input
- Estado no print: **erro (error)**, vazio
- Placeholder: "e.g. +1 234 567 890"
- Estilo erro: borda vermelha
- Mensagem de validação: "This field is required" — texto vermelho, alinhado à direita, na mesma linha do label

### Rodapé do formulário
- Botão "Next Step": alinhado à direita, fundo azul-marinho sólido, texto branco, cantos arredondados, estado hover/press visível no print (cursor sobre o botão).

---

## 5. Estados de input (design system)

| Estado | Borda | Gatilho |
|---|---|---|
| Default | Cinza clara | Sem interação |
| Focus | Azul/roxo, mais grossa | Campo selecionado |
| Error | Vermelha | Validação falhou (ex: campo obrigatório vazio) |
| Disabled *(inferido, não visível)* | — | — |
| Success *(inferido, não visível)* | — | — |

---

## 6. Regras de validação (inferidas)

- **Name**: obrigatório (assumido, sem confirmação visual no print).
- **Email Address**: obrigatório, formato de e-mail válido.
- **Phone Number**: obrigatório — validado no print com mensagem de erro explícita "This field is required".
- Botão "Next Step" provavelmente fica desabilitado ou dispara validação até todos os campos obrigatórios estarem preenchidos corretamente.

---

## 7. Pontos em aberto / a confirmar

- [ ] Existe estado de "completed" para steps já preenchidos (checkmark)?
- [ ] Há máscara de formatação para o telefone (ex: `+1 (234) 567-890`)?
- [ ] O botão "Next Step" fica desabilitado até o formulário ser válido, ou permite clique e mostra erros (como no print)?
- [ ] Existe algum campo opcional além dos 3 mostrados?
- [ ] Cores exatas (hex) precisam ser extraídas da imagem.