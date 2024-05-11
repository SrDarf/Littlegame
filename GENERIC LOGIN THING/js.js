function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para criar uma mensagem aleatória
function createRandomMessage() {
    var messages = ["We are back :D", "are you welcome?", "curikcabiznad", "look at the eye"]; // Mensagens pré-definidas
    var message = messages[Math.floor(Math.random() * messages.length)]; // Seleciona uma mensagem aleatória
    var div = document.createElement('div'); // Cria um elemento <div>
    div.className = 'mensagem'; // Define a classe CSS
    div.textContent = message; // Define o texto da mensagem
    document.body.appendChild(div); // Adiciona a mensagem ao corpo do documento
    // Define posições aleatórias
    div.style.left = getRandomNumber(0, window.innerWidth - div.offsetWidth) + 'px';
    div.style.top = getRandomNumber(0, window.innerHeight - div.offsetHeight) + 'px';
    // Exibe a mensagem
    div.style.display = 'block';

    // Configura um temporizador para remover a mensagem após 1 segundo
    setTimeout(function() {
        div.parentNode.removeChild(div); // Remove a mensagem
    }, 500);

    // Adiciona o efeito de glitch
    setTimeout(function() {
        applyGlitchEffect();
    }, 60000);
}

function applyGlitchEffect() {
    var duration = 300; 
    var interval = 25; 

    var originalBackgroundColor = document.body.style.backgroundColor;
    var originalColor = document.body.style.color;
    var originalTransform = document.body.style.transform;

    var start = Date.now();
    var glitchInterval = setInterval(function() {
        var timePassed = Date.now() - start;

        if (timePassed >= duration) {
            clearInterval(glitchInterval);
            document.body.style.backgroundColor = originalBackgroundColor;
            document.body.style.color = originalColor;
            document.body.style.transform = originalTransform;
            return;
        }

        // Selecionar as divs que deseja animar
        var divsToAnimate = document.querySelectorAll('.container, .logo, form');

        // Aplicar transformação a cada div
        divsToAnimate.forEach(function(div) {
            div.style.transform = "translate(" + getRandomNumber(-8, 8) + "px, " + getRandomNumber(-8, 8) + "px)";
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.88)"; 
            document.body.style.color = "white"; 
            document.body.style.transform = "translate(" + getRandomNumber(-5, 5) + "px, " + getRandomNumber(-5, 5) + "px)";  
            
        });

    }, interval);
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}




createRandomMessage();

setInterval(function() {
    createRandomMessage();
}, 5200);



