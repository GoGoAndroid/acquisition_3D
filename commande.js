var SerialPort = require("serialport");
const fs=require("fs")
let conf=JSON.parse(fs.readFileSync("conf.json").toString())
console.log(conf)
let arduinoCOMPort = conf.arduinoPort
let delai= conf.delai
let step=conf.step
let angleMax= conf.angleMax
let angle=conf.startAt

rotate=(angle,delai,angleMax,step)=>{
  arduinoSerialPort.write(angle+"\n");
  setTimeout(function(){
    let newAngle=angle+step
    if (newAngle>angleMax) process.exit(0)
    else rotate(newAngle,delai,angleMax,step)
  },delai)
}

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
 baudRate: 9600
});

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
  rotate(angle+step,delai,angleMax,step)
});
