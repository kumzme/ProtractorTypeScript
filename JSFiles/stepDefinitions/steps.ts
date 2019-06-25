import { Given, When, Then } from "cucumber";
import{browser} from "protractor";
import { protractor } from "protractor/built/ptor";
import { async } from "q";
import {calculator} from  "../pageObjects/calculator";

let calc = new calculator();
Given('I navigated to Calc site', async()=>{

    await browser.get('http://juliemr.github.io/protractor-demo/');

})

When('I added two numbers {string} and {string}', async(str1,str2)=>{

     await calc.firstEditBox.sendKeys(1);
     await calc.secondEditBox.sendKeys(2);
     

})

Then('the outout displayed should be {string}',async(string)=>{

    await calc.goBtn.click();
    await calc.findItem.getText().then(function(text)
        {
            console.log(text);
        })



})