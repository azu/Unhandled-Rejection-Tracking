var Promise = require("bluebird");
process.on("unhandledRejection", function (reason, promise) {
    console.log("unhandledRejection");
});

process.on("rejectionHandled", function (promise) {
    console.log("rejectionHandled");
});

var rejected = Promise.reject(new Error("Error Promise"));
setTimeout(function () {
    rejected.catch(function () {
        // rejected済みのpromiseに`catch`する
    });
},100);