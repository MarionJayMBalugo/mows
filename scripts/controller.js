


var address="";
var topicR=document.getElementById('topic_receive').value;
var btnDisConnect = document.getElementById('btn_Disconnect');
var btnConnect = document.getElementById('btn_connect');
var btnpub = document.getElementById('btn_publish');
var btnsub = document.getElementById('btn_subscribe');
var btnUnsub = document.getElementById('btn_unsubscribe');
topicG=document.getElementById('topic_give').value;


//for connect
btnConnect.addEventListener('click', function (e) {
  e.preventDefault();
  address=document.getElementById('address').value;
  client = mqtt.connect(address)

  client.on("connect", function () {
    console.log("Successfully connected");
    document.getElementById('status').innerHTML='connected';
  })

  client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));    
  })
});



//for disconnect
btnDisConnect.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('status').innerHTML='Disconnected';
  address=" ";
  client.end();
});



//for publish
btnpub.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("publish")
  client.publish(topicR, "hello world!") 
});


//for subscribe
btnsub.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(topicG)
  
   client.subscribe(topicG)    
});


btnUnsub.addEventListener('click', function (e) {
  e.preventDefault();
  topicG="unsub";
});






































// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!")

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
