//create questions
var questions = [
    new Question("T�rkiye'nin ba�kenti neresidir?",["�stanbul", "Ankara"], 1),
    new Question("S�t ne renktir?",["Beyaz", "Siyah"], 0),
];

//create Quiz
var quiz = new Quiz(questions);

//Display Quiz
Quiz_ui.displayNext();