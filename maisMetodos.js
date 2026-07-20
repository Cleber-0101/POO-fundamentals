let pessoa =  {
    nome: "Cleber",
    idade: "29",
    falar: function(){
        console.log("Oi, meu nome é cleber ")
    },
    aniversario(){
        this.idade += 1
    },
    dizerIdade(){
        console.log("A minha idade é " + this.idade)
    }
}
