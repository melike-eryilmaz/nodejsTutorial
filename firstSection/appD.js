/*const EventEmitter = require('events');//class
const emitter = new EventEmitter();//new object


//listener 
emitter.on('connection',function(args){
    console.log('connection established');
})

emitter.on('connection1',function(args){
    console.log('connection1 established');
})

emitter.on('connection2',function(args){
    console.log('connection2 established');
})

//event emit
emitter.emit('connection',{id:1,name:'Melike'});*/

const Logger = require('./logger')
const logger = new Logger()
/**emit Logger class  */
logger.on('connection', function (args) {
  console.log('connection established logger class', args)
})

logger.log('Melike is login')


/**Httpserver is also eventemitter. */