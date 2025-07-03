export class Quiz {

    constructor() {
        this.questions = []
        this.score = 0;
        this.index = 0
    }

    addQuestion(question) {
        this.questions.push(question)
    }

    displayQuestion(question) {
        document.getElementById('quiz').innerHTML = ""
        document.getElementById('quiz').append(question.display())
    }

    displayResult() {
        document.getElementById('quiz').innerHTML = `<p>Score : ${this.score}/${this.questions.length}</p>`
    }


    collectAnswer() {

        let answer = document.querySelector("input[name=answer]:checked")

        if (answer) {

            if (answer.value == this.questions[this.index].correctAnswer) {
                this.score++
            }
            this.index++
            //si il reste des questions je passe à la suivante
            if (this.index < this.questions.length) {
                this.displayQuestion(this.questions[this.index])
            } else {
                //sinon j'affiche le score
                this.displayResult()
            }

        }

    }

}