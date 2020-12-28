const runWorker = require('../build/Release/napi-asyncworker-example-native');



let result = runWorker
    .runAsyncWorker( onComplete, 'SELECT * FROM test1 WHERE t = $1 and i = $2', "joe's place", '1');
// console.log("runSimpleAsyncWorker returned '"+result+"'.");


 // let result = runWorker.runAsyncWorker(2, onComplete);
 // console.log("runSimpleAsyncWorker returned '"+result+"'.");

// result = runWorker.runAsyncWorker(4, onComplete);
// console.log("runSimpleAsyncWorker returned '"+result+"'.");
//
// result = runWorker.runAsyncWorker(8, onComplete);
// console.log("runSimpleAsyncWorker returned '"+result+"'.");




function onComplete (err, result) {
    if (err) {
         console.log("runAsyncWorker returned an error: ", err);
    } else {

        console.log("runAsyncWorker returned: "+ result[0],result[1],result[2]);
    }
}
