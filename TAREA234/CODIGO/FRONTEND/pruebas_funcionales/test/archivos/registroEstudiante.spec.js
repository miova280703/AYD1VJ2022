// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('registroEstudiante', function() {
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
  it('registroEstudiante', async function() {
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
})