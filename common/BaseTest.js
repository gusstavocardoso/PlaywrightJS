class BaseTest{
    constructor(page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto('https://enjoeat.herokuapp.com/');
    }
}
module.exports = BaseTest;