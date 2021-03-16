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
        const numofitems = 4
        var itemProducts = []
        itemProducts = await ShoppingCartPage.getItemNameProducts(numofitems)
        await ShoppingCartPage.addMultipleItems(numofitems)
        await t.expect(ShoppingCartPage.itemInCart.innerText).eql(numofitems.toString())
        // go to cart
        .click(ShoppingCartPage.itemInCart)
        // checkout
        await t
        .click(ShoppingCartPage.checkoutBtn)
        .expect(FillingUserInfoPage.checkoutTitle.exists).ok()
    })

    test('7. Continuing with Missing Information', async t=>{
        await t
            .typeText(FillingUserInfoPage.firstName, CREDENTIALS.VALID_CHECKOUT.USERNAME, {paste : true})
            .typeText(FillingUserInfoPage.lastName, CREDENTIALS.VALID_CHECKOUT.LASTNAME, {paste : true})
            .click(FillingUserInfoPage.continueBtn)
            .expect(FillingUserInfoPage.errorMessage.exists).ok()
    })

    test('8. Fill Users Information', async t=>{
        await FillingUserInfoPage.fillValidInfo(CREDENTIALS.VALID_CHECKOUT.USERNAME, CREDENTIALS.VALID_CHECKOUT.LASTNAME, CREDENTIALS.VALID_CHECKOUT.ZIPCODE)
        await t
            .expect(CheckOverviewPage.overviewtitle.exists).ok()
    })

    test.only('9. Final Order Items', async t=>{
        await FillingUserInfoPage.fillValidInfo(CREDENTIALS.VALID_CHECKOUT.USERNAME, CREDENTIALS.VALID_CHECKOUT.LASTNAME, CREDENTIALS.VALID_CHECKOUT.ZIPCODE)
        // checking out Items in Cart
        var checkoutItems = []
        checkoutItems = await ShoppingCartPage.getItemNameinCart()
        await t.expect(checkoutItems).eql(itemProducts).ok()
        //console.log('checoutitems ' + checkoutItems)    
        // checkout
        //await t.click(ShoppingCartPage.checkoutBtn) 
                  
    })