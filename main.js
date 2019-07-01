var name = prompt("Welcome! What is your name?")

if (name && name !== 'null') {
  alert("Hi" + " " + name + "!")

  var cont = confirm("Do you want to go on a trip?")
  if (cont) {
    startGame()
  } else {
    alert("Ok, Bah-Bye!")
  }
} else {
  alert("Game over")
}


function startGame () {
  alert("Let's Go!")
  var miami = confirm("How about Miami Beach?")

  if (miami) {
    beach()
  } else {
    alert("Fine! Good luck this summer in the Las Vegas Oven!")
  }

function beach () {
  alert("Yay! Let's go to Miami, B**ch!")
  var bathingsuit = confirm("Did you pack your bathing suit?")
  

  if (bathingsuit) {
    swim()
   
  } else{
    var cocktail =confirm("Cocktail on the beach?")
    if (cocktail) {
      drink()
    } else {
      alert("Let's just walk around South Beach then.. Bye!")
    }
  }
  
  }
  function swim () {
    alert("Awesome! Let's go for a swim!")
    var sharks = alert("Watch out for The Sharks - The End")
  }
  function drink () {
    alert("Let's relax! Cheers! Bye!")
  }
}