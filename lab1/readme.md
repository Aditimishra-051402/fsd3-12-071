# EventLoop
js is synchronous and single threaded bydefault
## there can be async behaviour 
- with BrowserAPI -
setTimeout, setInterval,
setImmediate, nextTick
- with promises
- with event handlers
# CALL BACK
call back functions=> that pass as argument or the parameter to another function
  
Modern javascript is divided into 2 categories
1. CommonJS (.cjs) -> supports OOPS -> require
- first priority (nextTick, Promise, setImmediate/ setTimeout)

2. ModuleJS (.mjs) -> follow modular approach -> import
- priority (Promise, nextTick, setImmediate/ setTimeout)


