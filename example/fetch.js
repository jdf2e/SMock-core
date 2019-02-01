var axios = require('axios');
let apiDoc;
function a() {
    return new Promise((resolve, reject) => {
        axios({
            url: 'http://10.182.30.155/v2/api-docs'
        })
        .then((data) => {
            // resolve(data.data);
            apiDoc = data.data;
            resolve(apiDoc);
            console.log(apiDoc);
        })
    })
}
a().then((data) => {
    console.log(apiDoc.definitions['ResultResponse«ApplyBooking»']);
})
