// Passing test
test("Click_on_login", async () => {
    const loginPage = new Login(page);
    await loginPage.Click_login_page();
});

// Passing / or may fail depending on UI
test("enter number", async () => {
    const loginPage = new Login(page);
    await loginPage.enter_number();
});

// ? Intentional failure #1
test("incorrect assertion test", async () => {
    const title = await page.title();
    expect(title).toBe("ThisWillNotMatch");  // Wrong title ? will fail
});

// ? Intentional failure #2
test("element_not_found", async () => {
    await page.waitForSelector("#buttonThatDoesNotExist", { timeout: 3000 }); // No such element ? fail
});

// Passing/real test
test("Click_on_rqst", async () => {
    const loginPage = new Login(page);
    await loginPage.click_on_rqst();
});
