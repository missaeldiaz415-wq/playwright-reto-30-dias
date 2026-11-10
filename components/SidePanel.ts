import {Page, Locator} from "@playwright/test";
export class SidePanel {

    readonly page: Page

    constructor (page:Page){
        this.page = page
        }
        // Aqui estamos trabajando de manera dinamica para que la palabra option se sustituya con la option de la lista y evitar poner link por link name
            private menuOption (option:string):Locator{
                    return this.page.getByRole('link',{name:option})
                }
        async clickOnOption(option: SideMenuOption){
            await this.menuOption(option).click()

            }
 }
        
            export enum SideMenuOption{

            ADMIN = 'Admin',
            PIM = 'PIM',
            TIME = 'Time',
            RECRUITMENT = 'Recruitment',
            My_INFO = 'My info',
            PEFORMANCE = 'Performance',
            DIRECTORY = 'Directory',
            MAINTENANCE = 'Maintenance',
            CLAIM = 'Claim',
            BUZZ = 'Buzz'
         }
