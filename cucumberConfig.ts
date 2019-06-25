import {Config} from "protractor";
export let config:Config ={
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capablities:{ "browseName": "chrome"},
    specs :['../Features/demo.feature'],
    cucumberOpts:{
        require:[ 
            './stepDefinitions/steps.js',
            './stepDefinitions/timeout.js'
        ]

}

}