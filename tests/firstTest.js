const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
  // Set Chrome options to disable notifications
  let options = new chrome.Options();
  options.addArguments("--disable-notifications");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("https://www.facebook.com/groups/641876911027291");

    // var emailField = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]/form/div/div[3]/div/label/div/div/input"));

    await driver.sleep(5000);

    var emailField = await driver.findElement(
      By.xpath(
        "/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]/form/div/div[3]/div/label/div/div/input"
      )
    );

    await emailField.click();
    await emailField.sendKeys("y2matevideodownload@gmail.com");

    var emailField = await driver.findElement(
      By.xpath(
        "/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]/form/div/div[4]/div/label/div/div/input"
      )
    );
    await emailField.click();
    await emailField.sendKeys("Y2mateVideoDownload526752675267", Key.RETURN);

    await driver.sleep(10000);

    var CreatePost = await driver.findElement(
      By.xpath("//span[text()='Write something...']")
    );

    await CreatePost.click();
    await driver.sleep(5000);

    var CreatePostPopup = await driver.findElement(
      By.xpath(
        "/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div[1]/form/div/div[1]/div/div/div[1]/div/div[2]/div[1]/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div/div/div/div/span"
      )
    );
    // Send keys to the element
    await CreatePostPopup.sendKeys("https://fb.watch/sFgrLVWnMc/");

    await driver.sleep(3000);

    const PostBtn = await driver.findElement(
      By.xpath("//div[@aria-label='Post']")
    );
    await PostBtn.click();

    // Wait for 3 seconds
    // await driver.sleep(3000);

    // Clear the input and send new keys
    // await CreatePostPopup.clear();
    // await CreatePostPopup.sendKeys("Oh jerry, You tease the TOM a lot");

    // await driver.get("https://github.com/");
    // await driver.actions().sendKeys(Key.F12).perform();
    // await driver.findElement(By.partialLinkText("Sign in")).click();
    // await driver.wait(until.titleContains("Sign in"), 10000);
    // const Name = await driver.findElement(By.name("login"));
    // await Name.sendKeys("Mr-Mudassar");
    // await driver
    //   .findElement(By.name("password"))
    //   .sendKeys("Mudassar776Mudassar776", Key.RETURN);
    await driver.sleep(5000);
  } finally {
    // await driver.quit();
  }
})();
