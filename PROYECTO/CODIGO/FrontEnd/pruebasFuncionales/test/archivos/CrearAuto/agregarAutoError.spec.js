// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('AgregarAutoError', function() {
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
  it('AgregarAutoError', async function() {
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