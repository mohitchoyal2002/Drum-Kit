var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });   
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var w_audio=new Audio("sounds/tom-1.mp3");
            w_audio.play();
            break;
        case "a":
            var a_audio=new Audio("sounds/tom-2.mp3");
            a_audio.play();
            break;
        case "s":
            var s_audio=new Audio("sounds/tom-3.mp3");
            s_audio.play();
            break;
        case "d":
            var d_audio=new Audio("sounds/tom-4.mp3");
            d_audio.play();
            break;
        case "j":
            var j_audio=new Audio("sounds/snare.mp3");
            j_audio.play();
            break;
        case "k":
            var k_audio=new Audio("sounds/crash.mp3");
            k_audio.play();
            break;
        case "l":
            var l_audio=new Audio("sounds/kick-bass.mp3");
            l_audio.play();
            break;        
        default:
            break;
    }
}

function buttonAnimation(key){
    var activeKey = document.querySelector("."+key);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}
