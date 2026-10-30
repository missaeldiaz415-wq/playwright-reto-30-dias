import {test, expect} from  '@playwright/test'
//page = fixture

test('login to hrm',async({page}) => {

    //await = espere o antes finalice esto
await page.goto('https://opensource-demo.orangehrmlive.com/')
await page.getByRole('textbox',{name:'Username'}).fill('Admin')
await page.getByRole('textbox',{name:'Password'}).fill('admin123')
await page.getByRole('button',{name:'Login'}).click()
//Aqui solo revisa que sea visible la opcion de Admin
await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
//Esta linea de abajo da click en el menu de Admin
//await page.getByRole('link',{name:'Admin'}).click()

})