// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ReservarVueloError', function() {
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
  it('ReservarVueloError', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1024, 852)
    await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root")).click()
    await driver.findElement(By.css(".MuiPaper-root:nth-child(8) .MuiCardMedia-root")).click()
    await driver.findElement(By.id("outlined-number")).sendKeys("2")
    await driver.findElement(By.id("outlined-number")).click()
    await driver.findElement(By.id("outlined-number")).sendKeys("3")
    await driver.findElement(By.id("outlined-number")).click()
    {
      const element = await driver.findElement(By.id("outlined-number"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("outlined-number")).sendKeys("4")
    await driver.findElement(By.id("outlined-number")).click()
    await driver.findElement(By.css(".btn-primario")).click()
  })
})
