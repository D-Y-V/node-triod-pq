const runWorker = require('../build/Release/node-triod-pq.node');



runWorker.run(onComplete, 'SELECT * FROM test1 WHERE t = $1 and i = $2', "joe's place", '1');
runWorker.run(onComplete, "select * from test1;");
runWorker.run(onComplete, "select * from a1;");
runWorker.run(onComplete, "select * from imgs;");


function onComplete (err, result) {
    if (err) {
        console.log("runAsyncWorker returned an error: ", err);
    } else {
        console.log(`runAsyncWorker returned: tuples = ${result.ntuples}  fields = ${result.nfields} first element is ${result[0]}`);
    }
}
