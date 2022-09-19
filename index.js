for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    showAnimation(this.innerHTML)
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    showAnimation(event.key);
});



function makeSound(key){

    switch (key) {
        case "a":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();

        break;
        case "s":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "f":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "g":
            var audo=new Audio("sounds/tom-2.mp3");
            audo.play();
        break;
        case "h":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "j":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
    
        default:
            break;
    }
    
    
}
 
function showAnimation(key){
    var keyPressed=document.querySelector("."+key);
    keyPressed.classList.add("pressed");
    setTimeout(function(){
    keyPressed.classList.remove("pressed");},100);
}







