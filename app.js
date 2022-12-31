const icons = document.querySelectorAll(".fa-3x");


for(let icon of icons){
    icon.addEventListener('mouseover', ()=> {
        icon.style.color="maroon";
        icon.style.height="120%"
        
    })
    icon.addEventListener('mouseout', ()=> {
        icon.style.color="antiquewhite";
        icon.style.height="100%"
    })

}

