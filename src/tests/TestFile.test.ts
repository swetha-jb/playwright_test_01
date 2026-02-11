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
    await loginPage.click_on_rqst();
});

/**
 * intentional Failed Test Case (For Reference)
 * Purpose: To demonstrate a failing test in reports / CI
 * No retry added
 */
test("Intentional_Failed_Test_For_Reference", async () => {
    test.setTimeout(30000);

    // This expectation is deliberately incorrect
    await expect(page).toHaveTitle("This Title Will Never Match");
});
