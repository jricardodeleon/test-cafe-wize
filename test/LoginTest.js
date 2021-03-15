import { t } from 'testcafe'
import { CREDENTIALS } from '../data/constants' 
import LoginPage from '../pages/LoginPage'

fixture `Test Valid e Invalid Scenarios For Login`
    .page `https://www.saucedemo.com/`

    .beforeEach(async t=> {
        await t.setTestSpeed(1)
    })
        

test('Login With Valid Credentials', async t=>{
    await LoginPage.validLogin(CREDENTIALS.VALID_LOGIN.USERNAME, CREDENTIALS.VALID_LOGIN.PASSWORD)
    await t.expect(LoginPage.productosLabel.exists).ok()
})

test('Login With Invalid Credentials', async t=>{
    await LoginPage.IvalidLogin(CREDENTIALS.INVALID_LOGIN.USERNAME, CREDENTIALS.INVALID_LOGIN.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Logout From Products Page', async t=>{
    await LoginPage.logoutFromProducts(CREDENTIALS.VALID_LOGIN.USERNAME, CREDENTIALS.VALID_LOGIN.PASSWORD)
    await t.expect(LoginPage.loginLogo.exists).ok()
})