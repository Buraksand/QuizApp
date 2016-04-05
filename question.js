function Question(text, choices, answerIndex){
    this.text = text;
    this.choices = choices;
    this.answerIndex = answerIndex;
}

Question.prototype.isCorrectAnswer = function(choiceIndex){
    return this.answerIndex === choiceIndex;
};

