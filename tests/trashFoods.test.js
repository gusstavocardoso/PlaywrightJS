const { chromium } = require('playwright');
const ClientePage = require('../pages/ClientePage');
const ClienteData = require('../data/ClienteData');

describe(`Testes e2e com Playwright`, () => {
    let cliente = new ClientePage;
    let data = new ClienteData();

    jest.setTimeout(10000);

    let browser = null;
    let page = null;
    let context = null;

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://enjoeat.herokuapp.com/');
    });

    afterAll(async () => {
        await browser.close();
    });

    test(`Deve escolher o Trash Food`, async () => {
        await page.click('text=Restaurantes');

        await page.click('text=Burger House');

        await page.click('text=Classic Burger O clássico. Não tem como errar. R$ 18,50 >> .add-to-cart');

        await page.click('text=Batatas Fritas Batatas fritas crocantes R$ 5,50 Adicionar >> .add-to-cart');

        await page.click('text=Refrigerante O refri mais gelado da cidade. R$ 4,50 Adicionar >> .add-to-cart');

        await page.click('text=Fechar Pedido');

    });

    test('Deve informar os dados', async () => {
        await cliente.userName(data.user.nome);
        // await page.fill('[placeholder="Nome"]', data.user.nome);

        await page.fill('[placeholder="E-mail"]', data.user.email);

        await page.fill('[placeholder="Confirmação do e-mail"]', data.user.email);

        await page.fill('[placeholder="Endereço"]', data.adress.endereco);

        await page.fill('[placeholder="Número"]', data.adress.numero);
    });

    test('Deve fazer o pagamento', async () => {
        await page.click('.iCheck-helper >> nth=0');
        await Promise.all([
            page.waitForNavigation(),
            page.click('text=Concluir Pedido')
        ]);
    });

    test('Deve concluir o pedido', async () => {
        await page.click('text=Pedido Conluído');

    });
});
