$( document ).ready(function() {




var config = {
   apiKey: "AIzaSyBwdZAgqdFy_uThLPmRUpiiUOch7jzlwWI",
   authDomain: "employee-timesheet-cb3de.firebaseapp.com",
   databaseURL: "https://employee-timesheet-cb3de.firebaseio.com",
   projectId: "employee-timesheet-cb3de",
   storageBucket: "",
   messagingSenderId: "705228383201"
 };
 firebase.initializeApp(config);


var database = firebase.database();

 $("#submit-button").on("click", function(event) {
     event.preventDefault();

    var trainName = $("#name-input").val();
    var destination = $("#destination-input").val();
    var firstTrain = $("#first-train-input").val();
    var frequency = $("#frequency-input").val();

    console.log(trainName, destination, firstTrain, frequency);


//moment() get current time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
    var firstTime = moment(firstTrain, "hh:mm").subtract(1, "years");
    console.log(firstTime); 

    // Difference between the times
    var timeDifference = moment().diff(moment(firstTime), "minutes");
    console.log(timeDifference);

    // Time apart (remainder)
    var tRemainder = timeDifference % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


  var newEntry = {
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
  };

  // Uploads employee data to the database
  database.ref().push(newEntry);

//.html
//timeApart, nextTrain, tMinutesTillTrain, 





    // var timeNow = moment().format("hh:mm");
    // console.log(timeNow);

    // var firstTime = moment(firstTrain, "hh:mm").subtract(1, "years");
    // console.log(firstTime); 

    // var timeDifference = moment().diff(moment.unix(firstTime), "minutes");
    // console.log(timeDifference);

    // var timeApart = timeDifference%frequency;
    // console.log(timeApart);

    });


 database.ref().on("child_added", function(childSnapshot) {
  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

    // Add each train's data into the table
  $("#train-table > tbody").append("<tr><th>" + trainName + "</th><th>" + destination + "</th><th>" +
  firstTrain + "</th><th>" + frequency + "</th><th>" );
});



 });





//refer to 02-recentuserwithpush.html for more notes
//do the firebase set up; var database = database.firebase AFTER the call; (be
//sure to include firebase url to script)
//set inital variables
//set the click binding for the button
//set variables that grab the value of the input
//create a new object and .push - this create what we are pushing through the firebase
//.on childadded - we call the function so that WHEN its on the child (the inputs)
//the function is called b/c theres only a table with the users, we dont need to 
//order anything and select the top record

//childthing variables 

//prettyify the employee start with the moment website. var emStartPretty = moment.unix(empStart).format("mm/dd/yy"); 
//calcluate the next arrival worked

//calcluate the minutes away
//html it all

//http://momentjs.com/

