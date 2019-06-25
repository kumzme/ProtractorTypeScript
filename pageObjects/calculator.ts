import { ElementFinder, element,by } from "protractor";


export class calculator
{
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    goBtn:ElementFinder;
    findItem:ElementFinder;


    constructor(){
          
        this.firstEditBox =element(by.model('first'));
        this.secondEditBox=element(by.model('second'));
        this.goBtn=element(by.id("gobutton"));
        this.findItem= element(by.repeater('result in memory')).element(by.css("td:nth-child(3"));

    }
}