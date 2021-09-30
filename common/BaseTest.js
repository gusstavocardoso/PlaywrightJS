class BaseTest {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://enjoeat.herokuapp.com/');
        await this.page.setViewportSize({width: 1500, height: 900});
    }
}
module.exports = BaseTest;