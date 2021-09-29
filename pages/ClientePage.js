class ClientePage {

    async userInformation(nome, email, confirmacaoEmail){
        await page.fill('[placeholder="Nome"]', nome);
        await page.fill('[placeholder="E-mail"]', email);
        await page.fill('[placeholder="Confirmação do e-mail"]', confirmacaoEmail);
    }

    async userAdress(endereco, numero){
        await page.fill('[placeholder="Endereço"]', endereco);
        await page.fill('[placeholder="Número"]', numero);
    }

    async userPayMoney(){
        await page.click('.iCheck-helper >> nth=0');
    }
};

module.exports = ClientePage;

