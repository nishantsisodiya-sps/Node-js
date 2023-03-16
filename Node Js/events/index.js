
const EventEmmiter = require("events")

const events = new EventEmmiter();

// events.on('sayMyName', ()=>{
//     console.log('My name is Nishant sisodiya');
// })


// events.on('sayMyName', ()=>{
//     console.log('My Middle name is satish');
// })


// events.on('sayMyName', ()=>{
//     console.log('My last is sisodiya');
// })

events.on('check', (sc , msg)=>{
    console.log(`The status code of the page is ${sc} 
        Amd the Message is ${msg}
    `);
});

events.emit('check' , 200 , "ok");