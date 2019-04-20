var config = {
  apiKey: "AIzaSyCt-s2aVoJxorkyVWNX7NT3ditF4I65Azc",
  authDomain: "train-51fd9.firebaseapp.com",
  databaseURL: "https://train-51fd9.firebaseio.com",
  projectId: "train-51fd9",
  storageBucket: "",
  messagingSenderId: "633239986819"
};

firebase.initializeApp(config);

var database = firebase.database();

// Asume
var trainFrequency = 3;
  
// Time is 3:30 AM
var firstTime = "03:30";



$("#add-train-btn").on("click", function(event) {
event.preventDefault();


var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#Destination-input").val().trim();
var trainTime = $("#first-train-input").val().trim();
var trainFrequency = $("#frequency-input").val().trim();


var newTrain = {
  name: trainName,
  destination: trainDestination,
  time: trainTime,
  frequency: trainFrequency,
};

database.ref().push(newTrain);
console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.time);
console.log(newTrain.frequency);


$("#train-name-input").val("");
$("#Destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");
});

database.ref().on("child_added",function(childSnapshot){
var trainName = childSnapshot.val().name;
var trainDestination = childSnapshot.val().destination;
var trainTime = childSnapshot.val().time;
var trainFrequency = childSnapshot.val().frequency;


console.log(trainName);
console.log(trainDestination);
console.log(trainTime);
console.log(trainFrequency);


 
 
 
 var trainFrequency = 15;

 
 var firstTime = "03:30";

 
 var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
 console.log(firstTimeConverted);

 
 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);

 
 var tRemainder = diffTime % trainFrequency;
 console.log(tRemainder);

 
 var minutesAway = trainFrequency - tRemainder;
 console.log("minutesAway: " + minutesAway);

 
 var nextArrival = moment().add(minutesAway, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

 var newRow = $("<tr>").append(
  $("<th>").text(trainName),
  $("<th>").text(trainDestination),
  $("<th>").text(trainTime),
  $("<th>").text(trainFrequency),
  $("<th>").text(nextArrival),
  $("<th>").text(minutesAway)

);

$("#train-table").append(newRow);

});