# 🚀 Automação de Testes E2E com Playwright e TypeScript

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Playwright** e **TypeScript**, seguindo as melhores práticas de engenharia de qualidade de software para garantir robustez, manutenibilidade e alta velocidade de execução.

---

## 🛠️ Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/)**: Framework moderno de automação de testes web da Microsoft.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
* **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript backend.

---

## 📂 Estrutura do Projeto

```text
primeiroTestePlaywright/
├── tests/
│   └── primeiro-teste.spec.ts     # Cenário de teste base (Navegação e Asserção)
├── node_modules/                  # Dependências do projeto
├── package.json                   # Configurações e scripts do npm
├── tsconfig.json                  # Configurações do compilador TypeScript
└── playwright.config.ts           # Configurações globais do ambiente Playwright
```

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* **Node.js** (versão 18 ou superior recomendada).
* **Git** (opcional, para clonar o repositório).

---

## 📦 Instalação e Configuração

Siga os passos abaixo para configurar o ambiente do zero:

1. **Clone o repositório ou navegue até a pasta do projeto:**
   ```bash
   cd caminho/para/seu/projeto/primeiroTestePlaywright
   ```

2. **Instale as dependências de desenvolvimento:**
   ```bash
   npm install
   ```

3. **Instale os navegadores oficiais suportados pelo Playwright:**
   ```bash
   npx playwright install
   ```

---

## 🧪 O Cenário de Teste (`tests/primeiro-teste.spec.ts`)

O teste atual realiza a navegação até o portal alvo, mapeia o elemento principal de cabeçalho (`h1`) utilizando localizadores semânticos e valida tanto a sua visibilidade quanto o conteúdo textual correspondente:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Estrutura Base e Primeiro Teste Playwright com TypeScript', () => {
  
  test('Deve navegar para a página alvo e validar a visibilidade de um elemento', async ({ page }) => {
    // 1. Navegação para a URL desejada
    await page.goto('https://www.infomoney.com.br/');

    // 2. Mapeamento do elemento principal utilizando locators semânticos
    const tituloPrincipal = page.locator('h1');

    // 3. Validação robusta verificando se o elemento está visível na tela
    await expect(tituloPrincipal).toBeVisible();
    
    // 4. Validação adicional de assertividade do conteúdo para garantir integridade
    await expect(tituloPrincipal).toHaveText('            InfoMoney – Informações que valem dinheiro        ');
  });

});
```

---

## 🏃‍♂️ Como Executar os Testes

Você pode executar os testes de diferentes maneiras dependendo da sua necessidade:

* **Executar os testes em modo Headless (padrão de terminal):**
  ```bash
  npx playwright test
  ```

* **Executar os testes abrindo a interface gráfica interativa (UI Mode - Recomendado para debug):**
  ```bash
  npx playwright test --ui
  ```

* **Executar os testes em modo Headed (com o navegador visível em tela):**
  ```bash
  npx playwright test --headed
  ```

* **Executar um arquivo de teste específico:**
  ```bash
  npx playwright test tests/primeiro-teste.spec.ts
  ```

* **Visualizar o relatório HTML detalhado da última execução:**
  ```bash
  npx playwright show-report
  ```

---

## 👤 Autor

Desenvolvido por **Fabiano (Joe)** no âmbito da formação em Quality Assurance.