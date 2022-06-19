//Função para começar o jogo

function GameStart(){
    cartas = prompt("Selecione número par entre 4 e 14")
        if (cartas%2 != 0 || cartas < 4 || cartas > 14 || isNaN(cartas))
        GameStart();
}
GameStart();

