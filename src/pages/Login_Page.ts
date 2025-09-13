import { LoginLocator } from './../locators/flipkart';
import { alarmType_loc, createAlarm_loc, devicePage, notifyPage_loc } from './../locators/Alarm_module_locator';

import { Page } from '@playwright/test';


export class Login{
    private page: Page;
    
    constructor(page:Page){
        this.page=page
    }

    async Click_login_page(){
        await this.page.locator(LoginLocator.click_login).click()
        await this.page.waitForTimeout(5000)
    }
    async enter_number(){
        await this.page.locator(LoginLocator.click_to_enter_number).fill("8294915462")
        await this.page.waitForTimeout(3000)
    }
    async click_on_rqst(){
        await this.page.locator(LoginLocator.click_on_rqst_otp).click()
        await this.page.waitForTimeout(3000)
    }    
}



