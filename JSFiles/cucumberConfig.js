"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capablities: { "browseName": "chrome" },
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        require: [
            './stepDefinitions/steps.js',
            './stepDefinitions/timeout.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNXLFFBQUEsTUFBTSxHQUFTO0lBQ3RCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELFdBQVcsRUFBQyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUM7SUFDckMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFDO1FBQ1QsT0FBTyxFQUFDO1lBQ0osNEJBQTRCO1lBQzVCLDhCQUE4QjtTQUNqQztLQUVSO0NBRUEsQ0FBQSJ9