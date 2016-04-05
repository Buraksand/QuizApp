function Quiz(questions){
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.questions = questions;
}

//cevab�n do�ru olup olmad���n� incele, soru numaras�n�, do�ru say�s�n� g�ncelle
Quiz.prototype.evaluate = function(answerIndex){
    if (this.getCurrentQuestion().isCorrectAnswer(answerIndex)){
        this.score++;
    }
    console.log(answerIndex);
    this.currentQuestionIndex++;
};

//mevcut soru objesini getir
Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
};

//quiz bitme durumunu kontrol et
Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex >= this.questions.length;
};