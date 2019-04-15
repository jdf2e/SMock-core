
var Core = require('./../dist/main.js').Core;
new Core({
    "docPath": "192.168.128.83",
    "realHostName": "192.168.128.83",
    "docPort": "",
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
