import { Selector } from 'testcafe'
import { CREDENTIALS } from '../data/constants' 
import LoginPage from '../pages/LoginPage'
import  { regularAccUser } from '../Roles/UserRoles'

fixture `Test Valid e Invalid Scenarios For Login`
    .page `https://www.saucedemo.com/`

    .beforeEach(async t=> {
        await t.setTestSpeed(1)
    })
        

test('1. Login With Valid Credentials, BONUS Usage of ROLES', async t=>{
   await t
        .useRole(regularAccUser) 
       await t.expect(LoginPage.productosLabel.exists).ok()
})

test('2. Login With Invalid Credentials', async t=>{
    await LoginPage.IvalidLogin(CREDENTIALS.INVALID_LOGIN.USERNAME, CREDENTIALS.INVALID_LOGIN.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('3. Logout From Products Page', async t=>{
    await LoginPage.logoutFromProducts(CREDENTIALS.VALID_LOGIN.USERNAME, CREDENTIALS.VALID_LOGIN.PASSWORD)
    await t.expect(LoginPage.loginLogo.exists).ok()
})