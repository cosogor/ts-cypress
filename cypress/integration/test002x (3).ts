import { css } from "cypress/types/jquery"
import {LoginPage} from "../page_objects/login_page"
const loginPage = new LoginPage
it ('page objects model test', function(){
    loginPage.navigate(loginPage.loginPage_url_locator);
    loginPage.enterUserName('test');
    loginPage.enterPassword('test');
    loginPage.clickLogin();
    cy.get('h2',{timeout:5000}).should('contain','Login Successful :)')
})