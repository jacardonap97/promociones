//Busca si el usuario ya había elegido un tema antes.
const temaGuardado = localStorage.getItem("storage");

const selector = document.getElementById("selectorTema");

//Se valida si existe una elección guardad o no
if (temaGuardado) {
    document.documentElement.setAttribute("data-bs-theme", temaGuardado);
    selector.value = temaGuardado;
}

selector.addEventListener("change", ()=> {
    document.documentElement.setAttribute("data-bs-theme", selector.value);

    //Se guarda la opción elegida
    localStorage.setItem("storage", selector.value);
});
    

//Otra forma de cambiar el tema forzando el backgound
// function cambiarClaro(){
//     document.body.style.backgroundColor = "#ffffff";
//     document.body.style.color = "#000000";
// }

// function cambiarOscuro(){
//     document.body.style.backgroundColor = "#000000";
//     document.body.style.color = "#ffffff";
// }

// selector.addEventListener("change", function(){
//     if(selector.value === "light"){
//         cambiarClaro();
//     } else if (selector.value === "dark"){
//         cambiarOscuro();
//     }
// });

// cambiarClaro();
