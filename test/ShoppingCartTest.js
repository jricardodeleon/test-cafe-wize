import LoginPage from '../pages/LoginPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import {CREDENTIALS} from '../data/constants'

fixture `Shopping Cart`
    .page `https://www.saucedemo.com/`

    .beforeEach(async t=>{
        await LoginPage.validLogin(CREDENTIALS.VALID_LOGIN.USERNAME, CREDENTIALS.VALID_LOGIN.PASSWORD)
        await t.expect(LoginPage.productosLabel.exists).ok()
    })

test('4. Navigate to Shopping Cart', async t=>{
    await ShoppingCartPage.canNavigateToCart()
    await t.expect(ShoppingCartPage.headerTitle.exists).ok()
})

test('5. Add a Single Item To The Shopping Cart', async t=>{
    await ShoppingCartPage.addSingleItem()
    await t.expect(ShoppingCartPage.itemCounter.exists).ok()

})