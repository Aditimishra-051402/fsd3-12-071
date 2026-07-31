const f1 = () => {
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};
function main() {
  console.log("main");
  setTimeout(f1, 0);
  //setInterval(f1,1000);
  setImmediate(f2);
  f3();
  console.log("end");
}
main();
// a function not executed immediately but it must be executed after a while it has some status during the execution
// it may resolve 