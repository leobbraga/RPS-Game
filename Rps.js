// Definir os jogadores do jogo e os resultados
function rpsGameBot(Player) {

    var PlayerChoise, BotChoise;
    PlayerChoise = Player.id;
    BotChoise = numberToChoise(RandToRpsInt());

    results = decidewinner(PlayerChoise, BotChoise);

    message = finalMessage(results); 
    RpsFrontEnd(Player.id, BotChoise, message);
}
 // ações do bot e valor que cada arma vai conter
function RandToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoise(number) {
    return ['rock', 'paper', 'scissors'][number]
}
function decidewinner(Player, computerChoise) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var PlayerScore = rpsDatabase[Player][computerChoise];
    var computerScore = rpsDatabase[computerChoise][Player];
    return [PlayerScore, computerScore];
}
// Pega o valor que o player e o bot jogaram e retorna se o player ganhou, deu empate ou não venceu.
function finalMessage([PlayerScore, computerScore]) {
    if (PlayerScore === 0) {
        return { 'message': 'you lost', 'color': 'red','message2': 'Bot', 'color2': ' box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)', 'message3': 'You', 'color3': 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)' };
    } else if (PlayerScore === 0.5) {
        return { 'message': 'you tied! lucker', 'color': 'yellow', 'message2': 'Bot', 'color2': ' box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)', 'message3': 'You', 'color3': 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'
        };
    } else {
        return { 'message': 'you won', 'color': 'green', 'message2': 'Bot', 'color2': ' box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)', 'message3': 'You', 'color3': 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)' };
    }
}
// FrontEnd e estrutura para a mensagem final.
function RpsFrontEnd(HImageChoise, BImageChoise, finalMessage) {
         

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var humanDivName = document.createElement('div');
    var botDiv = document.createElement('div');
    var botDivName = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDivName.innerHTML = "<h1 style'color3 " + finalMessage['color3'] + "; font-size: 50px; top: 10px; padding 90px; style='text-shadow: 4px 4px 4px rgba(37, 50, 233, 1);' '>"  + finalMessage['message3'] + "</h1>"
    humanDiv.innerHTML = "<img src='" + imagesDatabase[HImageChoise] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
   
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 50px; padding 30px; '>"  + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDatabase[BImageChoise] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    botDivName.innerHTML =  "<h1 style'color2 " + finalMessage['color2'] + "; font-size: 60px; padding 68px; top: 200px; text-align: left; height=150 width=100 style='text-shadow: 4px 4px 4px rgba(243, 38, 24, 1);' '>"  + finalMessage['message2'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(humanDivName);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDivName);
}
