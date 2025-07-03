export class Question{

    constructor(label, answers, correctAnswer) {
        this.label = label
        this.answers = answers
        this.correctAnswer = correctAnswer
    }

    display(){

        const pQuestion = document.createElement('p')
        pQuestion.innerText = this.label

        const divAnswers = document.createElement('div')

        let i = 0;
        for (const answer of this.answers) {
            const input = document.createElement('input')
            input.type = 'radio'
            input.value = i++
            input.name = 'answer'
            input.setAttribute('id', `answer-${i}`)

            const label = document.createElement('label')
            label.innerText = answer
            label.setAttribute('for', `answer-${i}`)

            divAnswers.appendChild(input)
            divAnswers.append(label)
        }

        const divContainer = document.createElement('div')
        divContainer.append(pQuestion)
        divContainer.append(divAnswers)

        return divContainer
    }
}