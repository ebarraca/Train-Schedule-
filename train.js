$( document ).ready(function() {


  var config = {
    apiKey: "AIzaSyDBq23d3oW2wznPHkmtfHA7161l5d6qMCs",
    authDomain: "time-50f4c.firebaseapp.com",
    databaseURL: "https://time-50f4c.firebaseio.com",
    projectId: "time-50f4c",
    storageBucket: "",
    messagingSenderId: "275978040967"
  };
  firebase.initializeApp(config);


var database = firebase.database();

    var currentTime; 
    var firstTime; 
    var timeDifference;
    var tRemainder;
    var tMinutesTillTrain;
    var nextTrain;

 $("#submit-btn").on("click", function(event) {
     event.preventDefault();

    var trainName = $("#name-input").val();
    var destination = $("#destination-input").val();
    var firstTrain = $("#first-train-input").val();
    var frequency = $("#frequency-input").val();

    console.log(trainName, destination, firstTrain, frequency);

      var newEntry = {
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      };

  // Uploads employee data to the database
      database.ref().push(newEntry);

});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  //moment() get current time
    currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
    firstTime = moment(firstTrain, "hh:mm").subtract(1, "years");
    console.log(firstTime); 

    // Difference between the times
    timeDifference = moment().diff(moment(firstTime), "minutes");
    console.log(timeDifference);

    // Time apart (remainder)
    tRemainder = timeDifference % frequency;
    console.log(tRemainder);

    // Minute Until Train - need to change to moment js; need a readable time.
    tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    //.html
    //timeApart, nextTrain, tMinutesTillTrain, 

    // alert("Train schedule successfully added");

      // Clears all of the text-boxes
      $("#name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency").val("");


  //   // Add each train's data into the table
  // $("#train-table > tbody").append("<tr><th>" + trainName + "</th><th>" + destination + "</th><th>" +
  // firstTrain + "</th><th>" + frequency + "</th><th>" );

// Add each train's data into the table
 $("tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + moment(nextTrain).format("h:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");

 //parseint - look at employee schedule 

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

