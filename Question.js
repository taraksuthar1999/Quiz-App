//question: String
//options: Array<strings>
// correctAnswer: string
// userAnswer: string
class Question {
  #question;
  #options;
  #correctAnswer;
  constructor(question, options, correctAnswer) {
    this.#question = question;
    this.#options = options;
    this.#correctAnswer = correctAnswer;
  }
  get correctAnswer() {
    return this.#correctAnswer;
  }
  displayQuestion() {
    process.stdout.write(`Question: ${this.#question} \n`);
    let i = 1;
    this.#options.map((option) => {
      process.stdout.write(`${i}: ${option} \n`);
      i++;
    });
    process.stdout.write("\n");
  }
  static checkAnswer(quesion, answer) {
    if (answer == quesion.correctAnswer) return true;
    return false;
  }
}
module.exports = Question;
