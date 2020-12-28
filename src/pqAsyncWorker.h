#pragma once
#include <napi.h>
#include <libpq-fe.h>
#include <iostream> // cin && cout
#include <vector>

using namespace Napi;

class pqAsyncWorker : public AsyncWorker {
public:
    pqAsyncWorker(Function& callback,std::string sql, std::vector<std::string> params);
    virtual ~pqAsyncWorker(){};
    void Execute();
    void OnOK();
private:
    std::string sql;
    std::vector<std::string> params;
    std::vector<std::string> sql_result;
    PGconn     *conn;
    PGresult   *res;
    int nfields;
    int ntuples;
};