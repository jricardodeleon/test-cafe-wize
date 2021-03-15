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
    

}

export default new FillingUserInfoPage()





