// import { test, expect, Browser, chromium, Page } from '@playwright/test';
// import { Login } from '../pages/Login_Page';
// // import { Login } from '../locators/flipkart';

// let browser: Browser;
// let page: Page;

// test.beforeAll("Suite Setup", async () => {
//     test.setTimeout(60000)
//     browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext();
    
    
//     page = await context.newPage();

//     await page.goto("https://flipkart.com/");
//     // await page.waitForSelector(loginPage_locators.login_email, { state: 'visible' });
//     const loginPage = new Login(page);
//     // await loginPage.email("testuser@yopmail.com", "Password@123"); 
// });

// test.afterAll("Suite TearDown", async () => {
//     await browser.close();
// });

// test("Click_on_login",async()=>{
//     test.setTimeout(60000)
//     const loginPage=new Login(page);
//     await loginPage.Click_login_page()
// })

// test("enter number",async()=>{
//     test.setTimeout(60000)
//     const loginPage=new Login(page);
//     await loginPage.enter_number()
// })

// test("Click_on_rqst",async()=>{
//     test.setTimeout(60000)
//     const loginPage=new Login(page);
//     await loginPage.click_on_rqst
// })

import { test, expect, Browser, chromium, Page } from '@playwright/test';
import { Login } from '../pages/Login_Page';

let browser: Browser | null = null;
let page: Page;

test.beforeAll("Suite Setup", async () => {
    test.setTimeout(60000);
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://flipkart.com/");
});

test.afterAll("Suite TearDown", async () => {
    if (browser) {
        await browser.close();
    }
});

test("Click_on_login", async () => {
    test.setTimeout(60000);
    const loginPage = new Login(page);
    await loginPage.Click_login_page();
});

test("enter number", async () => {
    test.setTimeout(60000);
    const loginPage = new Login(page);
    await loginPage.enter_number();
});

test("Click_on_rqst", async () => {
    test.setTimeout(60000);
    const loginPage = new Login(page);
    await loginPage.click_on_rqst(); // Ensure function call with ()
});
