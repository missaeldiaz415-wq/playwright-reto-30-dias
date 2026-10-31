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

