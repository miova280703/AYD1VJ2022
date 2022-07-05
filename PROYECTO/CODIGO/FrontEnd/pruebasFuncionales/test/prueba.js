require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;


describe('Registro de Turista', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Registro Correcto de Turista', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".MuiButton-sizeMedium")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("Amaia")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("Salamanca")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).sendKeys("salamaia@gmail.com")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).sendKeys("1989-10-20T13:12")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).sendKeys("Contra123")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[5]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[5]")).sendKeys("Contra123")
        await driver.findElement(By.css(".MuiBox-root:nth-child(9) > .btn-primario")).click()
    })
    it('Registro Incorrecto de Turista - No se ingreso correo electronico', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".MuiButton-sizeMedium")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("Benito")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("Martinez")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).sendKeys("1994-03-08T13:21")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).sendKeys("Contra231")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[5]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[5]")).sendKeys("Contra231")
        await driver.findElement(By.css(".MuiBox-root:nth-child(9) > .btn-primario")).click()
    })
})

describe('Registro de Servicio Tercerizado', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Registro de Servicio Tercerizado Correcto', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.xpath("//button")).click()
        {
            const element = await driver.findElement(By.xpath("//div[2]/div[2]/div/div/div"))
            await driver.actions({ bridge: true }).move(element).click().perform()
        }
        {
            const element = await driver.findElement(By.xpath("//div[2]/div[2]/div/div/div"))
            await driver.actions({ bridge: true }).move(element).release().perform()
        }
        await driver.findElement(By.css("body")).click()
        await driver.findElement(By.xpath("//div[@id='menu-']/div[3]/ul/li")).click()
        {
            const element = await driver.findElement(By.xpath("//form[2]/div/div/div"))
            await driver.actions({ bridge: true }).move(element).click().perform()
        }
        {
            const element = await driver.findElement(By.xpath("//form[2]/div/div/div"))
            await driver.actions({ bridge: true }).move(element).release().perform()
        }
        await driver.findElement(By.css("body")).click()
        await driver.findElement(By.xpath("//li[contains(.,\'Guatemala, Guatemala\')]")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form/div/div/input")).sendKeys("Hotelito")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[3]/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[3]/div/div/input")).sendKeys("hotelito@gmail.com")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[4]/div/div/input")).sendKeys("contra123")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[5]/div/div/input")).click()
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/form[5]/div/div/input")).sendKeys("contra123")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/div[2]/div[3]/button")).click()
    })
    it('Registro de Servicio Tercerizado Incorrecto - No se ingreso tipo, ciudad y el correo con formato incorrecto', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".menu-navbar > button")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("VuelosExpress")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("vuelo@gmailcom")
        await driver.findElement(By.css(".MuiBox-root:nth-child(7)")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).sendKeys("contra123")
        await driver.findElement(By.css(".Mui-focused > #input-with-icon-textfield")).click()
        {
            const element = await driver.findElement(By.xpath("(//button[@type=\'button\'])[2]"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).sendKeys("contra123")
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[2]")).click()
    })
})

describe('Iniciar Sesion', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Inicio de Sesion con datos Correctos', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".MuiButton-root > .MuiSvgIcon-root")).click()
        await driver.findElement(By.xpath("//ul[@id=\'split-button-menu\']/li")).click()
        {
            const element = await driver.findElement(By.xpath("//button[@type=\'button\']"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.xpath("//button[@type=\'button\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'uname\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'uname\']")).sendKeys("salamaia@gmail.com")
        await driver.findElement(By.xpath("//input[@name=\'pass\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'pass\']")).sendKeys("Contra123")
        await driver.findElement(By.xpath("//button[@type=\'submit\']")).click()
    })
    it('Inicio de Sesion Incorrecto - Formato del Correo No Valido', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".MuiButton-root > .MuiSvgIcon-root")).click()
        await driver.findElement(By.xpath("//ul[@id=\'split-button-menu\']/li")).click()
        {
            const element = await driver.findElement(By.xpath("//button[@type=\'button\']"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.xpath("//button[@type=\'button\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'uname\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'uname\']")).sendKeys("salamaia@gmailcom")
        await driver.findElement(By.xpath("//input[@name=\'pass\']")).click()
        await driver.findElement(By.xpath("//input[@name=\'pass\']")).sendKeys("contra123")
        await driver.findElement(By.xpath("//button[@type=\'submit\']")).click()
    })
})

describe('Agregar Habitacion Hotel', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Se agrega Habitacion Correctamente', async function () {
        await driver.get("http://localhost:3000/misServiciosHotel")
        await driver.manage().window().setRect(1024, 852)
        {
            const element = await driver.findElement(By.css(".btn-primario"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css(".btn-primario")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("350")
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-07-05T18:32")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("3")
        // await driver.findElement(By.name("file")).click()
        // await driver.findElement(By.name("file")).sendKeys("C:\\fakepath\\habitacion4.jpg")
        await driver.findElement(By.css(".MuiButton-root:nth-child(11)")).click()
    })
    it('Se agrega Habitacion Incorrectamente - No se ingresa fecha', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/misServiciosHotel")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".btn-primario")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("25")
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        // {
        //   const element = await driver.findElement(By.xpath("(//button[@type=\'button\'])[19]"))
        //   await driver.actions({ bridge: true }).move(element).perform()
        // }
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("1500")
        await driver.findElement(By.css(".MuiButton-root:nth-child(11)")).click()
        // {
        //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
        //   await driver.actions({ bridge: true }).move(element, 0, 0).perform()
        // }
    })
})

describe('Reservar Habitacion', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Se Reserva Habitacion Correctamente', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        {
            const element = await driver.findElement(By.css("div:nth-child(3) > .MuiButtonBase-root"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css("div:nth-child(2) > .MuiIconButton-root path")).click()
        await driver.findElement(By.css(".MuiPaper-root:nth-child(4) .MuiCardMedia-root")).click()
        await driver.findElement(By.css(".btn-primario")).click()
    })
    it('Se Reserva Habitacion Incorrectamente', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        {
            const element = await driver.findElement(By.css("div:nth-child(3) > .MuiButtonBase-root"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css("div:nth-child(2) > .MuiIconButton-root path")).click()
        await driver.findElement(By.css(".MuiPaper-root:nth-child(4) .MuiCardMedia-root")).click()
        await driver.findElement(By.css(".btn-primario")).click()
    })
})

describe('Agregar Automovil a Agencia Renta Autos', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Se agrego Automovil Correctamente', async function () {
        await driver.get("http://localhost:3000/misServiciosAgencia")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".btn-primario")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("Toyota")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("TX")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).sendKeys("P0159ARF")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).sendKeys("2550")
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-07-03T18:20")
        //   await driver.findElement(By.name("file")).click()
        //   await driver.findElement(By.name("file")).sendKeys("C:\\fakepath\\carro4.jpg")
        await driver.findElement(By.css(".MuiButton-root:nth-child(13)")).click()
    })
    it('Se agrega Automovil Incorrectamente - No se coloca Marca del Automovil', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/misServiciosAgencia")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".btn-primario")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("Toyota")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[3]")).sendKeys("Sentra")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[4]")).sendKeys("1450")
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-07-03T18:28")
        await driver.findElement(By.css(".MuiButton-root:nth-child(13)")).click()
        await driver.findElement(By.css(".MuiButton-root:nth-child(12)")).click()
    })
})

describe('Alquilar Automovil', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Se alquilo Automovil Correctamente', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.xpath("//div[11]/a/img")).click()
        await driver.executeScript("window.scrollTo(0,0)")
        await driver.findElement(By.xpath("//div[@id=\'root\']/div[4]/div/div[2]/button")).click()
    })
    it('Se alquilo Automovil Incorrectamente - No se ingreso fecha final', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1024, 852)
        await driver.findElement(By.css(".MuiPaper-root:nth-child(14) .MuiCardMedia-root")).click()
        await driver.executeScript("window.scrollTo(0,0)")
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-07-05T20:03")
        await driver.findElement(By.css(".btn-primario")).click()
    })
})

describe('Agregar Vuelo', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Se agrego Vuelo Correctamente', async function () {
        await driver.get("http://localhost:3000/misServiciosAerolinea")
        await driver.manage().window().setRect(1024, 852)
        {
            const element = await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("2500")
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-07-05T19:09")
        // {
        //     const element = await driver.findElement(By.xpath("//form[3]/div/div/div"))
        //     await driver.actions({ bridge: true }).move(element).click().perform()
        // }
        // {
        //     const element = await driver.findElement(By.xpath("//form[3]/div/div/div"))
        //     await driver.actions({ bridge: true }).move(element).release().perform()
        // }
        // // await driver.findElement(By.css("body")).click()
        // await driver.findElement(By.xpath("//li[contains(.,\'San Cristobal, Guatemala\')]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).sendKeys("150")
        // await driver.findElement(By.name("file")).click()
        // await driver.findElement(By.name("file")).sendKeys("C:\\fakepath\\vuelo1.jpg")
        {
            const element = await driver.findElement(By.css(".MuiButton-root:nth-child(13)"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css(".MuiButton-root:nth-child(13)")).click()
    })
    it('Se agrego Vuelo Incorrectamente - No se coloco Ciudad, Fecha e Imagen', async function () {
        this.timeout(30000)
        await driver.get("http://localhost:3000/misServiciosAerolinea")
        await driver.manage().window().setRect(1024, 852)
        {
            const element = await driver.findElement(By.css(".btn-primario"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'input-with-icon-textfield\']")).sendKeys("1500")
        await driver.findElement(By.xpath("(//input[@id=\'input-with-icon-textfield\'])[2]")).click()
        {
            const element = await driver.findElement(By.css(".MuiButton-root:nth-child(13)"))
            await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css(".Mui-focused > #input-with-icon-textfield")).sendKeys("25")
        await driver.findElement(By.css(".MuiButton-root:nth-child(13)")).click()
        // {
        //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
        //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
        // }
    })
})

describe('ReservarVueloCorrecto', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('Se Reserva Vuelo Correctamente', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect(1056, 894)
      {
        const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root"))
        await driver.actions({ bridge: true }).move(element).perform()
      }
      await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root")).click()
    //   {
    //     const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //     await driver.actions({ bridge: true }).move(element, 0, 0).perform()
    //   }
      {
        const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge path"))
        await driver.actions({ bridge: true }).move(element).perform()
      }
    //   {
    //     const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //     await driver.actions({ bridge: true }).move(element, 0, 0).perform()
    //   }
      await driver.findElement(By.css(".MuiPaper-root:nth-child(3) .MuiCardMedia-root")).click()
      await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("2022-06-14T19:30")
      await driver.findElement(By.xpath("(//input[@id=\'meeting-time\'])[2]")).click()
      await driver.findElement(By.xpath("(//input[@id=\'meeting-time\'])[2]")).sendKeys("2022-06-17T19:30")
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("2")
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("3")
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
      {
        const element = await driver.findElement(By.xpath("//input[@id=\'outlined-number\']"))
        await driver.actions({ bridge: true}).doubleClick(element).perform()
      }
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("4")
      await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
      await driver.findElement(By.css(".btn-primario")).click()
    })
    // this.timeout(300)
    it('Se reserva Vuelo Incorrectamente - No se ingresa fecha inicio', async function() {
        this.timeout(30000)
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1056, 894)
        {
          const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root"))
          await driver.actions({ bridge: true }).move(element).perform()
        }
        await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root")).click()
      //   {
      //     const element = await driver.findElement(By.CSS_SELECTOR, "body")
      //     await driver.actions({ bridge: true }).move(element, 0, 0).perform()
      //   }
        {
          const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge path"))
          await driver.actions({ bridge: true }).move(element).perform()
        }
      //   {
      //     const element = await driver.findElement(By.CSS_SELECTOR, "body")
      //     await driver.actions({ bridge: true }).move(element, 0, 0).perform()
      //   }
        await driver.findElement(By.css(".MuiPaper-root:nth-child(3) .MuiCardMedia-root")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'meeting-time\']")).sendKeys("")
        await driver.findElement(By.xpath("(//input[@id=\'meeting-time\'])[2]")).click()
        await driver.findElement(By.xpath("(//input[@id=\'meeting-time\'])[2]")).sendKeys("2022-06-17T19:30")
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("2")
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("3")
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
        {
          const element = await driver.findElement(By.xpath("//input[@id=\'outlined-number\']"))
          await driver.actions({ bridge: true}).doubleClick(element).perform()
        }
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).sendKeys("4")
        await driver.findElement(By.xpath("//input[@id=\'outlined-number\']")).click()
        await driver.findElement(By.css(".btn-primario")).click()
      })
  })
