// LICENSE : MIT
"use strict";
var Promise = require("bluebird");
process.on("unhandledRejection", function (reason, promise) {
    console.log("unhandledRejection", reason, promise);
});

function doAsync() {
    return new Promise(function () {
        throw Error("doAsyncで何か例外が起きた")
    });
}

doAsync();// catchしてない => unhandledRejection

