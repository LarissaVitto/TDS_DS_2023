var homens = 0;
var mulheres = 0;
var mediaidade = 0.0;
var mediaidadeh = 0.0;
var idademulheres = 0;





var pessoa = [
    {
        nome: "Larissa",
        sexo: "F",
        idade: 16
    },
    {
        nome: "Keron",
        sexo: "F",
        idade: 27
    },
    {
        nome: "Guilherme",
        sexo: "M",
        idade: 25
    },
    {
        nome: "Suzi",
        sexo: "F",
        idade: 16
    },
    {
        nome: "Ronaldo",
        sexo: "M",
        idade: 12
    }, {
        nome: "Joao",
        sexo: "M",
        idade: 54
    }, {
        nome: "Berenice",
        sexo: "F",
        idade: 99
    }, {
        nome: "Lara",
        sexo: "F",
        idade: 19
    },
    {
        nome: "yasmin",
        sexo: "F",
        idade: 16
    }, {
        nome: "Arthur",
        sexo: "M",
        idade: 1
    }, {
        nome: "Joana",
        sexo: "F",
        idade: 8
    }, {
        nome: "Dilceu",
        sexo: "M",
        idade: 26
    }, {
        nome: "Juan",
        sexo: "M",
        idade: 27
    }, {
        nome: "Iago",
        sexo: "M",
        idade: 56
    }, {
        nome: "Michael",
        sexo: "M",
        idade: 33
    }, {
        nome: "Bruna",
        sexo: "F",
        idade: 17
    },
    {
        nome: "Matheus",
        sexo: "M",
        idade: 36
    }, {
        nome: "Carla",
        sexo: "F",
        idade: 10
    }, {
        nome: "Maria",
        sexo: "F",
        idade: 60
    }, {
        nome: "Carlos",
        sexo: "M",
        idade: 19
    }];
for(var i = 0; i < pessoa.length; i++){
    console.log(pessoa[i].sexo);
    if (pessoa[i].sexo == "M") {
        homens++
        mediaidade = mediaidade + pessoa[i].idade
        mediaidadeh = mediaidadeh + pessoa[i].idade


    }
    if (pessoa[i].sexo == "F") {
        mulheres++
        mediaidade = mediaidade + pessoa[i].idade
        if (pessoa[i].idade < 20) {
            idademulheres++
        }        
    }            
}

console.log("Homens cadastrados: ", homens, "\n");
console.log("Mulheres cadastradas: ", mulheres, "\n");
console.log("Media idade: ", mediaidade / 20, "\n");
console.log("Media idade homens: ", mediaidadeh / homens, "\n")
console.log("Mulheres com + de 20 anos: ", idademulheres);