// YD
#include "pqAsyncWorker.h"

Value runAsyncWorker(const CallbackInfo& info) {
    Napi::Env env = info.Env();
    uint32_t pcount =  info.Length();
    if(pcount < 3) {
        Napi::TypeError::New(env, "Expected minimum 3 string arguments. All are string.")
                .ThrowAsJavaScriptException();
        return env.Null();
    }
    Function callback = info[0].As<Function>();
    std::string sql = info[1].As<Napi::String>().Utf8Value();
    std::vector<std::string> vparams;
    for (uint32_t i = 2; i < pcount; ++i) {
        std::string s = info[i].As<Napi::String>().Utf8Value();
        vparams.push_back(s);
    }
    pqAsyncWorker* asyncWorker = new pqAsyncWorker(callback, sql, vparams);
    asyncWorker->Queue();
    std::string msg =  "pqAsyncWorker  queued.";
    return String::New(env, msg.c_str());
};

Object Init(Env env, Object exports) {
    exports["runAsyncWorker"] = Function::New(
            env, runAsyncWorker, std::string("runAsyncWorker"));
    return exports;
}

NODE_API_MODULE(addon, Init)