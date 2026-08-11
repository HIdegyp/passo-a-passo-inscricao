# Design System — Formulário Multi-Step "Personal Info"

> Documento extraído por análise pixel a pixel da imagem de referência (`preview.jpg`).
> Todas as cores foram obtidas por amostragem direta da imagem, garantindo fidelidade ao layout original.

---

## 1. Paleta de Cores

### Cores primárias
| Nome | Hex | RGB | Uso |
|---|---|---|---|
| Indigo Primário | `#483EFF` | 72, 62, 255 | Fundo da sidebar de etapas (stepper) |
| Azul Marinho (Navy) | `#002858` | 0, 40, 88 | Botão "Next Step", textos de destaque |
| Azul Escuro (Heading) | `#1E365C` | 30, 54, 92 | Título "Personal info" |

### Cores de apoio / decorativas
| Nome | Hex | RGB | Uso |
|---|---|---|---|
| Coral / Rosa | `#F9818D` | 249, 129, 141 | Forma orgânica decorativa (sidebar e rodapé em zigue-zague) |
| Laranja | `#FFAF7E` | 255, 175, 126 | Círculo decorativo na sidebar |
| Teal / Ciano | `#6BBED0` | 107, 190, 208 | Grade de pontos decorativos (canto superior direito) |
| Lavanda Clara | `#DDD5FF` | 221, 213, 255 | Círculos inativos do stepper (contorno) |
| Azul Acinzentado | `#3E6181` | 62, 97, 129 | Preenchimento do círculo do step ativo |

### Neutros / fundo
| Nome | Hex | RGB | Uso |
|---|---|---|---|
| Cinza Fundo Página | `#F0F0F0` | 240, 240, 240 | Background geral da página |
| Azul Claro (Container) | `#EEF5FF` | 238, 245, 255 | Fundo do container que envolve o card |
| Branco | `#FFFFFF` | 255, 255, 255 | Fundo do card do formulário |
| Borda de Input | `#E2E2E4` | 226, 226, 228 | Bordas dos campos de texto |
| Texto Placeholder | `#9CA3AF` | 156, 163, 175 | Texto de exemplo dentro dos inputs |
| Texto Label | `#5E6C77` | 94, 108, 119 | Labels dos campos (Name, Email, Phone) |

---

## 2. Tipografia

> Observação: a fonte exata não pode ser identificada com 100% de certeza apenas pela imagem, mas o estilo é uma **sans-serif geométrica arredondada**, semelhante a `Poppins`, `Quicksand` ou `Baloo 2` para títulos, e uma sans-serif neutra (`Inter`, `Nunito Sans` ou `Work Sans`) para textos de apoio.

| Elemento | Fonte sugerida | Peso | Tamanho aprox. | Cor |
|---|---|---|---|---|
| Título principal ("Personal info") | Poppins / Quicksand | Bold (700) | 28–30px | `#1E365C` |
| Subtítulo / descrição | Inter / Nunito Sans | Regular (400) | 14–15px | `#8A93A3` |
| Labels dos steps ("STEP 1") | Inter | Medium (500), letter-spacing maior | 10–11px | `#B9BEF0` (sobre fundo indigo) |
| Título dos steps ("YOUR INFO") | Poppins / Quicksand | Bold (700) | 13–14px | `#FFFFFF` |
| Labels dos campos ("Name", "Email Address") | Inter | Medium (500) | 13–14px | `#5E6C77` |
| Placeholder dos inputs | Inter | Regular (400) | 14px | `#9CA3AF` |
| Texto do botão ("Next Step") | Poppins / Inter | SemiBold (600) | 14px | `#FFFFFF` |

---

## 3. Layout & Estrutura

### Estrutura geral
- Página com fundo cinza claro (`#F0F0F0`), elementos decorativos flutuantes (linhas, pontos, zigue-zague) espalhados fora do container principal.
- Container central azul claro (`#EEF5FF`), largura ampla, cantos levemente arredondados, ocupando a maior parte da largura da viewport com margens laterais generosas.
- Dentro do container, um **card branco** centralizado, com sombra suave e cantos arredondados (`border-radius` ~16–20px).

### Card do formulário (estrutura em 2 colunas)
```
┌──────────────────────────────────────────────┐
│  [ Sidebar Stepper ]   [ Conteúdo do form ]   │
│   fundo indigo           fundo branco         │
│   ~28% da largura         ~72% da largura     │
└──────────────────────────────────────────────┘
```

- **Coluna esquerda (Sidebar / Stepper)**
  - Fundo indigo `#483EFF`, ocupa toda a altura do card, cantos arredondados apenas no lado esquerdo.
  - Lista vertical de 4 etapas, cada uma com:
    - Círculo numerado (1–4)
    - Label pequena "STEP N" acima
    - Título em bold abaixo (ex: "YOUR INFO")
  - Etapa ativa: círculo preenchido com azul acinzentado (`#3E6181`) e texto branco; etapas futuras com círculo apenas com contorno claro (`#DDD5FF`) e texto semitransparente.
  - Parte inferior da sidebar contém formas orgânicas decorativas: um círculo laranja (`#FFAF7E`) e uma "onda" coral (`#F9818D`), sugerindo uma ilustração abstrata.

- **Coluna direita (Formulário)**
  - Fundo branco.
  - Título "Personal info" (heading grande, bold, azul escuro).
  - Subtítulo/descrição curta em cinza claro.
  - Campos de formulário empilhados verticalmente (Name, Email Address, Phone Number), cada um com:
    - Label acima do input
    - Input com borda cinza clara (`#E2E2E4`), cantos arredondados (~8px), padding interno confortável (~14–16px)
    - Placeholder em cinza claro com exemplos ("e.g. Stephen King")
  - Botão "Next Step" alinhado à direita, fundo azul marinho (`#002858`), texto branco, cantos arredondados (~8px), padding horizontal generoso.

### Elementos decorativos externos (fora do card)
- Linhas horizontais cinza claro no canto superior esquerdo (estilo "menu"/decoração).
- Grade de pontos teal no canto superior direito (padrão de bolinhas em grid 4x5).
- Traço diagonal fino próximo ao canto superior direito.
- Contornos abstratos (linhas curvas finas) nas laterais inferiores da página.
- Linha em zigue-zague coral no rodapé da página, centralizada.

---

## 4. Espaçamento

| Token | Valor aprox. |
|---|---|
| Padding externo do container | 40–48px |
| Padding interno do card (colunas) | 32–40px |
| Espaço entre campos do formulário | 20–24px |
| Espaço entre label e input | 8px |
| Padding interno dos inputs | 14px vertical / 16px horizontal |
| Border-radius geral (card, inputs, botão) | 8–20px (maior no card, menor nos inputs/botão) |

---

## 5. Componentes

### Stepper (indicador de progresso)
- Círculo (32px aprox.) com número centralizado.
- Estado **ativo**: fundo `#3E6181`, texto branco, título em branco pleno.
- Estado **inativo**: contorno `#DDD5FF` sem preenchimento, texto em opacidade reduzida.
- Conectados verticalmente (sem linha de conexão visível entre eles na imagem).

### Input de texto
```css
.input {
  background: #FFFFFF;
  border: 1px solid #E2E2E4;
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 14px;
  color: #1E365C;
}
.input::placeholder {
  color: #9CA3AF;
}
```

### Botão primário
```css
.btn-primary {
  background: #002858;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  border: none;
}
```

### Card
```css
.card {
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
}
.sidebar {
  background: #483EFF;
  width: 28%;
  border-radius: 20px 0 0 20px;
  position: relative;
}
```

---

## 6. Resumo de variáveis (CSS Custom Properties)

```css
:root {
  /* Cores principais */
  --color-indigo: #483EFF;
  --color-navy: #002858;
  --color-heading: #1E365C;

  /* Decorativas */
  --color-coral: #F9818D;
  --color-orange: #FFAF7E;
  --color-teal: #6BBED0;
  --color-lavender: #DDD5FF;
  --color-step-active-fill: #3E6181;

  /* Neutros */
  --color-bg-page: #F0F0F0;
  --color-bg-container: #EEF5FF;
  --color-white: #FFFFFF;
  --color-border-input: #E2E2E4;
  --color-placeholder: #9CA3AF;
  --color-label: #5E6C77;

  /* Tipografia */
  --font-heading: 'Poppins', 'Quicksand', sans-serif;
  --font-body: 'Inter', 'Nunito Sans', sans-serif;

  /* Raios */
  --radius-card: 20px;
  --radius-input: 8px;
  --radius-button: 8px;
}
```