import { browser, element } from "protractor";
import {by } from "protractor";
import { async } from "q";
import {calculator} from  "./pageObjects/calculator";
import {AngularHomePage} from "./pageObjects/AngularHomePage";

describe('test suite',()=>{
     
    

    it('test case', async()=>{
     let calc = new calculator();
     
     await browser.get('http://juliemr.github.io/protractor-demo/');
     await calc.firstEditBox.sendKeys(1);
     await calc.secondEditBox.sendKeys(2);
     await calc.goBtn.click();

        
        calc.findItem.getText().then(function(text)
        {
            console.log(text);
        })

    })
    
    it('Angular home page title validation', async()=>{
    let angularPage = new AngularHomePage();
     await browser.get('https://angularjs.org/');
     await  angularPage.AngularLink.click();
     await angularPage.SearchBox.sendKeys("examples");

    })
    })