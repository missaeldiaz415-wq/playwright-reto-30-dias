import {test, expect} from  '@playwright/test'
//page = fixture

test('Get all Employee Name registered',async({page}) => {

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

const rows =page.getByRole('table').getByRole('row')
const EmployeeNames: string[] = []

const rowCount = await rows.count()

for (let i = 1; i < rowCount; i++) {

    const cell = rows.nth(i).getByRole('cell').nth(3)
    const EmployeeName = await cell.textContent()
    
    if (EmployeeName){
         EmployeeNames.push(EmployeeName)
    }
}
   console.log(EmployeeNames)
})