//console.log("Amarjit Singh")
var readlineSync = require('readline-sync')
var score=0;
var username = readlineSync.question("Tell us your name ")
console.log("Welcome "+username+" Get Ready to take a quiz on Office!!")

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer===answer) {
    console.log("You are right!")
    score+=1
  } else {
    console.log("You are wrong!")
  }
  console.log("-----------------")
  console.log("Your Score is: "+score)
  console.log("-----------------")
}

var questions = [
  {
    question: "What does Michael pretend to fire Pam over in season one?\na.)Stealing post-it notes\nb.)Not answering the phone\nc.)Wearing her glasses\n",
    answer: "a",
  },
  {
    question: "What's Pam's favorite flavor of yogurt?\na.)Vanilla\nb.)Strawberry\nc.)Mixed-Berry\n",
    answer:"c"
  },
  {
    question: "What does Kevin suggest Dwight put in his gun holster?\na.)A cell phone\nb.)A banana\nc.)A toy gun\n",
    answer: "b"
  }
]

for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer,currentquestion.options)
}

console.log("-----------------")
console.log("Your Final Score is: "+score)
console.log("-----------------")


// var username = readlineSync.question("Tell us your name")
// console.log("Welcome "+username)

// var age = readlineSync.question("Are u older than 18")
// if (age==="yes") {
//   console.log("You are right")
//   score+=1
//   console.log("Score is: "+score)
// }
// else {
//   console.log("You are wrong")
//   score-=1
//   console.log("Score is: "+score)
// }