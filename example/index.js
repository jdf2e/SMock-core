
var Core = require('./../dist/main.js').Core;
new Core({
    "docPath": "10.182.30.155",
    "realHostName": "m-svc.jd.com",
    "mockPort": 4000,
    "jsPath": "example/",
    "headers": {
        "host": "kudou-staff-m-fy.jd.com"
    },
    "descInclude": [
        'getAuthCodeUsingGET',
        'bindCarUsingPOST'
    ],
    'override':true
});
