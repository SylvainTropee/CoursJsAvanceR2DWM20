import {Question} from "./question.js";
import {Quiz} from "./quiz.js";

let quiz = new Quiz()
let q1 = new Question("ca va ?", ['oui', 'non', 'je ne sais pas'], 2)
let q2 = new Question("Pain au chocolat ou chocolatine ?", ['Pain au chocolat', 'chocolatine', 'je ne sais pas'], 0)

quiz.addQuestion(q1)
quiz.addQuestion(q2)
quiz.displayQuestion(q1)

document.getElementById('submit').addEventListener('click', function () {
    quiz.collectAnswer()
})