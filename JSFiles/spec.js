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
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const AngularHomePage_1 = require("./pageObjects/AngularHomePage");
describe('test suite', () => {
    it('test case', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys(1);
        yield calc.secondEditBox.sendKeys(2);
        yield calc.goBtn.click();
        calc.findItem.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular home page title validation', () => __awaiter(this, void 0, void 0, function* () {
        let angularPage = new AngularHomePage_1.AngularHomePage();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield angularPage.AngularLink.click();
        yield angularPage.SearchBox.sendKeys("examples");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUc5Qyx5REFBcUQ7QUFDckQsbUVBQThEO0FBRTlELFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFFO0lBSXRCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBTyxFQUFFO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFPLEVBQUU7UUFDbEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDdkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWxELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9