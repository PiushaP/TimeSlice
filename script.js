document.getElementById("timeSliceForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const difficulty = document.getElementById("difficulty").value;
    const activity = document.getElementById("activity").value;
  
    let studyTime, breakTime, breakActivity;
  
    if (age === "5-11") {
      if (difficulty === "easy") {
        studyTime = 30;
        breakTime = 5;
      } else if (difficulty === "medium") {
        studyTime = 25;
        breakTime = 7;
      } else {
        studyTime = 20;
        breakTime = 10;
      }
    } else if (age === "12-18") {
      if (difficulty === "easy") {
        studyTime = 45;
        breakTime = 10;
      } else if (difficulty === "medium") {
        studyTime = 35;
        breakTime = 12;
      } else {
        studyTime = 30;
        breakTime = 15;
      }
    } else {
      if (difficulty === "easy") {
        studyTime = 60;
        breakTime = 10;
      } else if (difficulty === "medium") {
        studyTime = 50;
        breakTime = 15;
      } else {
        studyTime = 45;
        breakTime = 20;
      }
    }
  
    if (age === "5-11") {
      if (activity === "physical") {
        breakActivity = "Recess";
      } else if (activity === "relaxing") {
        breakActivity = "Play with Legos";
      } else if (activity === "social") {
        breakActivity = "Play Board Games with Friends";
      } else {
        breakActivity = "Eat a Snack or Drink Water";
      }
    } else if (age === "12-18") {
      if (activity === "physical") {
        breakActivity = "Stretching";
      } else if (activity === "relaxing") {
        breakActivity = "Listen to Music";
      } else if (activity === "social") {
        breakActivity = "Chat with Friends";
      } else {
        breakActivity = "Have a Snack";
      }
    } else {
      if (activity === "physical") {
        breakActivity = "Stretching";
      } else if (activity === "relaxing") {
        breakActivity = "Meditation";
      } else if (activity === "social") {
        breakActivity = "Chat with Friends";
      } else {
        breakActivity = "Have a Drink";
      }
    }
  
    document.getElementById("outputName").textContent = `Hi ${name}!`;
    document.getElementById("outputTime").textContent = `Study time: ${studyTime} minutes`;
    document.getElementById("outputActivity").textContent = `Break activity: ${breakActivity} (${breakTime} minutes)`;
  
    document.getElementById("output").classList.remove("hidden");
  });
  