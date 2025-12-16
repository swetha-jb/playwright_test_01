class Login_Locator{
    click_login='xpath=//span[text()="Login"]'
    click_to_enter_number='xpath=//span[text()="Enter Email/Mobile number"]/../..//input'
    click_on_rqst_otp='xpath=//button[text()="Request OTP"]'
}

export const LoginLocator=new Login_Locator()