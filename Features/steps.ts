import { Given, Then,When } from "cucumber";
import {browser} from 'protractor';
import {calculator} from  "../pageObjects/calculator";

let calc = new calculator();
Given('I navigated to Calc site',async()=>{
    browser.get('http://juliemr.github.io/protractor-demo/');
})

When('I added two numbers {string} and {string}', async(str1,str2)=>{
    
    await calc.firstEditBox.sendKeys(str1);
     await calc.secondEditBox.sendKeys(str2);
 
  
})
Then('the outout displayed should be {string}', async(string)=>{
    await calc.goBtn.click();      
    calc.findItem.getText().then(function(text)
    {
        console.log(text);
    })

})