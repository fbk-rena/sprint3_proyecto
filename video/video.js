function desaparecerImagen(){
    var imagen=document.getElementById("carroMorado");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo);
    reproducirVideo();
}

function reproducirVideo(){
    var video = document.getElementById("videoMorado");
    video.style.display = "block";
    
    addEventListener("click", desaparecerImagen);
}
//+++++++++++++
function desaparecerImagen2(){
    var imagen=document.getElementById("imagenJune");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo2);
    reproducirVideo2();
}

function reproducirVideo2(){
    var video = document.getElementById("videoJune");
    video.style.display = "block";
    
    addEventListener("click", desaparecerImagen2);
}
//++++++++++++++++++
function desaparecerImagen3(){
    var imagen=document.getElementById("imagenGood");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo3);
    reproducirVideo3();
}

function reproducirVideo3(){
    var video = document.getElementById("videoGood");
    video.style.display = "block";
    
    addEventListener("click", desaparecerImagen3);
}


addEventListener("click", desaparecerImagen);

addEventListener("click", desaparecerImagen2);
addEventListener("click", desaparecerImagen3);