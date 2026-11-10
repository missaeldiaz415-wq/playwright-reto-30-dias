import {test, expect} from  '@playwright/test'
import { LoginPage } from '../pageobjects/LoginPage'
import { SideMenuOption, SidePanel } from '../components/SidePanel'
//page = fixture

test('login to hrm',async({page}) => {
    //await = espere o antes finalice esto
await page.goto('https://opensource-demo.orangehrmlive.com/')
//await page.getByRole('textbox',{name:'Username'}).fill('Admin')
//await page.getByRole('textbox',{name:'Password'}).fill('admin123')
//await page.getByRole('button',{name:'Login'}).click()
const loginPage = new LoginPage(page)
await loginPage.doLogin ('Admin','admin123' )
const sidePanel = new SidePanel(page)
await sidePanel.clickOnOption(SideMenuOption.ADMIN)
await sidePanel.clickOnOption(SideMenuOption.PIM)
await sidePanel.clickOnOption(SideMenuOption.TIME)
await sidePanel.clickOnOption(SideMenuOption.RECRUITMENT)
await sidePanel.clickOnOption(SideMenuOption.My_INFO)
await sidePanel.clickOnOption(SideMenuOption.PEFORMANCE)
await sidePanel.clickOnOption(SideMenuOption.DIRECTORY)
//await sidePanel.clickOnOption(SideMenuOption.MAINTENANCE)
await sidePanel.clickOnOption(SideMenuOption.CLAIM)
await sidePanel.clickOnOption(SideMenuOption.BUZZ)
//Aqui solo revisa que sea visible la opcion de Admin
//await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
//Esta linea de abajo da click en el menu de Admin
//await page.getByRole('link',{name:'Admin'}).click()
})