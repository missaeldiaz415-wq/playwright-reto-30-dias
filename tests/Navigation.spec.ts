import { test, expect } from "@playwright/test";

test('Check left menu options', async({page}) => { 

       //await = espere o antes finalice esto
         await page.goto('https://opensource-demo.orangehrmlive.com/')
         await page.getByRole('textbox',{name:'Username'}).fill('Admin')
         await page.getByRole('textbox',{name:'Password'}).fill('admin123')
         await page.getByRole('button',{name:'Login'}).click() 
         
         await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
         const LeftMenuItem = page.getByLabel('Sidepanel') .getByRole('listitem')
         const currentMenuItemsCount = await LeftMenuItem.count()
         console.log('Current Menu ItemsCount',currentMenuItemsCount)

         const currentMenuItems: string [] = []

         for (let i=0; i<currentMenuItemsCount; i++){

         const menuText = await LeftMenuItem.nth(i).innerText()
           currentMenuItems.push(menuText)
         }

         console.log(currentMenuItems)
         const expectedMenuItems= [
          'Admin',
          'PIM',
          'Leave',
          'Time',
          'Recruitment',
          'My Info',
          'Performance',
          'Dashboard',
          'Directory',
          'Maintenance',
          'Claim',
          'Buzz',
          //'1234',

         ];
          //Aqui lo que se compara es la lista real vs la lista codificada en la parte de arriba como esperada
         expect(currentMenuItems).toEqual (expectedMenuItems);

        });

//Este test es para darle click a las opciones del menu lado derecho, excepto maintenance

test ( 'Navigate through left panel', async ({page}) => {

//await = espere o antes finalice esto
         await page.goto('https://opensource-demo.orangehrmlive.com/')
         await page.getByRole('textbox',{name:'Username'}).fill('Admin')
         await page.getByRole('textbox',{name:'Password'}).fill('admin123')
         await page.getByRole('button',{name:'Login'}).click() 
         
         await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
         const LeftMenuItem = page.getByLabel('Sidepanel') .getByRole('listitem')
         const currentMenuItemsCount = await LeftMenuItem.count()

         for (let i=0; i<currentMenuItemsCount; i++){
             const menuItem = LeftMenuItem.nth(i)
             const menuText = await menuItem.innerText()

             console.log('Current menu item', menuText)

             if(menuText !== 'Maintenance'){
                await menuItem.click()
             }
         }
})

test('Check all qualification links',async ({page})=> {

const expectedPages = [

{  
   menu: 'Skills',
   url: '/web/index.php/admin/viewSkills'
},
{  
   menu: 'Education',
   url: '/web/index.php/admin/viewEducation'

},
{  
   menu: 'Licenses',
   url: '/web/index.php/admin/viewLicenses'

},
{  
   menu: 'Languages',
   url: '/web/index.php/admin/viewLanguages'

},
{  
   menu: 'Memberships',
   url: '/web/index.php/admin/membership'

}


]
         await page.goto('https://opensource-demo.orangehrmlive.com/')
         await page.getByRole('textbox',{name:'Username'}).fill('Admin')
         await page.getByRole('textbox',{name:'Password'}).fill('admin123')
         await page.getByRole('button',{name:'Login'}).click() 
         
         await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
         await page.getByRole('link',{name:'Admin'}).click()
         await page.getByRole('navigation',{name:'Topbar menu'}).getByText('Qualifications').click()
         const qualificationOptions = page.getByRole('menu').locator('li')

         for (let expectedPage of expectedPages){
              const menuOption = qualificationOptions.filter({hasText: expectedPage.menu})
          await menuOption.click()
          await expect(page).toHaveURL(new RegExp(expectedPage.url))

          await page.getByRole('navigation',{name:'Topbar menu'}).getByText('Qualifications').click()

         }

})

test('Check all organizations links',async ({page})=> {

const expectedPages = [

{  
   menu: 'General Information',
   url: '/web/index.php/admin/viewOrganizationGeneralInformation'
},
{  
   menu: 'Locations',
   url: '/web/index.php/admin/viewLocations'

},
{  
   menu: 'Structure',
   url: '/web/index.php/admin/viewCompanyStructure'

}

]
         await page.goto('https://opensource-demo.orangehrmlive.com/')
         await page.getByRole('textbox',{name:'Username'}).fill('Admin')
         await page.getByRole('textbox',{name:'Password'}).fill('admin123')
         await page.getByRole('button',{name:'Login'}).click() 
         
         await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
         await page.getByRole('link',{name:'Admin'}).click()
         await page.getByRole('navigation',{name:'Topbar menu'}).getByText('Organization').click()
         const organizationOptions = page.getByRole('menu').locator('li')

         for (let expectedPage of expectedPages){
              const menuOption = organizationOptions.filter({hasText: expectedPage.menu})
          await menuOption.click()
          await expect(page).toHaveURL(new RegExp(expectedPage.url))

          await page.getByRole('navigation',{name:'Topbar menu'}).getByText('Organization').click()

         }

})