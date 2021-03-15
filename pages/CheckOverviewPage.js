import { Selector, t } from 'testcafe'

class CheckOverviewPage{
    constructor(){
        this.overviewtitle = Selector('.subheader').withExactText('Checkout: Overview')
    }
}


export default new CheckOverviewPage()




