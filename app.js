//create questions
var questions = [
    new Question("Türkiye'nin baþkenti neresidir?",["Ýstanbul", "Ankara"], 1),
    new Question("Süt ne renktir?",["Beyaz", "Siyah"], 0),
];

//create Quiz
var quiz = new Quiz(questions);

//Display Quiz
Quiz_ui.displayNext();