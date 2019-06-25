import { ElementFinder, element,by } from "protractor";

export class AngularHomePage{

    AngularLink:ElementFinder;
    SearchBox:ElementFinder;

    constructor() {
        this.AngularLink= element(by.linkText('angular.io'));
        this.SearchBox= element(by.css("input[type='search']"));
    }
}