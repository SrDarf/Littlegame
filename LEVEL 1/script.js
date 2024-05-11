const exploringLink = document.getElementById('exploring-link');

exploringLink.addEventListener('click', function() {
    const starsBg = document.querySelector('.stars-bg');
    starsBg.classList.add('hidden');
    startExploring();
    exploringLink.classList.add('hid'); 
});

function startExploring() {
    const typingElements = document.querySelectorAll('.typing-container code, .confidential');

    function getRandomCharacter() {
        const characterMapping = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const randomIndex = Math.floor(Math.random() * characterMapping.length);
        return characterMapping[randomIndex];
    }

    function updateTypingContent() {
        typingElements.forEach(element => {
            let content = '';
            for (let i = 0; i < element.textContent.length; i++) {
                content += getRandomCharacter();
            }
            element.textContent = content;
        });
    }

    setInterval(updateTypingContent, 500);

    const starsBg = document.querySelector('.stars-bg');
    const body = document.body;
    const h1Element = document.querySelector('h1.glitch');
    const h2Element = document.querySelector('h2.glitch');
    const pElement = document.querySelector('p.glitch');
    const starModeElement = document.getElementById('darkModeText');

    const symbols = ['▢', '△', 'o'];
    const characterMapping = { 1: 'O =  .', 2: '▢ =  -', 3: '△ =  .' };
    let currentIndex = 0;

    function toggleHidden() {
        starsBg.classList.toggle('hidden');
        body.classList.toggle('toggled');

        if (body.classList.contains('toggled')) {
            body.classList.add('glitch-effect');
            setTimeout(() => {
                body.classList.remove('glitch-effect');
            }, 1000);

            toggleExploringLinkContent();
            updateHtmlTitle();
        }
    }

    function updateHtmlTitle() {
        const characterIndex = (currentIndex + 1);
        const character = characterMapping[characterIndex];
        document.title = `${character}`;

        if (character === 'O =  .') {
            setTimeout(() => {
                document.title = "Too Slow";
                h1Element.textContent = "Level 1";
                h2Element.textContent = "The Start";
                pElement.textContent = "Every single second is important";
                starsBg.classList.toggle('hidden');
                
            }, 1000);
        }
    }

    function repeatToggleHidden(times, interval) {
        let count = 0;
        const intervalId = setInterval(function() {
            toggleHidden();
            count++;
            if (count === times) {
                clearInterval(intervalId);
            }
        }, interval);
    }

    function toggleExploringLinkContent() {
        if (exploringLink.classList.contains('hidden')) {
            exploringLink.classList.remove('hidden');
            exploringLink.textContent = "Start Exploring";
        } else {
            exploringLink.classList.add('hidden');
            generateRandomShape();
        }
    }

    function generateRandomShape() {
        const shapeContainer = document.createElement('div');
        shapeContainer.classList.add('shapes-container');
        shapeContainer.textContent = symbols[currentIndex];
        exploringLink.parentNode.insertBefore(shapeContainer, exploringLink);

        currentIndex = (currentIndex + 1) % symbols.length;
        const characterIndex = (currentIndex + 1) % Object.keys(characterMapping).length;
        exploringLink.textContent = characterMapping[characterIndex];

        setTimeout(() => {
            shapeContainer.remove();
            toggleExploringLinkContent();
        }, 1000);
    }

    setTimeout(function() {
        repeatToggleHidden(5, 1000);
    }, 1000);

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey && event.shiftKey && event.key === 'I') || event.key === 'F12') {
            event.preventDefault();
            console.log('Haha, não tão rápido!');
            alert('Haha, não tão rápido!');
        }
    });

    window.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    starModeElement.classList.add('glitch');
    setTimeout(() => {
        starModeElement.classList.remove('glitch');
        starModeElement.style.display = 'none';  
    }, 1000);

    setTimeout(() => {
        const audioElement = document.getElementById('audio');
        audioElement.play();
        
    }, 8000);

    
}




var darkModeText = document.getElementById("darkModeText");
var body = document.body;
var starsBg = document.querySelector(".stars-bg");

darkModeText.addEventListener("click", function() {
    body.classList.add("blurred");
    setTimeout(function() {
        body.classList.remove("blurred");
    }, 1000);

    if (body.classList.contains("dark")) {
        darkModeText.innerHTML = 'StarsMode: <i class="fas fa-moon"></i>';
        body.classList.remove("dark");
        setTimeout(function() {
            starsBg.classList.add("hidden");
        }, 1000); 
    } else {
        darkModeText.innerHTML = 'StarsMode: <i class="fas fa-star"></i>';
        body.classList.add("dark");
        starsBg.classList.remove("hidden"); 
    }
});

var elements = document.querySelectorAll('.container2 p, .star9208');

elements.forEach(function(element) {
    element.addEventListener('click', function() {
        element.classList.add('active');
        setTimeout(function() {
            element.classList.remove('active');
        }, 500);
    });
});


darkModeText.click();





// Recupera os dados armazenados em localStorage
var userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

// Verifica se os dados foram encontrados
if (userCredentials) {
    // Substitui "Guest" pelo nome de usuário armazenado
    var elements = document.querySelectorAll('.typing-container code,.typing-container span');
    var textArray = [
        userCredentials.username, // Substituí "Guest" pelo nome do usuário
        "Blocked",
      
    ];

    // Seu código continua aqui usando o textArray atualizado
} else {
    // Caso não haja dados armazenados, exibe um alerta informando
    alert("Não há informações de usuário armazenadas.");
}


function typeText(element, text, index, delay) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1);
        setTimeout(function() {
            typeText(element, text, index + 1, delay);
        }, delay);
    }
}

var typingDelay = 200;

elements.forEach(function(element, index) {
    var text = textArray[index];
    typeText(element, text, 0, typingDelay);
});

function checkNumber() {
    var inputValue = document.querySelector(".in").value;
    if (inputValue === "-..") {
        window.location.href = "/SURIS/LEVEL 1/LEVEL -2/index.html";
    }
}

var icon = document.getElementById("HIHIHI");


icon.onclick = function() {
   
    var confirmacao = confirm("Tem certeza que quer pular de fase?");
    
   
    if (confirmacao) {
        window.location.href = "/SURIS/LEVEL 2/index.html"; 
    }
};



