Feature: Validation csf Website

Scenario: cals framework
Given: I navigated to "Calc" page
When: I added two numbers "1" and "10"
Then: the outout displayed should be "11".

Scenario: Angular framework
Given: I navigated to "Calc" page
When: I added two numbers "10" and "1"
Then: the outout displayed should be "11".

Scenario: verify Angular website
Given : I navigated to "AngularJs" page
When: I clicked the header link
And I navigate to angluar page
Then i will enter "example" in search box