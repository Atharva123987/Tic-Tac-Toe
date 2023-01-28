var player = 0;
var filled =["","","","","","","","","",""]
var turns=0;
var stat=0;
var count=14;
var obj = {
    theme:0,
}
var time = document.getElementById("timer");

function changeTheme(){

    if(obj.theme==1){

        document.body.style.backgroundColor="rgb(156, 57, 186)";
        document.getElementById("game-title").style.color=" rgb(255, 255, 255)";
        var aa =document.getElementsByClassName("grid");
        aa[0].style.backgroundColor="beige";
        document.getElementById("top-container").style.backgroundImage="none";
        obj.theme = 0;

    }

    else{

        document.body.style.backgroundColor="black";
        document.getElementById("game-title").style.color=" rgb(0, 255, 191)";
        var aa =document.getElementsByClassName("grid");
        aa[0].style.backgroundColor="rgb(59, 217, 196)";
        document.getElementById("top-container").style.backgroundImage="linear-gradient(rgb(0, 255, 195),rgba(0, 255, 195, 0.275))";
        obj.theme = 1;

    }
}
        function move(c){
            
            if(player ==0 && filled[c[2]] == "" && stat==0){

                var image =document.querySelectorAll(c + " .x");
                image[0].style.display="block";
                player = 1;
                filled[c[2]] = 'x';
                turns++;count = 15;

            }

            else if(player == 1 && filled[c[2]] == "" && stat==0){
                
                var image =document.querySelectorAll(c + " .o");
                image[0].style.display="block";
                player = 0;
                filled[c[2]] = 'o';
                turns++;count = 15;
                
            }

            else{

                console.log("Already filled!");

            }
            
            if((filled[1] == 'x' && filled[2] == 'x' && filled[3] == 'x') ||(filled[1] == 'o' && filled[2] == 'o' && filled[3] == 'o') ||(filled[4] == 'x' && filled[5] == 'x' && filled[6] == 'x') ||(filled[4] == 'o' && filled[5] == 'o' && filled[6] == 'o')||(filled[7] == 'x' && filled[8] == 'x' && filled[9] == 'x') ||(filled[7] == 'o' && filled[8] == 'o' && filled[9] == 'o')|| (filled[1] == 'x' && filled[5] == 'x' && filled[9] == 'x') ||(filled[1] == 'o' && filled[5] == 'o' && filled[9] == 'o') || (filled[3] == 'x' && filled[5] == 'x' && filled[7] == 'x') ||(filled[3] == 'o' && filled[5] == 'o' && filled[7] == 'o') || (filled[1] == 'x' && filled[4] == 'x' && filled[7] == 'x') ||(filled[1] == 'o' && filled[4] == 'o' && filled[7] == 'o')||(filled[2] == 'x' && filled[5] == 'x' && filled[8] == 'x') ||(filled[2] == 'o' && filled[5] == 'o' && filled[8] == 'o')|| (filled[3] == 'x' && filled[6] == 'x' && filled[9] == 'x') ||(filled[3] == 'o' && filled[6] == 'o' && filled[9] == 'o')) {

                var gg =document.querySelectorAll(".gameover");
                gg[0].style.display="inline";
                stat=1;
                time.style.display="none";

            }

            
            if(turns==9 && stat!=1){

                var draw = document.querySelectorAll(".draw");
                draw[0].style.display="inline";
                stat=1;
                time.style.display="none";

            }

            if(turns == 1){

                timer();

            }
            
        }

if(stat==1){

    var c = document.querySelectorAll(".grid");
    c.style.backgroundColor="red";

}
   
function reset(){

    window.location.reload(false);

}

function timer(){
   
    count = 14;
    setInterval(() =>{

        if(count<1 && !stat){

            time.style.display="none";
            var gg =document.querySelectorAll(".gameover");
            gg[0].style.display="inline";
            return;

        }
        
        else if(turns==9){

            time.style.display="none";
            return;

        }

        else if(stat == 1){

            return;

        }
        
        time.innerHTML = "Time: "+count;
        count--;
            
    }   
        ,1000
    )
}

