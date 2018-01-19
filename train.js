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


     database.ref().push ({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
     });

    });


 database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot);
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

