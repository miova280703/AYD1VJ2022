// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

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
  it('ReservarVueloCorrecto', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1056, 894)
    {
      const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge > .MuiSvgIcon-root")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css("div:nth-child(3) > .MuiIconButton-sizeLarge path"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
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
})
