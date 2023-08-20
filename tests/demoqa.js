const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up the Chrome driver
const options = new chrome.Options();
options.addArguments('--start-maximized');
const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

(async function example() {
  try {
      // Step 1: Go to the URL
      await driver.get('https://demoqa.com/login');
      

      // Step 2: Select New User and click on the captcha
      const newUserButton = await driver.findElement(By.id('newUser'));
      await newUserButton.click();
  

      // Step 3: Capture the details and register
      const firstNameInput = await driver.findElement(By.id('firstname'));
      const lastNameInput = await driver.findElement(By.id('lastname'));
      const userNameInput = await driver.findElement(By.id('userName'));
      const passwordInput = await driver.findElement(By.id('password'));
      //const registerButton = await driver.findElement(By.id('register'));
        
        const x = 753;
        const y = 450;

      await firstNameInput.sendKeys('John');
      await lastNameInput.sendKeys('Doe');
      await userNameInput.sendKeys('johndoe123');
      await passwordInput.sendKeys('pass123');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await driver.actions().move({ x, y }).click().perform();
      await new Promise((resolve) => setTimeout(resolve, 2000));


        // Scroll down to bring the element into view
        const buttonToClick2 = await driver.findElement(By.id('register'));
        await driver.executeScript('arguments[0].scrollIntoView();', buttonToClick2);

        // Click the element
        await buttonToClick2.click();



      // Step 4: Go back to Login
      await driver.navigate().back();

     // Step 5: Text Box
     await driver.findElement(By.xpath('//div[text()="Elements"]')).click();
     await driver.findElement(By.xpath("//span[text()='Text Box']")).click();
     const textBoxName = await driver.findElement(By.id('userName'));
     const userEmail = await driver.findElement(By.id('userEmail'));
     const currentAddress = await driver.findElement(By.id('currentAddress'));
     const permanentAddress = await driver.findElement(By.id('permanentAddress'));
     const submitButton = await driver.findElement(By.id('submit'));
     

     // Fill in the fields
     await textBoxName.sendKeys('John Doe');
     await userEmail.sendKeys('john.doe@example.com');
     await currentAddress.sendKeys('123 Main St');
     await permanentAddress.sendKeys('123 Main St');
     await driver.executeScript('window.scrollBy(0, 200);'); // Scroll by 500 pixels downward
     await new Promise((resolve) => setTimeout(resolve, 3000));
     await submitButton.click();

     // Step 6: Web Tables - Add and Delete a Record
     await new Promise((resolve) => setTimeout(resolve, 3000));
     await driver.findElement(By.xpath('//div[text()="Elements"]')).click();
     await driver.findElement(By.id('item-3')).click();
     const addNewRecordButton = await driver.findElement(By.id('addNewRecordButton'));
     await addNewRecordButton.click();

     const firstNameWebTable = await driver.findElement(By.id('firstName'));
     const lastNameWebTable = await driver.findElement(By.id('lastName'));
     const userEmailWebTable = await driver.findElement(By.id('userEmail'));
     const ageWebTable = await driver.findElement(By.id('age'));
     const salaryWebTable = await driver.findElement(By.id('salary'));
     const departmentWebTable = await driver.findElement(By.id('department'));
     const submitWebTable = await driver.findElement(By.id('submit'));

     await firstNameWebTable.sendKeys('Jane');
     await lastNameWebTable.sendKeys('Smith');
     await userEmailWebTable.sendKeys('jane.smith@example.com');
     await ageWebTable.sendKeys('30');
     await salaryWebTable.sendKeys('50000');
     await departmentWebTable.sendKeys('HR');
     await submitWebTable.click();
     await new Promise((resolve) => setTimeout(resolve, 3000));
     // Delete the added record
     const deleteButton = await driver.findElement(By.id('delete-record-4'));
     await deleteButton.click();


    // Step 7: Upload and Download
     await driver.findElement(By.xpath('//div[text()="Elements"]')).click();
     await driver.findElement(By.xpath('//span[text()="Upload and Download"]')).click();  
     await new Promise((resolve) => setTimeout(resolve, 7000));
     const uploadFileInput = await driver.findElement(By.id('uploadFile'));
     const downloadButton = await driver.findElement(By.id('downloadButton'));

     // Upload a file
     const filePath = 'path_to_your_file.txt';
     await uploadFileInput.sendKeys(filePath);

     // Download the file
     await downloadButton.click();

     // Step 8: Alerts, Frame & Windows - Nested Frames
     await driver.findElement(By.xpath('//div[text()="Alerts, Frame & Windows"]')).click();
     await driver.findElement(By.xpath('//span[text()="Nested Frames"]')).click();
     const frame = await driver.findElement(By.tagName('iframe'));
     await driver.switchTo().frame(frame);
     const childIframe = await driver.findElement(By.tagName('iframe'));
     const parentFrame = await driver.findElement(By.xpath('//*[contains(text(), "Parent frame")]'));
     
     // Print contents of childIframe and parentFrame
     console.log(await childIframe.getText());
     console.log(await parentFrame.getText());

     // Switch back to default content
     await driver.switchTo().defaultContent();

     // Step 9: Widgets - Slider
     await driver.findElement(By.xpath('//div[text()="Widgets"]')).click();
     await driver.findElement(By.xpath('//span[text()="Slider"]')).click();
     const slider = await driver.findElement(By.css('input[type="range"]'));
     const sliderRange = await driver.findElement(By.css('input.range-slider.range-slider--primary'));
     const sliderMin = await driver.findElement(By.css('input[min="0"]'));
     const sliderMax = await driver.findElement(By.css('input[max="100"]'));

     // Drag the slider to 75
     const sliderWidth = await sliderRange.getSize();
     const xOffset = sliderWidth.width * 0.75;
     await driver.actions().dragAndDrop(slider, { x: xOffset, y: 0 }).perform();

 } finally {
     // Close the browser
     await driver.quit();
 }
})();
