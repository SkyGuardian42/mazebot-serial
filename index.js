const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 115200
})

//Read data that is available but keep the stream in "paused mode"
//port.on('readable', function () {
//  console.log('Data:', port.read())
//})

 //Switches the port into "flowing mode"
//port.on('data', function (data) {
//  console.log('Data:', data)
//})

// Pipe the data into another stream (like a parser or standard out)
//const lineStream = port.pipe(new Readline())
//
//
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)
