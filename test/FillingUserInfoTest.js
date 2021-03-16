import {Selector, t} from  'testcafe'
import FillingUserInfoPage from '../pages/FillingUserInfoPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { CREDENTIALS } from '../data/constants'
import  { regularAccUser } from '../Roles/UserRoles'
import LoginPage from '../pages/LoginPage'
import CheckOverviewPage from '../pages/CheckOverviewPage'

fixture `Mail Information`
    .page `https://www.saucedemo.com/`

    .beforeEach(async t=>{
        // login with valid user
        await LoginPage.validLogin(CREDENTIALS.VALID_LOGIN.USERNAME, CREDENTIALS.VALID_LOGIN.PASSWORD)
        await t.expect(LoginPage.productosLabel.exists).ok()
        // Select Items
        //const numofitems = 4
        //var itemProducts = []
        //itemProducts = await ShoppingCartPage.getItemNameProducts(numofitems)
        /*await ShoppingCartPage.addMultipleItems(numofitems)
        await t.expect(ShoppingCartPage.itemInCart.innerText).eql(numofitems.toString())
        // go to cart
        .click(ShoppingCartPage.itemInCart)
        // checkout
        await t
        .click(ShoppingCartPage.checkoutBtn)
        .expect(FillingUserInfoPage.checkoutTitle.exists).ok()*/
    })

    test('7. Continuing with Missing Information', async t=>{
        const numofitems = 4
        await ShoppingCartPage.addMultipleItems(numofitems)
        
        await t
            .expect(ShoppingCartPage.itemInCart.innerText).eql(numofitems.toString())
            .click(ShoppingCartPage.itemInCart)
            .click(ShoppingCartPage.checkoutBtn)
            .expect(FillingUserInfoPage.checkoutTitle.exists).ok()
            .typeText(FillingUserInfoPage.firstName, CREDENTIALS.VALID_CHECKOUT.USERNAME, {paste : true})
            .typeText(FillingUserInfoPage.lastName, CREDENTIALS.VALID_CHECKOUT.LASTNAME, {paste : true})
            .click(FillingUserInfoPage.continueBtn)
            .expect(FillingUserInfoPage.errorMessage.exists).ok()
    })

    test('8. Fill Users Information', async t=>{
        const numofitems = 4
        await ShoppingCartPage.addMultipleItems(numofitems)
        
        await t
            .expect(ShoppingCartPage.itemInCart.innerText).eql(numofitems.toString())
            .click(ShoppingCartPage.itemInCart)
            .click(ShoppingCartPage.checkoutBtn)
            .expect(FillingUserInfoPage.checkoutTitle.exists).ok()
        await FillingUserInfoPage.fillValidInfo(CREDENTIALS.VALID_CHECKOUT.USERNAME, CREDENTIALS.VALID_CHECKOUT.LASTNAME, CREDENTIALS.VALID_CHECKOUT.ZIPCODE)
        await t
            .expect(CheckOverviewPage.overviewtitle.exists).ok()
    })

    test('9. Final Order Items, 10. Complete a Purcharse', async t=>{
        const numofitems = 4
        var itemProducts = []
        // get what products were selected
        itemProducts = await ShoppingCartPage.getItemNameProducts(numofitems)
        // add products to the cart
        await ShoppingCartPage.addMultipleItems(numofitems)
        await t
            .expect(ShoppingCartPage.itemInCart.innerText).eql(numofitems.toString())
            .click(ShoppingCartPage.itemInCart)
            .click(ShoppingCartPage.checkoutBtn)
            .expect(FillingUserInfoPage.checkoutTitle.exists).ok()
        // filling correct user info
        await FillingUserInfoPage.fillValidInfo(CREDENTIALS.VALID_CHECKOUT.USERNAME, CREDENTIALS.VALID_CHECKOUT.LASTNAME, CREDENTIALS.VALID_CHECKOUT.ZIPCODE)
        // checking out Items in Cart
        var checkoutItems = []
        
        checkoutItems = await ShoppingCartPage.getItemNameinCart()
        // assert items in overview page match with added items
        console.log(JSON.stringify(itemProducts)==JSON.stringify(checkoutItems))
        // finishing Order
        await t
            .setTestSpeed(.01)
            .click(CheckOverviewPage.finishBtn)
        // assert order has been finished sucessfully
            .expect(CheckOverviewPage.orderCompleteTitle.exists).ok()
        
        

                  
    })