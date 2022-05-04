// for(var i=0; i<)
// addEventListener("button",function(){

// })
for(var i=0 ; i<document.querySelectorAll(".btn").length ;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){

        var buttoninnerHTML= this.innerHTML;

        makesound(buttoninnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    
    makesound(event.key);
})


function makesound(key){
    switch(key){
        case "w":
            var music1 = new Audio('musical1.mp3');
            music1.play();
        break;
        case "s":
            var music2 = new Audio('musical2.mp3');
            music2.play();
        break;
        case "t":
            var music3 = new Audio('musical3.mp3');
            music3.play();
        break;
        case "u":
            var music4 = new Audio('musical4.mp3');
            music4.play();
        break;
        case "v":
            var music5 = new Audio('musical1.mp3');
            music5.play();
        break;
        case "w":
            var music6 = new Audio('musical2.mp3');
            music6.play();
        break;
        case "x":
            var music7 = new Audio('musical3.mp3');
            music7.play();
        break;
        case "m":
            var music8 = new Audio('musical4.mp3');
            music8.play();
        break;
        case "n":
            var music9 = new Audio('musical1.mp3');
            music9.play();
        break;

        default:
    }
}


















