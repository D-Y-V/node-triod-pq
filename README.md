# Async non blocking connector from Node.js to PostgreSQL via libpq. N-API AsyncWorker class used.

It is my own implementation, based on my own requirements.
1. Fast. 
2. Simple.
3. Minimal code size. Aprox 100 lines of c++ code.      

Implemented 2 basic calls. **PQexec() & PQexecParams()** from `libpq`.
This calls cover over 99% cases and requirements(my own).
A tutorial, describing this project, can be found at the [N-API Resource](https://napi.inspiredware.com/special-topics/asyncworker.html).

**Requirements:**
1. Installed Nodejs. May be with dev headers.
2. Working `node-gyp`  and `npm` tools.
3. Working `libpq` library from PostgreSQL.
4. `libpq` use login/password/database name environment variables.
5. PostgreSQL's connection string **NOT** used. No plain text login/pass stored.
6. You _**should**_ customize `./test/Test.js` for meet yours environment. 
7. Connector accept ONLY strings. Returns strings. Remember, always pass strings. For example not `5`, but `'5'` 

>export PGUSER=username  
>export PGHOST=x.x.x.x  
>export PGPASSWORD=password  
>export PGDATABASE=dbname  
>export PGPORT=xxxx  

To build and run this program on your system, clone it to your computer and run these two commands inside your clone:

```
npm install
npm test
```
**Usage:**  
How to use, see `./test/Test.js`. Connector returns 3 things. `ntuples` (row count), `nfields` (fields count). Returned data implemented
as key-value Object properties, key is `int`. For example, `sql_result[0] = '123456'; sql_result[1] = 'test data';` This is loop-optimized.
 If blob data returned (picture or other binary data), it encoded/escaped via PostgreSQL server, not connector. Connector simple pass **As-Is**. 