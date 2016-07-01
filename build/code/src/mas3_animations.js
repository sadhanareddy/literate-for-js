
function flask() {
        if ( step_no == 2){
            img = document.getElementById('shelf');
            img.src = "images/shelf_without_beaker_flask.png";
            $('#flask').attr('src', 'images/flask.png'); 
            elem = document.getElementById("flask"); 
            initial_top= 0;
            initial_left = 0;
            id = setInterval(frame, 5);
            function frame() {
                if (initial_top == 305) {
                    clearInterval(id);
                } else {
                    initial_top++; 
                    initial_left+=0.8;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 

                }
            } 
            document.getElementById("demo").innerHTML = "Step-No 4: Click on the Conical flask to pour the solution into clean, dry beaker";
            step_no += 1;
        }
        else if(step_no==3){
            document.getElementById("flask").onclick = moveFlask();
            step_no++;
        }
    }

function moveFlask() {
        elem = document.getElementById("flask"); 
        initial_top = 200;
        initial_left = 200;
        id = setInterval(frame, 5);
        function frame() {
           if (initial_left == 245) {
                clearInterval(id);
            } else {
                initial_top-=0.01; 
                initial_left++;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        id1 = setInterval(changeFlask,50);
        document.getElementById("demo").innerHTML = "Step-No 5: Click on the micropipette to collect appropriate quantity of solution from the beaker";
        setTimeout("moveFlaskBack()",1725);
    }

   
