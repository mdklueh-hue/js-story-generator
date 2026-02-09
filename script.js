

let adjective = "brave";
let noun = "Dragon";
let verb = "sleeping";
let place = "mountain";
let adjective2 = "fiery";
let noun2 = "Marshmallow";

// Die einzelnen Textteile werden mit + verbunden.
// variablen werden an den passenden Stellen eingesetzt.

let firstStory =
  "Once upon a time, there was a(n) " + 
  adjective + 
  " " + 
  noun + 
  " who loved to eat " +
  noun2 +
  "." +
  " The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective 2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";

// Ausgabe der ersten Geschichte in der Konsole
console.log("First story: " + firstStory);


// Die gleichen Variablen werden wiederverwendet, 
// aber mit neuen Wörtern gefüllt.
// Dadurch entsteht automatisch eine neue Geschichte.

adjective = "funny";
noun = " cat";
verb = " running";
place = " city";
adjective2 = "tiny";
noun2 = "pizza";

let secondStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun + 
  " who loved to eat " +
  noun2 +
  "." + 
  " The " + 
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " + 
  verb + 
  ".";

//Ausgabe der zweiten Geschichte in der Kosnole
console.log("Second story: " + secondStory);
