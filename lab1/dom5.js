import {EventEmitter} from 'events';

class DomClass extends EventEmitter{
    addEventListener(eventName, callback){
        this.on(eventName, callback);
    }
    removeEventListener(eventName, callback){
        this.off(eventName, callback);
    }
    dispatchEvent(eventName, eventData={}){
        const event = {
            type: eventName,
            ...eventData
        }
        this.emit(eventName, event);
    }
}
const button= new DomClass();
const handleClick = (event) => {
    console.log(`Button clicked! Event type: ${event.type} at ${event.timestamp}`);
}
button.addEventListener('click', handleClick);
button.dispatchEvent('click', {
    target: "submitButton",
});