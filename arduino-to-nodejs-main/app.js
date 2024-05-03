
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({ path: '/dev/cu.usbserial-AQ008WNA', baudRate: 115200 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', function(data) {
    
    console.log('Received data from port: ' + data);

    // data received!

    // 1. send it to the website to visualized
    //  io.emit('data', data);
    

    // 2. write them to a file for later retrival
    
   
});


// var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync( 'index.html');

// const parsers = SerialPort.parsers;

// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });

// var port = new SerialPort('/dev/cu.usbserial-AQ008WNA',{ 
//     baudRate: 115200,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// port.pipe(parser);

// var app = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(index);
// });

// var io = require('socket.io').listen(app);

// io.on('connection', function(socket) {
    
//     console.log('Node is listening to port');
    
// });

// app.listen(3000);