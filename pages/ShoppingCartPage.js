import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.shoppingIco = Selector('.svg-inline--fa')
        this.headerTitle = Selector('.subheader').withText('Your Cart')
        this.singleItem = Selector('.btn_primary')
        this.itemCounter = Selector('.fa-layers-counter').withExactText('1')
        this.itemInCart = Selector('.fa-layers-counter')
        this.itemList = Selector('.inventory_item').child('.pricebar').child('.btn_primary')
        this.itemCount = this.itemList.count
        this.checkoutBtn = Selector('.btn_action')   
    }

    async canNavigateToCart(){
        await t
            .click(this.shoppingIco)
    }

    async addSingleItem(){
        await t
            .click(this.singleItem)
    }

    async addMultipleItems(numofitems){
        const itemList = Selector('.inventory_item')
            .child('.pricebar')
            .child('.btn_primary')
        const itemCount = await itemList.count
        console.log('items :' + this.itemList.length)

        for(var i = 0; i < itemCount; i++){
            if(i < numofitems){
                await t.click(itemList)
            }
            else{
                break
            }  
        }
    }

}

export default new ShoppingCartPage()