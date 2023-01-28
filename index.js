var player = 0;
var filled =["","","","","","","","","",""]
var turns=0;
var stat=0;
var count=14;

var time = document.getElementById("timer");

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
            else{console.log("Already filled!");}
            
            if((filled[1] == 'x' && filled[2] == 'x' && filled[3] == 'x') ||(filled[1] == 'o' && filled[2] == 'o' && filled[3] == 'o') ||(filled[4] == 'x' && filled[5] == 'x' && filled[6] == 'x') ||(filled[4] == 'o' && filled[5] == 'o' && filled[6] == 'o')||(filled[7] == 'x' && filled[8] == 'x' && filled[9] == 'x') ||(filled[7] == 'o' && filled[8] == 'o' && filled[9] == 'o')|| (filled[1] == 'x' && filled[5] == 'x' && filled[9] == 'x') ||(filled[1] == 'o' && filled[5] == 'o' && filled[9] == 'o') || (filled[3] == 'x' && filled[5] == 'x' && filled[7] == 'x') ||(filled[3] == 'o' && filled[5] == 'o' && filled[7] == 'o') || (filled[1] == 'x' && filled[4] == 'x' && filled[7] == 'x') ||(filled[1] == 'o' && filled[4] == 'o' && filled[7] == 'o')||(filled[2] == 'x' && filled[5] == 'x' && filled[8] == 'x') ||(filled[2] == 'o' && filled[5] == 'o' && filled[8] == 'o')|| (filled[3] == 'x' && filled[6] == 'x' && filled[9] == 'x') ||(filled[3] == 'o' && filled[6] == 'o' && filled[9] == 'o')) {
                var gg =document.querySelectorAll(".gameover");
                gg[0].style.display="inline";
                stat=1;
                time.style.display="none";
            }
            if(turns==9){
                var draw = document.querySelectorAll(".draw");
                draw[0].style.display="inline";
                stat=1;
                time.style.display="none";
            }
            if(turns == 1){
                timer();
            }
            
            
            
        }
// function reset(){
//     player = 0;
//     filled =["","","","","","","","","",""]
//     turns=0;
//     stat =0;
//     var temp = document.querySelectorAll(".c1 .x");
//     for(var i=1;i<10;i++){
//         if(filled[i] =='x'){
//         // temp = document.querySelectorAll("c"+i+" .x");
//         console.log("c"+i+" .x");
//         temp[0].style.display="none";
//         }
//         else if(filled[i] == 'o'){
//             temp = document.querySelectorAll("c"+i+" .o");
//             temp[0].style.display="none";
//         }
//         else{continue;};
//     }
    
    
// }
function reset(){
    
        location.reload()
    
}

function timer(){
   
    count = 14;
    setInterval(() =>{
        // if(stat==1){
            
        //     time.style.display="none";
        //     return;
        // }
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
        
            time.innerHTML = "Time: "+count;
            console.log(count);
            count--;
            
    }   
        ,1000
    )
}

