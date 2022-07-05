// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('IniciarSesionCorrecto', function() {
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
  it('IniciarSesionCorrecto', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1024, 852)
    await driver.findElement(By.css(".MuiButton-root > .MuiSvgIcon-root")).click()
    await driver.findElement(By.xpath("//ul[@id=\'split-button-menu\']/li")).click()
    {
      const element = await driver.findElement(By.xpath("//button[@type=\'button\']"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.xpath("//button[@type=\'button\']")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.xpath("//input[@name=\'uname\']")).click()
    await driver.findElement(By.xpath("//input[@name=\'uname\']")).sendKeys("salamaia@gmail.com")
    await driver.findElement(By.xpath("//input[@name=\'pass\']")).click()
    await driver.findElement(By.xpath("//input[@name=\'pass\']")).sendKeys("Contra123")
    await driver.findElement(By.xpath("//button[@type=\'submit\']")).click()
  })
})
