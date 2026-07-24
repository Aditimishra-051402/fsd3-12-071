import{eventEmitter} from 'node:events';
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
    console.log(`${name} is checking out.`);
}

login("Aditi Mishra");