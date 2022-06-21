let big = document.querySelector('.big');
let small = document.querySelector('.small');
let img = document.querySelector('.desc_img');
const audio = new Audio();

big.addEventListener('click', function (event) {       
        audio.src = 'sounds/big.mp3'; 
        img.style.backgroundImage = 'url(img/big.png)';   
        img.style.backgroundSize = 'cover';    
        audio.play();
}
)

small.addEventListener('click', function (event) {       
    audio.src = 'sounds/small.mp3';  
    img.style.backgroundImage = 'url(img/small.png)';   
    img.style.backgroundSize = 'cover';      
    audio.play();
}
)

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'en-US';

var micro = document.querySelector('.micro');
var descText = document.querySelector('.desc_txt');
recognition.addEventListener('result', function (e) {   
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)    
    .join('')

    descText.textContent = transcript;    
    console.log(transcript);

    if (transcript.includes('big')) {
        big.style.background = 'green';
        }
        
    if (transcript.includes('small')) {
        small.style.background = 'green';
    }
}
)

recognition.addEventListener('end', recognition.start);

micro.addEventListener('click', function(e) {       
    recognition.start();
}
)


