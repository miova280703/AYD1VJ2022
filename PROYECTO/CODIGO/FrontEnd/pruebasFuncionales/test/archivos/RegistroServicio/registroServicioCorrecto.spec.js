// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('RegistroServicioCorrecto', function () {
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
  it('Registro', async function () {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect(1024, 852)
      await driver.findElement(By.xpath("//button")).click()
      {
          const element = await driver.findElement(By.xpath("//div[2]/div[2]/div/div/div"))
          await driver.actions({ bridge: true }).move(element).click().perform()
      }
      console.log("todo bien sin problema")
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
})