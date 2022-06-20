const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });
const Question = require("./Question");
const User = require("./User");

class Quiz {
  #count;
  #questions = []; //array
  #current = 0; //
  constructor() {
    this.setup();
  }
  setup() {
    const quesitons = JSON.parse(fs.readFileSync("./Questions.json"));
    quesitons.forEach((element) => {
      const { question, options, answer } = element;
      this.#questions.push(new Question(question, options, answer));
    });
    this.#count = quesitons.length;
  }
  start() {
    process.stdout.write("Welcome to the Quiz");
    const Name = prompt("Enter your name: ");
    process.stdout.write("\n");
    const user = new User();
    user.name = Name;
    while (this.#questions.length != 0) {
      const question = this.next();
      question.displayQuestion();
      const answer = prompt("plz type your answer: ");
      if (Question.checkAnswer(question, answer)) {
        user.score++;
      }
    }
    this.end(user);
  }
  next() {
    const question = this.#questions.shift();
    this.#current++;
    return question;
  }
  end(user) {
    process.stdout.write(`The End \n`);
    process.stdout.write(`Name: ${user.name} \n`);
    process.stdout.write(`Score: ${user.score}/${this.#count} \n`);
    process.stdout.write(`Attempted: ${this.#current} \n`);
    process.exit();
    // reaches answered all questions
  }
}
const q = new Quiz();
q.start();
