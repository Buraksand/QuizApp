var Quiz_ui = {
    displayNext: function(){
        if (quiz.hasEnded()){
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }

    },
    populateHTMLwithID:function(id, text){
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    displayProgress: function () {
        var currentQuestionNumber =  quiz.currentQuestionIndex + 1;
        this.populateHTMLwithID("progress",currentQuestionNumber+" of " + quiz.questions.length )
    },
    displayScore: function(){
        var GameOverHTML = "Your Score is " + quiz.score;
        this.populateHTMLwithID("score",GameOverHTML);
    },
    displayQuestion: function(){
        var questionTxt = quiz.getCurrentQuestion().text;
        this.populateHTMLwithID("question",questionTxt);
    },
    displayChoices: function(){
        var num = quiz.getCurrentQuestion().choices.length;
        for (i=0; i<num; i++){
            this.populateHTMLwithID("choice" + i , quiz.getCurrentQuestion().choices[i] )
            this.selectHandler("guess" + i , i);
        }
    },
    selectHandler: function(element, index){
        var btn = document.getElementById(element);
        btn.onclick = function(){
            console.log(index);
            quiz.evaluate(index);
            Quiz_ui.displayNext();
        }
    }

};