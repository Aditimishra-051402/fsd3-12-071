import{EventEmitter} from 'node:events';
const login = (name) => {
    console.log(`${name} logged in.`);
};

const start = () => {
    console.log("System started.");
};
const working = (name) => {
    console.log(`${name} is adding items to the cart.`);
};
const checkout =(name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greet", start);
task.on("start", login);
task.on("greet", working);
task.on("greet", checkout);
task.once("exit", ()=> {
    console.log("System shutting down.");
});
task.emit("start", "Aaniya Singh");
task.emit("greet", "Aaradhya Singh");
task.off("greet", working);
task.emit("greet", "Akriti Gupta");

