var player = 0;
        var filled =["","","","","","","","","",""]

        function move(c){
            
            if(player ==0 && filled[c[2]] == ""){
                var image =document.querySelectorAll(c + " .x");
                image[0].style.display="block";
                player = 1;
                filled[c[2]] = 'x';
            }
            else if(player == 1 && filled[c[2]] == ""){
                var image =document.querySelectorAll(c + " .o");
                image[0].style.display="block";
                player = 0;
                filled[c[2]] = 'o';
            }
            else{console.log("Already filled!");}
            var check=0;
            if((filled[1] == 'x' && filled[2] == 'x' && filled[3] == 'x') ||(filled[1] == 'o' && filled[2] == 'o' && filled[3] == 'o') ||(filled[4] == 'x' && filled[5] == 'x' && filled[6] == 'x') ||(filled[4] == 'o' && filled[5] == 'o' && filled[6] == 'o')||(filled[7] == 'x' && filled[8] == 'x' && filled[9] == 'x') ||(filled[7] == 'o' && filled[8] == 'o' && filled[9] == 'o')|| (filled[1] == 'x' && filled[5] == 'x' && filled[9] == 'x') ||(filled[1] == 'o' && filled[5] == 'o' && filled[9] == 'o') || (filled[3] == 'x' && filled[5] == 'x' && filled[7] == 'x') ||(filled[3] == 'o' && filled[5] == 'o' && filled[7] == 'o') || (filled[1] == 'x' && filled[4] == 'x' && filled[7] == 'x') ||(filled[1] == 'o' && filled[4] == 'o' && filled[7] == 'o')||(filled[2] == 'x' && filled[5] == 'x' && filled[8] == 'x') ||(filled[2] == 'o' && filled[5] == 'o' && filled[8] == 'o')|| (filled[3] == 'x' && filled[6] == 'x' && filled[9] == 'x') ||(filled[3] == 'o' && filled[6] == 'o' && filled[9] == 'o')) {
                var gg =document.querySelectorAll(".gameover");
                gg[0].style.display="inline";

            }
            
            
        }
