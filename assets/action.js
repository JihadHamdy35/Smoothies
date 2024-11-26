//Variables
let curColor = "red";
let clickableImages = document.querySelectorAll("div.slides ul li img");

localStorage.clear();
// Don't forget local storage 
// Change Themes Function ()
function changeTheme(ele){
    curColor = ele.getAttribute("color");
    let curDiv = document.querySelector("body .before");
    curDiv.style.backgroundImage = `url('./assets/images/${ele.getAttribute('alt')}.png')`;
    setColors();
}
function setColors (){
    let htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.style.setProperty("--bg-color" , `var(--${curColor}-bg)`);
    htmlTag.style.setProperty("--div-color" , `var(--${curColor})`);
}
function moveImage(val){
    let orbitDiv = document.querySelector("body .right-bar");
    let cur = localStorage["currentTheme"];
    // + <=
    if(cur==0 && val==3){
        val = 135;
    }
    else if(cur==3 && val==0){
        val = 45;
    }
    else if(cur>val){
        if(val==1) val =-45;
        else if(val==2) val = -135;
        else if(val==3) val= 135;
        else val = 45;
    } else {
        if(val==1) val =-45;
        else if(val==2) val = -135;
        else if(val==3) val= -225;
        else val = -315;
    }
    orbitDiv.style.transform =`rotate(${val}deg)`;
}
for(let i=0; i<clickableImages.length ; i++){
    clickableImages[i].onclick = function(){
        changeTheme(clickableImages[i]);
        if(localStorage["currentTheme"]!=i) moveImage(i);
        localStorage.setItem("currentTheme" , i);
        localStorage.setItem("currentRotate" , i);
    }
}
