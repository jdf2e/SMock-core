
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.SMOCK = {})));
}(this, (function(exports) { 'use strict';
    var isDebug = (window.location.href).indexOf('debug') > -1;
    var host = isDebug?'127.0.0.1:4000':'m-svc.jd.com';
    var url = {
        'bindCarUsingPOST': {
            url: host + '/api/car/binding',
            type: 'post'
        },
       
    }

    exports.idDebug = isDebug;
    exports.host = host;
    exports.url = url;

    Object.defineProperty(exports, '__esModule', { value: true });

})))