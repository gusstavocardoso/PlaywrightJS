const BaseTest = require("../common/BaseTest");

class FoodPage extends BaseTest{

    constructor(page){
        super(page);
    }

    async goFoodPage(){
        await this.page.click('text=Restaurantes');
    }

    async chooseFood(){
        await this.page.click('text=Burger House');
    }

    async goPayFood(){
        await this.page.click('text=Fechar Pedido');
    }   
};

module.exports = FoodPage;

