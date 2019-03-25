
var Core = require('./../dist/main.js').Core;
new Core({
    "docPath": "m-svc.jd.com",
    "realHostName": "m-svc.jd.com",
    "docPort": "11000",
    "mockPort": 3000,
    "jsPath": "example/",
    "headers": {
        // "host": "kudou-staff-m-fy.jd.com"
    },
    "descInclude": [
        'getAuthCodeUsingGET',
        'bindCarUsingPOST'
    ],
    'override':true
});
