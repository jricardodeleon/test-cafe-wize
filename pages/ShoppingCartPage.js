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
        this.arrayOfItems = Selector('.cart_item').child('.cart_item').child('.cart_item_label').child('a').child('.inventory_item_name')
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
        for(var i = 0; i < itemCount; i++){
            if(i < numofitems){
                await t.click(itemList)
            }
            else{
                break
            }  
        }
    }

    async getItemNameProducts(numOfitems){
        const itemProduct = Selector('.inventory_container')
            .child('.inventory_list')
            .child('.inventory_item')
            .child('.inventory_item_label')
            .child('a')
            .child('.inventory_item_name')

            // console.log('itemproductcount ' + itemProduct.count)

            var itemNameArray = []
            
        for(let i = 0; i < await itemProduct.count; i++){
            if(i<numOfitems){
                itemNameArray.push(await itemProduct.nth(i).innerText)
            }
            else {
                break
            }
            
        } 
        // console.log('itmproduct ' + itemNameArray)
        return itemNameArray
    }

    async getItemNameinCart(){
        const itemList = Selector('.cart_list')
            .child('.cart_item')
            .child('.cart_item_label')
            .child('a')
            .child('.inventory_item_name')

            var itemNameArray = []
            
        for(let i = 0; i < await itemList.count; i++){
            
            itemNameArray.push(await itemList.nth(i).innerText)
        } 
        return itemNameArray
  
    }

}

export default new ShoppingCartPage()