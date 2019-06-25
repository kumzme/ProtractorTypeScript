"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
let calc = new calculator_1.calculator();
cucumber_1.Given('I navigated to Calc site', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I added two numbers {string} and {string}', (str1, str2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(str1);
    yield calc.secondEditBox.sendKeys(str2);
}));
cucumber_1.Then('the outout displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.goBtn.click();
    calc.findItem.getText().then(function (text) {
        console.log(text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9GZWF0dXJlcy9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDJDQUFtQztBQUNuQywwREFBc0Q7QUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsZ0JBQUssQ0FBQywwQkFBMEIsRUFBQyxHQUFPLEVBQUU7SUFDdEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLDJDQUEyQyxFQUFFLENBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxFQUFFO0lBRWhFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUc3QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0YsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0QsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9