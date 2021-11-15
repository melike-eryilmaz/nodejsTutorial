const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('connection',{id:2,name:'Eylül'});

    }
}

module.exports = Logger;