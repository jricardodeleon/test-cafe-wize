import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.shoppingIco = Selector('.svg-inline--fa')
        this.headerTitle = Selector('.subheader').withText('Your Cart')
        this.singleItem = Selector('.btn_primary')
        this.itemCounter = Selector('.fa-layers-counter').withExactText('1')
    }

    async canNavigateToCart(){
        await t
            .click(this.shoppingIco)
    }

    async addSingleItem(){
        await t
            .click(this.singleItem)
    }
}

export default new ShoppingCartPage()