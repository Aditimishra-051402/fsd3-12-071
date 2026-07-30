import {EventEmitter} from 'events';
const form= new EventEmitter();
form.on("submit", (uname, password) => {
    console.log(`form submitted`);
    console.log(`username: ${uname}`);
    console.log(`password: ${password}`);   
});
form.emit("submit", "abc@abes.com", "123456");
    