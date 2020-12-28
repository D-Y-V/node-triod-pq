const runWorker = require('../build/Release/napi-asyncworker-example-native');



let result = runWorker
    .runAsyncWorker( onComplete, 'SELECT * FROM test1 WHERE t = $1 and i = $2', "joe's place", '1');
// console.log("runSimpleAsyncWorker returned '"+result+"'.");


  result = runWorker.runAsyncWorker(onComplete, "select * from test1;");
 // console.log("runSimpleAsyncWorker returned '"+result+"'.");
  result = runWorker.runAsyncWorker(onComplete, "select * from a1;");

result = runWorker.runAsyncWorker(onComplete, "select * from imgs;");


function onComplete (err, result) {
    if (err) {
         console.log("runAsyncWorker returned an error: ", err);
    } else {
        console.log(`runAsyncWorker returned: tuples = ${result.ntuples}  fields = ${result.nfields}`);
    }
}
