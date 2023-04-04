var fotos = [
    "https://i.pinimg.com/736x/1e/b9/33/1eb933696ef79a5b51e02ff4c18b9e75.jpg",
    "https://www.clubeparacachorros.com.br/wp-content/uploads/2018/07/cachorro-fofo-do-tumblr-com-flores-na-cabeca.jpg4&ssl=1", 
    "https://i.pinimg.com/564x/f7/27/45/f727450ff3cf9d69a5fbc457fccd2fd7.jpg",
    "https://i.pinimg.com/564x/bb/43/52/bb435210cc24092341522f12de4c5b8b.jpg",
    "https://i.pinimg.com/736x/8b/8f/fc/8b8ffcf5f0df8194c3f80dacac39c9bf.jpg",
    "https://i.pinimg.com/564x/e7/db/2d/e7db2d38a7fec0a0f77feeef76eb9033.jpg",
    "https://i.pinimg.com/564x/a8/14/53/a81453efcc5eb43cd4e0c971ca35e827.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2021/10/tipos-de-tosa-para-shih-tzu-4-1280x720.jpg",
    "https://i.pinimg.com/564x/b8/d9/3f/b8d93fde9fc39d3acee8dd7a14cbc21d.jpg",
    "https://i.ytimg.com/vi/fNYJvUs_OiA/maxresdefault.jpg",
    "https://qph.cf2.quoracdn.net/main-qimg-46470f9ae6267a83abd8cc753f9ee819-lq",
    "https://i.pinimg.com/originals/ce/80/f5/ce80f5cdff3aa5ec3eb7072348d41075.jpg",
    "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://i.pinimg.com/564x/07/7f/28/077f28cfa1b9205013802d8e8f43e45a.jpg"   
  ];

document.getElementById("btn_gerar").addEventListener("click", function() {
    generateRandomImage();
 
});


function generateRandomImage() {
    var randomIndex = Math.floor(Math.random() * fotos.length);   
    document.getElementById("img_aleatoria").src = fotos[randomIndex];
}

const input = window.document.getElementById("texto");
const ul = window.document.querySelector("ul");
const valor_local = localStorage.getItem("registo");
const db_lista_li = JSON.parse( window.localStorage.getItem("lista"));

db_lista_li.forEach((item) => adicionar(item));


function adicionar(item) {
    var li = window.document.createElement("li");
    var value = item ? item.texto : input.value;
    var value_li = window.document.createTextNode(value);

    if (input.value.trim() !== "" || item) {
        li.appendChild(value_li);
        ul.appendChild(li);
    }
    if(!item){
        adiciona_lista();
    }
    if(item){
        if(item.checked){
            li.setAttribute("class", "checked")
        }
    }

    input.value = " ";
    input.focus();
}
window.document.querySelector("ul").addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    adiciona_lista();
});

window.document.getElementById("texto").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        adicionar();
    }
});
window.document.addEventListener("contextmenu", (e) =>{
    e.preventDefault();
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
});

function adiciona_lista(){
    const lista_de_li = window.document.querySelectorAll("li");
    const lista = [];
    lista_de_li.forEach((item) => {
         lista.push({texto: item.innerText, checked: item.className == "checked"});
    });
    window.localStorage.setItem("lista", JSON.stringify(lista));
} 

function auau(){
    const audio = new  Audio("auau.mp3");
    audio.play();
}
document.getElementById("btn_gerar").addEventListener("click", function() {
    auau();
  }); 