import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginBtn = Selector('#login-button')
        this.productosLabel = Selector('.product_label')
        this.errorMessage = Selector('.error-button')
        this.loginLogo = Selector('.login_logo')
        this.hamburgerBtn = Selector('#react-burger-menu-btn')
        this.logoutBtn = Selector('#logout_sidebar_link')
    }

    async validLogin(username, password){
        await t
            .typeText(this.usernameField, username, {paste: true})
            .typeText(this.passwordField, password, {paste: true})
            .click(this.loginBtn)    
    }

    async IvalidLogin(username, password){
        await t
            .typeText(this.usernameField, username, {paste: true})
            .typeText(this.passwordField, password, {paste: true})
            .click(this.loginBtn)     
    }

    async logoutFromProducts(username, password){
        await t
            .typeText(this.usernameField, username, {paste: true})
            .typeText(this.passwordField, password, {paste: true})
            .click(this.loginBtn)
            .click(this.hamburgerBtn)
            .click(this.logoutBtn)
    }
}



export default new LoginPage()