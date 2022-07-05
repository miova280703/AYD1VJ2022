require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;

/* INICIAR SESION */
describe('Inicio Sesion', function() {
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
    it('Inicio Sesion con datos correctos', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect(1920, 1053)
      await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).sendKeys("theamazingspiderman@gmail.com")
      await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).sendKeys("282828")
      await driver.findElement(By.css(".MuiBox-root:nth-child(3) > .MuiButton-root")).click()
      await driver.findElement(By.css(".MuiTypography-h5")).click()
      await driver.findElement(By.css(".MuiTypography-body2")).click()
    })
    it('Error Inicio Sesion datos incorrectos, correo electronico mal escrito theamazingspiderman@gmailcom', async function() {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1920, 1053)
        await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).sendKeys("theamazingspiderman@gmailcom")
        await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).sendKeys("282828")
        await driver.findElement(By.css(".MuiBox-root:nth-child(3) > .MuiButton-root")).click()
        await driver.findElement(By.css(".MuiTypography-body2")).click()
      })
  })

  
/* REGISTRAR ESTUDIANTE */
describe('Registro Estudiante', function() {
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
    it('Registro de Estudiante con datos correctos', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect(1920, 1053)
      await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
      await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).sendKeys("Gwen")
      await driver.findElement(By.xpath("//input[@id=\'Apellido\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Apellido\']")).sendKeys("Stacy")
      await driver.findElement(By.xpath("//input[@id=\'Correo\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Correo\']")).sendKeys("stacy_gwen@gmail.com")
      await driver.findElement(By.xpath("//input[@id=\'Fecha\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Fecha\']")).sendKeys("26/11/1993")
      await driver.findElement(By.xpath("//input[@id=\'Contra\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Contra\']")).sendKeys("134625")
      await driver.findElement(By.xpath("//input[@id=\'Confirmacion\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Confirmacion\']")).sendKeys("134625")
      await driver.findElement(By.css(".MuiButton-root")).click()
    })
    it('Error Registro Estudiante, ingreso mal su fecha de nacimiento', async function() {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1920, 1053)
        await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
        await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).sendKeys("Harry")
        await driver.findElement(By.xpath("//input[@id=\'Apellido\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Apellido\']")).sendKeys("Osborn")
        await driver.findElement(By.xpath("//input[@id=\'Correo\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Correo\']")).sendKeys("osborn_harry6@gmail.com")
        await driver.findElement(By.xpath("//input[@id=\'Fecha\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Fecha\']")).sendKeys("25/06/2021")
        await driver.findElement(By.xpath("//input[@id=\'Contra\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Contra\']")).sendKeys("123456")
        await driver.findElement(By.xpath("//input[@id=\'Confirmacion\']")).click()        
        await driver.findElement(By.xpath("//input[@id=\'Confirmacion\']")).sendKeys("123456")
        await driver.findElement(By.css(".MuiButton-root")).click()        
      })
  })

/* ASIGNAR CLASE */
describe('Asignar Clases', function() {
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
    it('Asignacion del Estudiante a su clase con datos correctos', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect(1920, 1053)
      await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).sendKeys("stacy_gwen@gmail.com")
      await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).sendKeys("134625")
      await driver.findElement(By.css(".MuiBox-root:nth-child(3) > .MuiButton-root")).click()
      await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
      await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).sendKeys("Gwen Stacy")
      await driver.findElement(By.xpath("//input[@id=\'Curso\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Curso\']")).sendKeys("Quimica")
      await driver.findElement(By.xpath("//input[@id=\'Seccion\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Seccion\']")).sendKeys("B")
      await driver.findElement(By.xpath("//input[@id=\'Dia\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Dia\']")).sendKeys("Jueves")
      await driver.findElement(By.xpath("//input[@id=\'Hora\']")).click()
      await driver.findElement(By.xpath("//input[@id=\'Hora\']")).sendKeys("9:00")
      await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
      await driver.findElement(By.css(".MuiTypography-body2")).click()
    })
    it('Error Asignar Clase, se asigno una clase que no esta disponible', async function() {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect(1920, 1053)
        await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'CorreoEst\']")).sendKeys("stacy_gwen@gmail.com")
        await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'ContraEst\']")).sendKeys("134625")
        await driver.findElement(By.css(".MuiBox-root:nth-child(3) > .MuiButton-root")).click()
        await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
        await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Nombre\']")).sendKeys("Gwen Stacy")
        await driver.findElement(By.xpath("//input[@id=\'Curso\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Curso\']")).sendKeys("Ingles")
        await driver.findElement(By.xpath("//input[@id=\'Seccion\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Seccion\']")).sendKeys("A")
        await driver.findElement(By.xpath("//input[@id=\'Dia\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Dia\']")).sendKeys("Jueves")
        await driver.findElement(By.xpath("//input[@id=\'Hora\']")).click()
        await driver.findElement(By.xpath("//input[@id=\'Hora\']")).sendKeys("11:00")
        await driver.findElement(By.css(".MuiBox-root:nth-child(2) > .MuiButton-root")).click()
      })
  })