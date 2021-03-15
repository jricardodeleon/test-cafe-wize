import { Role } from 'testcafe';
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/constants'

export const regularAccUser= Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_LOGIN.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_LOGIN.PASSWORD)
        .click(LoginPage.loginBtn);
},{
    preserveUrl: true
})
