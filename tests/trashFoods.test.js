const { chromium } = require('playwright');
const OrderPage = require('../pages/OrderPage');
const FoodPage = require('../pages/FoodPage');
const ClienteData = require('../data/ClienteData');
const FoodData = require('../data/FoodData');

describe(`Testes e2e com Playwright`, () => {
    const user = new ClienteData();
    const cardapio = new FoodData();
    jest.setTimeout(10000);

    let browser;
    let page;
    let context;
    let cliente;
    let food;

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        cliente = new OrderPage(page);
        food = new FoodPage(page);
        await food.navigate();
        await cliente.navigate();
    });

    afterAll(async () => {
        await context.close();
        await browser.close();
    });

    test(`Deve escolher o Trash Food`, async () => {
        await food.goFoodPage();
        const restaurantes = await page.innerText('h1');
        expect(restaurantes).toBe('Todos os Restaurantes');

        await food.chooseFood();

        var burgerHouse = [
            await page.click(cardapio.foods.burger),
            await page.click(cardapio.foods.fritas),
            await page.click(cardapio.foods.refri)
        ];

        burgerHouse.forEach(foods => {
            foods;
        });
              
        await food.goPayFood();
    });

    test('Deve informar os dados', async () => {
        await cliente.userInformation(user.nome(), user.email(), user.confirmacao());

        await cliente.userAdress(user.endereco(), user.numero());
    });

    test('Deve escolher a forma de pagamento', async () => {
        await cliente.userPayMoney();
    });

    test('Deve concluir o pedido', async () => {
        await Promise.all([
            page.waitForNavigation(),
            await cliente.userFinishOrder()
        ]);

        const finsihOrder = await page.textContent('h2');
        expect(finsihOrder).toBe('Pedido Conluído');
    });
});
