/**
 * Simulez une application de messagerie 
 */

const messages = [];
const channel = new events.EventEmitter();

channel.on("message",(message) => {
    console.log("Un message a été envoyé : " + message);
});

process.stdin.on("data",(message) => {
    
});