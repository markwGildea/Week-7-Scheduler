  var config = {
      apiKey: "AIzaSyAzwfwzR8bhJuvgPhOqdVeoyTxMpsAf1EU",
      authDomain: "all-aboard-2a7cb.firebaseapp.com",
      databaseURL: "https://all-aboard-2a7cb.firebaseio.com",
      storageBucket: "all-aboard-2a7cb.appspot.com",
      messagingSenderId: "818783588193"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Initial Values
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";

  // Capture Button Click
  $("#submit").on("click", function() {

      // Grabbed values from text boxes
      trainName = $("#trainName").val().trim();
      destination = $("#destination").val().trim();
      firstTrain = $("#firstTrain").val().trim();
      frequency = $("#frequency").val().trim();

      // Code for handling the push
      database.ref().push({
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      });

      // Don't refresh the page!
      return false;
  });

  database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firstTrain);
      console.log(childSnapshot.val().frequency);


      // full list of items to the well
      $("#tbody").append("<tr><td> " + childSnapshot.val().trainName +
          " </td><td> " + childSnapshot.val().destination +
          " </td><td id='firstTrain'> " + childSnapshot.val().firstTrain +
          " </td><td></td><td id='frequency'> " + childSnapshot.val().frequency + " </td><td></td></tr>");

      // Handle the errors
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });


  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      // console.log(snapshot.val());
      console.log(snapshot.val().trainName);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().firstTrain);
      console.log(snapshot.val().frequency);
      console.log(moment(convertedDate).format("MMM DDD, YYYY hh:mm:ss"));
      
      // Change the HTML to reflect
      // $("#trainName-display").html(snapshot.val().trainName);
      // $("#email-display").html(snapshot.val().destination);
      // $("#age-display").html(snapshot.val().firstTrain);
      // $("#comment-display").html(snapshot.val().frequency);

      // Handle the errors
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });
