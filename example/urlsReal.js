
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.SMOCK = {})));
}(this, (function(exports) { 'use strict';
    var isDebug = (window.location.href).indexOf('debug') > -1;
    var host = isDebug?'127.0.0.1:4000':'m-svc.jd.com';
    var restfulURL = function(url, param) {
        let result = url;
        for(var prop in param) {
            result = result.replace('{'+prop+'}', param[prop]);
        }
        return result;
    }
    var url = {
        'getAuthCodeUsingGET': {
            url: host + '/api/auth/code',
            type: 'get'
        },'errorUsingPATCH': {
            url: host + '/error',
            type: 'patch'
        },'getSmsVCodeUsingGET': {
            url: host + '/api/auth/code/binding/code',
            type: 'get'
        },'submitBookingUsingPOST': {
            url: host + '/api/booking',
            type: 'post'
        },'cancelBookingUsingGET': {
            url: host + '/api/booking/cancel',
            type: 'get'
        },'applyBookingUsingGET': {
            url: host + '/api/booking/service/{serviceId}',
            type: 'get'
        },'getBookingInfoUsingGET': {
            url: host + '/api/booking/{bookingId}',
            type: 'get'
        },'activeCarUsingPUT': {
            url: host + '/api/car/active',
            type: 'put'
        },'bindCarUsingPOST': {
            url: host + '/api/car/binding',
            type: 'post'
        },'getCarBrandInfoUsingGET': {
            url: host + '/api/car/brands/{productSkuId}',
            type: 'get'
        },'getModelUsingGET': {
            url: host + '/api/car/model/{productSkuId}/{seriesYearId}',
            type: 'get'
        },'isAdaptUsingGET': {
            url: host + '/api/car/product',
            type: 'get'
        },'getCropsAndSeriesUsingGET': {
            url: host + '/api/car/series/{productSkuId}/{brandId}',
            type: 'get'
        },'getSeriesYearUsingGET': {
            url: host + '/api/car/seriesYearId/{productSkuId}/{seriesId}',
            type: 'get'
        },'getCityUsingGET': {
            url: host + '/api/city/current/location',
            type: 'get'
        },'queryCityByCoordinateUsingGET': {
            url: host + '/api/common/area/city/queryByCoordinate',
            type: 'get'
        },'getCarBrandInfoUsingGET_1': {
            url: host + '/api/guide/brands/{productSkuId}',
            type: 'get'
        },'getModelUsingGET_1': {
            url: host + '/api/guide/model/{productSkuId}/{seriesYearId}',
            type: 'get'
        },'getGuideProductsUsingGET': {
            url: host + '/api/guide/product',
            type: 'get'
        },'getCropsAndSeriesUsingGET_1': {
            url: host + '/api/guide/series/{productSkuId}/{brandId}',
            type: 'get'
        },'getSeriesYearUsingGET_1': {
            url: host + '/api/guide/seriesYearId/{productSkuId}/{seriesId}',
            type: 'get'
        },'getAreaStoreUsingGET': {
            url: host + '/api/guide/store/area',
            type: 'get'
        },'getStoreDetailUsingGET': {
            url: host + '/api/guide/store/detail',
            type: 'get'
        },'getNearbyStoreUsingGET': {
            url: host + '/api/guide/store/nearby',
            type: 'get'
        },'isLoginUsingGET': {
            url: host + '/api/login/isLogin',
            type: 'get'
        },'createUsingPOST': {
            url: host + '/api/payment/verifyPayPassword',
            type: 'post'
        },'getServiceListUsingGET': {
            url: host + '/api/service',
            type: 'get'
        },'refundUsingGET': {
            url: host + '/api/service/refund',
            type: 'get'
        },'getServiceUsingGET': {
            url: host + '/api/service/{serviceId}',
            type: 'get'
        },'getStoreDetailUsingGET_1': {
            url: host + '/api/store/detail',
            type: 'get'
        },'getStoresUsingGET': {
            url: host + '/api/store/nearby',
            type: 'get'
        },'getStoresInAreaUsingGET': {
            url: host + '/api/store/stores',
            type: 'get'
        }
    }

    exports.idDebug = isDebug;
    exports.host = host;
    exports.url = url;
    exports.restfulURL = restfulURL;

    Object.defineProperty(exports, '__esModule', { value: true });

})))