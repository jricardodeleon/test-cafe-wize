import { Selector, t } from 'testcafe'

class FillingUserInfoPage{
    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
        this.errorMessage = Selector('.error-button')
        this.continueBtn = Selector('.btn_primary')
        this.checkoutTitle = Selector('.subheader').withExactText('Checkout: Your Information')
    }
    
    async fillValidInfo(firstName, lastName, zipCode){
        await t
            .typeText(this.firstName, firstName, {paste : true})
            .typeText(this.lastName, lastName, {paste : true})
            .typeText(this.zipCode, zipCode, {paste : true})
            .click(this.continueBtn)
    }

}

export default new FillingUserInfoPage()





