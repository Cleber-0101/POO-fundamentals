const robo = {
    bracos: 4,
    perna: 2,
    arma: "metralhadora",
    armaEspecial: "foguete",
    atira : function(){
        console.log("pew pew pew")
    }
}

robo.atira()

let pessoa = {
    nome = "Cleber",
    getNome: function(){
        console.log("O nome é " + this.nome);
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }
}

pessoa.getNome()
pessoa.setNome("jessica")
pessoa.getNome()