class ClienteData {

    cliente = {
        nome: "Joe Satriani",
        email: "joe.satriani@guitar.com",
        confirmacao: "joe.satriani@guitar.com",
        endereco: "Six Strings",
        numero: "789"
    }

    nome(){
        return this.cliente.nome
    }

    email(){
        return this.cliente.email
    }

    confirmacao(){
        return this.cliente.confirmacao
    }

    endereco(){
        return this.cliente.endereco
    }

    numero(){
        return this.cliente.numero
    }
};

module.exports = ClienteData;