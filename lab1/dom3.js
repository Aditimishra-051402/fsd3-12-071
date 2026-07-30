import {EventEmitter} from 'events';
const button= new EventEmitter();
button.on("click", (uname) => {
    console.log(`button clicked by ${uname}!`);
});

button.emit("click", "Utkarsh");    
button.emit("click", "Aaryan");
button.emit("click", "Aditi");
button.emit("click");