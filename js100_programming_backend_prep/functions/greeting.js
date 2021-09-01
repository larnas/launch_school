let grretingMessage = "Good Morning!";

function greetPeople() {
  console.log(grretingMessage);
}

function changeGreetingMessage(newMessage) {
  grretingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople();