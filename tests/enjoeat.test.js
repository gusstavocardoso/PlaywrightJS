const { chromium } = require('playwright');

describe(`Testes e2e com Playwright`, () => {
    jest.setTimeout(10000);

    let browser = null;
    let page = null;
    let context = null;

    // runs before all tests
    beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://enjoeat.herokuapp.com/');
    });

    // runs after all tests
    afterAll(async () => {
        await browser.close();
    });

    test(`Deve comprar Burgers`, async () => {
        // Click text=Delivery pra qualquer fome: peça e receba em casa Restaurantes >> a
        await page.click('text=Delivery pra qualquer fome: peça e receba em casa Restaurantes >> a');
        // await expect(page).toHaveURL('https://enjoeat.herokuapp.com/restaurants');

        // Click .row div:nth-child(2) mt-restaurant a .place-info-box .place-info-box-icon img
        await page.click('.row div:nth-child(2) mt-restaurant a .place-info-box .place-info-box-icon img');
        // await expect(page).toHaveURL('https://enjoeat.herokuapp.com/restaurants/burger-house/menu');

        // Click text=Adicionar
        await page.click('text=Adicionar');

        // Click text=Batatas Fritas Batatas fritas crocantes R$ 5,50 Adicionar >> a
        await page.click('text=Batatas Fritas Batatas fritas crocantes R$ 5,50 Adicionar >> a');

        // Click text=Refrigerante O refri mais gelado da cidade. R$ 4,50 Adicionar >> a
        await page.click('text=Refrigerante O refri mais gelado da cidade. R$ 4,50 Adicionar >> a');

        // Click text=Fechar Pedido
        await page.click('text=Fechar Pedido');
        // await expect(page).toHaveURL('https://enjoeat.herokuapp.com/order');

        // Fill [placeholder="Nome"]
        await page.fill('[placeholder="Nome"]', 'Joe Satriani');

        // Fill [placeholder="E-mail"]
        await page.fill('[placeholder="E-mail"]', 'joe@mail.com');

        // Fill [placeholder="Confirmação do e-mail"]
        await page.fill('[placeholder="Confirmação do e-mail"]', 'joe@mail.com');

        // Fill [placeholder="Endereço"]
        await page.fill('[placeholder="Endereço"]', 'Six Strings');

        // Fill [placeholder="Número"]
        await page.fill('[placeholder="Número"]', '789');

        // Click ins
        await page.click('ins');

        // Click text=Concluir Pedido
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://enjoeat.herokuapp.com/order-summary' }*/),
            page.click('text=Concluir Pedido')
        ]);

        // Click text=Pedido Conluído
        await page.click('text=Pedido Conluído');
    });
});