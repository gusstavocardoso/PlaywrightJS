const BaseTest = require("../common/BaseTest");

class OrderPage extends BaseTest{

    constructor(page){
        super(page);
    }

    async userInformation(nome, email, confirmacao){
        await this.page.fill('[placeholder="Nome"]', nome);
        await this.page.fill('[placeholder="E-mail"]', email);
        await this.page.fill('[placeholder="Confirmação do e-mail"]', confirmacao);
    }

    async userAdress(endereco, numero){
        await this.page.fill('[placeholder="Endereço"]', endereco);
        await this.page.fill('[placeholder="Número"]', numero);
    }

    async userPayMoney(){
        await this.page.click('.iCheck-helper >> nth=0');
    }

    async userFinishOrder(){
        await this.page.click('text=Concluir Pedido');
    }
};

module.exports = OrderPage;

