export class LoginPage{
    loginPage_url_locator = 'https://trytestingthis.netlify.app/'
    loginPage_userName_locator = '#uname'
    loginPage_password_locator = '#pwd'
    loginPage_loginButton_locator = '[type="submit"]'

    navigate(url:string){
        cy.visit(url)
    }
    enterUserName(userName:string){
        cy.get(this.loginPage_userName_locator).type(userName)
    }
    enterPassword(password:string){
        cy.get(this.loginPage_password_locator).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton_locator).click()
    }
}