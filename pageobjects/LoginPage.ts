import {Page, Locator} from "@playwright/test";
export class LoginPage {
    //Aqui se definen los localizadores
    readonly page: Page
    readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly logingButton: Locator
    //Atraves de un objeto definimos los localizadores
    constructor(page:Page){
        this.page = page
        this.usernameInput = page.getByRole('textbox',{name:'Username'})
        this.passwordInput = page.getByRole('textbox',{name:'Password'})
        this.logingButton = page.getByRole('button',{name:'Login'})
    }

    //Cuando llamen al metodo y pasen las dos variables de username y paswword vamos a navegar, se llenan los campos y vamos hacer un click
    async doLogin (username:string, Password:string) {
    await this.page.goto('/web/index.php/auth/login')
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(Password)
    await this.logingButton.click()

    }

}