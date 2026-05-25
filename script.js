function mostrarTab(tab){
    const secciones =
    document.querySelectorAll(".detalle-seccion");
     secciones.forEach(function(seccion){
        seccion.style.display="none";
     });

     document.getElementById(tab).style.display="block";
}

const imagenes =[
"img/Imagenes estudiantes/Estudiantes felices.jpg",
"img/Imagenes estudiantes/Cork-english-2.jpg",
"img/Imagenes estudiantes/Cork-engish1.jpg",
"img/Imagenes estudiantes/Galway-englihs-1.jpg",
"img/Imagenes estudiantes/Galway-english-2.jpg",
"img/Imagenes estudiantes/kaplan-english-2.jpg",
"img/Imagenes estudiantes/kaplan-english-3.jpg",
]; 

let indice= 0;

const slider =
document.getElementById("slider");
if (slider){
setInterval(function(){
   indice++;
   if(indice >= imagenes.length){
      indice = 0;
}

slider.src = imagenes[indice];
}, 3000);

}

const hora = new Date().getHours();

const saludo=
document.getElementById("saludo");

if(hora < 12){

   saludo.innerHTML =
   "Buenos días, explora Irlanda y conoce nuevas oportunidades de aprender Inglés.";
}

else if (hora < 18){

   saludo.innerHTML =
   "Buenas tardes, descubre Irlanda y vive una experiencia cultural inolvidable mientras aprendes inglés.";
}

else{

   saludo.innerHTML =
   "Buenas noches, te invito a conocer uno de los mejores lugares para aprender Inglés";
}
   