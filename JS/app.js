var txtInp = document.querySelector("#txtBox"),
    txtArea = document.querySelector("#textbox"),
    imgNum = 1,
    pikapic = document.querySelector("#otherPic"),
    char = document.querySelector("#mainpic"),
    mn = document.querySelector("#main"),
    bb = document.querySelector("#boy"),
    gb = document.querySelector("#girl"),
    numVar = 1,
    topVar = 0,
    leftVar = 0,
    area1 = "url(./IMGS/area1.svg)",
    area2 = "url(./IMGS/area1.svg)",
    menu = document.querySelector("#menu"),
    hlp = document.querySelector("#help"),
    cls = document.querySelector("#close"),
    binder = document.querySelector("#binder"),
    instr = document.querySelector("#instructions"),
    sqrt = document.querySelector("#squirtle"),
    charm = document.querySelector("#charmander"),
    bulba = document.querySelector("#bulbasaur"),
    sudwod = document.querySelector("#sudowoodo"),
    snor = document.querySelector("#snorlax"),
    yrcl = document.querySelector("#bindhead"),
    clshlp = document.querySelector("#closehlp"),
    instrhead = document.querySelector("#helphead"),
    instrtxt = document.querySelector("#instrText"),
    crd1 = document.querySelector("#cardslot1"),
    crd2 = document.querySelector("#cardslot2"),
    crd3 = document.querySelector("#cardslot3"),
    crd4 = document.querySelector("#cardslot4");

// INTRO CINEMATIC //
txtArea.addEventListener("click", function(){
    imgNum++;
    numVar++
    
    if(imgNum >= 4){
        pikapic.style.opacity = 1;
    } 
    
    if(imgNum >=9){
        pikapic.style.opacity = 0;
        char.style.opacity = 0;
    }
    
    if(imgNum >=10){
        bb.style.display = "block";
        gb.style.display = "block";
    }
    
    if(imgNum >= 11){
        char.style.opacity = 1;
        bb.style.display = "none";
        gb.style.display = "none";
    }
    
    if(imgNum >=13){
        char.style.transform = "scale(0.1)";
        mn.style.backgroundColor = "black";
    }
    
    if(imgNum >= 14){
        imgNum = 14;
    }
    
    console.log(numVar);
    txtInp.src = "./IMGS/textbox" + imgNum + ".svg";
    
    if(numVar == 13){
        mn.style.backgroundImage = "url(./IMGS/area2.svg)";
        mn.style.backgroundRepeat = "no-repeat";
        mn.style.backgroundSize = "cover";
        char.style.position = "absolute";
        char.style.top = "0px";
        char.style.left = "0px";
        menu.style.opacity = 1;
        hlp.style.opacity = 1;
        sudwod.style.display = "block";
        snor.style.display = "none";
    }
    
});

//CHOOSING GENDER//
function imABoy(){
    char.src = "./IMGS/boy.svg";
    char.style.opacity = 1;
    gb.style.display = "none";
    bb.style.display = "none";
    txtInp.src = "./IMGS/textbox" + 11 + ".svg";
    imgNum++
}

function imAGirl(){
    char.src = "./IMGS/girl.svg";
    char.style.opacity = 1;
    gb.style.display = "none";
    bb.style.display = "none";
    txtInp.src = "./IMGS/textbox" + 11 + ".svg";
    imgNum++
}

// MENU BUTTONS //

function openMenu() {
    binder.style.width = 400 + "px";
    binder.style.height = 500 + "px";
    cls.style.display = "block";
    yrcl.style.display = "block";
    crd1.style.display = "block";
    crd2.style.display = "block";
    crd3.style.display = "block";
    crd4.style.display = "block";
}

function closeMenu() {
    binder.style.width = 0 + "px";
    binder.style.height = 0 + "px";
    cls.style.display = "none";
    yrcl.style.display = "none";
    crd1.style.display = "none";
    crd2.style.display = "none";
    crd3.style.display = "none";
    crd4.style.display = "none";
}

function openHelp() {
    instr.style.width = 400 + "px";
    instr.style.height = 500 + "px";
    clshlp.style.display = "block";
    instrhead.style.display = "block";
    instrtxt.style.display = "block";
}

function closeHelp() {
    instr.style.width = 0 + "px";
    instr.style.height = 0 + "px";
    clshlp.style.display = "none";
    instrhead.style.display = "none";
    instrtxt.style.display = "none";
}

// CHARACTER MOVEMENT & EVENTS
window.addEventListener("keydown", function(){
//    
//    topVar = topVar - 10;
//    leftVar = leftVar - 10;
    
    if(event.keyCode == 87){
        topVar = topVar - 20;
        char.style.top = topVar + "px";
    }
    
    if(event.keyCode == 83){
        topVar = topVar + 20;
        char.style.top = topVar + "px";
    }
    
     if(event.keyCode == 65){;
        leftVar = leftVar - 20;
        char.style.left = leftVar + "px";
    }
    
    if(event.keyCode == 68){
        leftVar = leftVar + 20;
        char.style.left = leftVar + "px";
    }
    
// Movement Boundaries //
    if(topVar <= -300){
        topVar = -300;
    }
    
    if(topVar >= 250){
        topVar = 250;
    }

    if(leftVar >= 450){
       leftVar = 450;
    }
    
    if(leftVar <= -450){
        leftVar = -450;
    }
    
//    console.log(topVar);
    console.log(topVar);
    console.log(leftVar);
    
    // Screen transitions //
    
    if(leftVar == 450){
        mn.style.backgroundImage = "url(./IMGS/area1.svg)";
        leftVar = -445;
        sudwod.style.display = "none";
        snor.style.display = "block";
    }
    
    if(leftVar == -450){
        mn.style.backgroundImage = "url(./IMGS/area2.svg)";
        leftVar = 445;
        sudwod.style.display = "block";
        snor.style.display = "none";
    }
    
    if(topVar == -110 && leftVar == 175){
//        mn.style.backgroundImage = "url(./IMGS/pokemart.svg)";
////        char.style.display = none;
//        char.style.opacity = 0;
//        txtInp.src = "./IMGS/textbox15.svg";
        window.location.href = "./pokemart.html"
    }
    
    if(topVar == -100 && leftVar == -280){
        mn.style.backgroundImage = "url(./IMGS/labratory.svg)";
        char.style.top = 230 + "px";
        char.style.left = 0 + "px";
        topVar = 230;
        leftVar = 0;
        sqrt.style.display = "block";
        charm.style.display = "block";
        bulba.style.display = "block";
        txtInp.src = "./IMGS/textbox26.svg";
        sudwod.style.display = "none";
        snor.style.display = "none";
    }
    
    if(topVar == 250 && leftVar == 0){
        mn.style.backgroundImage = "url(./IMGS/area2.svg)";
        char.style.top = -95 + "px";
        char.style.left = -280 + "px";
        topVar = -90;
        leftVar = -280;
        sqrt.style.display = "none";
        charm.style.display = "none";
        bulba.style.display = "none";
        txtInp.src = "./IMGS/textbox14.svg";
        sudwod.style.display = "block";
        snor.style.display = "none";
    }

});

// POKEMON CARDS//

bulba.addEventListener("click", function(){
   crd1.style.backgroundImage = "url(./IMGS/pokecard1.png)";
    alert("You found a Bulbasaur Card!");
});

sqrt.addEventListener("click", function(){
   crd3.style.backgroundImage = "url(./IMGS/pokecard3.png)";
    alert("You found a Squirtle Card!");
});

charm.addEventListener("click", function(){
   crd2.style.backgroundImage = "url(./IMGS/pokecard2.png)"; 
    alert("You found a Charmander Card!");
});

sudwod.addEventListener("click", function(){
   crd4.style.backgroundImage = "url(./IMGS/pokecard4.png)";
    alert("You found a Sudowoodo Card!");
});

snor.addEventListener("click", function(){
   crd4.style.backgroundImage = "url(./IMGS/pokecard5.png)";
    alert("You found a Snorlax Card!");
});

