import {test, expect} from  '@playwright/test'
import { LoginPage } from '../pageobjects/LoginPage'
//page = fixture

test('Get all usernames registered',async({page}) => {

    //await = espere o antes finalice esto
//await page.goto('https://opensource-demo.orangehrmlive.com/')
//await page.getByRole('textbox',{name:'Username'}).fill('Admin')
//await page.getByRole('textbox',{name:'Password'}).fill('admin123')
//await page.getByRole('button',{name:'Login'}).click()

//Estas dos lineas siguientes resumen las lineas de logeo normales ya que llaman la configuracion realizada en el loginpage.ts
const loginPage = new LoginPage (page)
await loginPage.doLogin('Admin','admin123')

await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()

//Esta linea de abajo da click en el menu de Admin
await page.getByRole('link',{name:'Admin'}).click()
await page.getByRole('navigation',{name:'Topbar menu'}).getByText('User Management').click()
await page.getByRole('menuitem',{name:'Users'}).click()

const rows =page.getByRole('table').getByRole('row')
const usernames: string[] = []

const rowCount = await rows.count()

for (let i = 1; i < rowCount; i++) {

    const cell = rows.nth(i).getByRole('cell').nth(1)
    const username = await cell.textContent()
    
    if (username){
         usernames.push(username)
    }
}
   console.log(usernames)
})

test('Select specific user for edition',async({page}) => {

    const userForEdition = 'Jobinsam@6742'

    //await = espere o antes finalice esto
await page.goto('https://opensource-demo.orangehrmlive.com/')
await page.getByRole('textbox',{name:'Username'}).fill('Admin')
await page.getByRole('textbox',{name:'Password'}).fill('admin123')
await page.getByRole('button',{name:'Login'}).click()

await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()

//Esta linea de abajo da click en el menu de Admin
await page.getByRole('link',{name:'Admin'}).click()
await page.getByRole('navigation',{name:'Topbar menu'}).getByText('User Management').click()
await page.getByRole('menuitem',{name:'Users'}).click()

const pencilToEdit =page
.getByRole('table')
.getByRole('row')
.filter({hasText:'Jobinsam@6742'})
.locator ('button')
.filter({has: page.locator ('i.bi-pencil-fill')})

await pencilToEdit.click()

const inputLocator = page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('input');
await expect(inputLocator).toBeVisible();
const currentUsername = await inputLocator.inputValue();
//const currentUsername = await page.locator("//label[contains(.,'username')]/parent::div/following-sibling::div/input")
//.inputValue()

expect (currentUsername).toEqual(userForEdition)

})
