import { test, expect } from '@playwright/test';

test.describe('Atividade 2 - Estrutura Base e Primeiro Teste', () => {
  
  test('Deve navegar para a página alvo e validar a visibilidade de um elemento', async ({ page }) => {
    // 1. Navegação para a URL desejada (utilizando o example.com como base pública e estável)
    await page.goto('https://example.com');

    // 2. Mapeamento do elemento principal utilizando locators semânticos
    const tituloPrincipal = page.locator('h1');

    // 3. Validação robusta verificando se o elemento está visível na tela
    await expect(tituloPrincipal).toBeVisible();
    
    // Validação adicional de assertividade do conteúdo para garantir integridade do teste
    await expect(tituloPrincipal).toHaveText('Example Domain');
  });

});