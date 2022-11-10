
const spotlightScene = document.getElementById('spotlightScene');
const spotlightBody = document.getElementById('spotlightBody');
const spotlight = document.getElementById('spotlight');
const spotlightTop = document.getElementById('top');
const spotlightBottom = document.getElementById('bottom');
const spotlightLeft = document.getElementById('left');
const spotlightRight = document.getElementById('right');




const spotlightRadius = 120;


spotlightBody.addEventListener('mousemove', spotlightHover);




function spotlightHover(e){

    if ((e.pageY-(spotlightRadius/2))>0){
        
        spotlightTop.style.display = 'block';
        spotlightTop.style.bottom = `${window.innerHeight-e.pageY+(spotlightRadius/2)}px`;

        if (e.pageY>(window.innerHeight-(spotlightRadius/2))){
            spotlightTop.style.bottom = `${(spotlightRadius)}px`;
        }
        
    }else{
        spotlightTop.style.display = 'none';
        
    }
   


    if(window.innerHeight-e.pageY>(spotlightRadius/2)){
        
        spotlightBottom.style.display = 'block';
        spotlightBottom.style.top = `${e.pageY+(spotlightRadius/2)}px`;

        
    }else{
        spotlightBottom.style.display = 'none';
    }




    if (e.pageX>(spotlightRadius/2)){
        
        spotlightLeft.style.display = 'block';
        spotlightLeft.style.top = `${e.pageY-(spotlightRadius/2)}px`;
        spotlightLeft.style.bottom = `${window.innerHeight-e.pageY-(spotlightRadius/2)}px`;
        spotlightLeft.style.right = `${window.innerWidth-(e.pageX-(spotlightRadius/2))}px`;


        if (window.innerWidth-e.pageX<(spotlightRadius/2)){
            spotlightLeft.style.right = `${spotlightRadius}px`;
        }


        if (window.innerHeight-e.pageY<(spotlightRadius/2)){
            spotlightLeft.style.top = `${window.innerHeight-spotlightRadius}px`;
            spotlightLeft.style.bottom = `0px`;
        }
        
    }else{
        
        spotlightLeft.style.display = 'none';
    }



    if (window.innerWidth-e.pageX>(spotlightRadius/2)){
        spotlightRight.style.display = 'block';
        spotlightRight.style.top = `${e.pageY-(spotlightRadius/2)}px`;
        spotlightRight.style.bottom = `${window.innerHeight-e.pageY-(spotlightRadius/2)}px`;
        spotlightRight.style.left = `${e.pageX+(spotlightRadius/2)}px`;



        if (window.innerHeight-e.pageY<(spotlightRadius/2)){
            spotlightRight.style.top = `${window.innerHeight-spotlightRadius}px`;
            spotlightRight.style.bottom = '0px';
        }

    }else{
        
        spotlightRight.style.left = `${spotlightRadius/2}`;
        spotlightRight.style.display = 'none';
    }


    if(window.innerHeight-e.pageY<(spotlightRadius/2)){
        spotlight.style.top = `${window.innerHeight-(spotlightRadius)}px`;
    }else{
        spotlight.style.top = `${e.pageY-(spotlightRadius/2)}px`;
    }
    
    if(window.innerWidth-e.pageX<(spotlightRadius/2)){
        spotlight.style.left = `${window.innerWidth-(spotlightRadius)}px`;
    }else{
        spotlight.style.left = `${e.pageX-(spotlightRadius/2)}px`;
    }
    
    
    
    
}