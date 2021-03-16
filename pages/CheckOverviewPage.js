import { Selector, t } from 'testcafe'

class CheckOverviewPage{
    constructor(){
        this.overviewtitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishBtn = Selector('.btn_action').withExactText('FINISH')
        this.orderCompleteTitle = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
    }
}


export default new CheckOverviewPage()




