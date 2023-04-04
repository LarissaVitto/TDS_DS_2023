var fotos = [
    "https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatinho-fofo-segurando-as-suas-2-patinhas-1.jpg?resize=564%2C564&ssl=1",
    "https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatinho-fofo-branco.jpg?resize=564%2C564&ssl=1",
    "https://pbs.twimg.com/media/EOfcPYjW4AIhffR.jpg",
    "https://dk2dv4ezy246u.cloudfront.net/widgets/sShYLWUqt40_large.jpg",
    "https://cdn.maioresemelhores.com/imagens/mm-gatos-2-cke.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOJQhoCYy8sL95loygdAZWj6N9j0nB2uatw&usqp=CAU",
    "https://i.pinimg.com/736x/21/18/54/2118543235117ee07b6301814c774a33.jpg",
    "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/afca09ecea748a67ededc00440740ffd~c5_720x720.jpeg?x-expires=1679623200&x-signature=3itErS3HOQatKuehHrphavfprcI%3D",
    "https://img.r7.com/images/gatos-top-internet-20012020190259710?dimensions=490x420",
    "https://i.pinimg.com/236x/7f/fc/b0/7ffcb0257508a69aca88a9c30979f8e6.jpg",
    "https://i.pinimg.com/236x/98/44/c5/9844c5df4d5bfa53ea3a4ac22de4e570.jpg",
    "https://i.pinimg.com/170x/97/3a/7c/973a7c67e87ddcd5dd59370713bdf340.jpg",
    "https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatinho-fofo-dormindo-todo-insparramado-no-chao.jpg?resize=564%2C560&ssl=1",
    "https://i.pinimg.com/564x/46/91/66/469166576017e9a233767671a00202ac.jpg"   
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

function miau(){
    const audio = new  Audio("miau.mp3");
    audio.play();
}
document.getElementById("btn_gerar").addEventListener("click", function() {
    miau();
  });


