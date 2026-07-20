function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma ;
    this.atiraArma = function(){
        console.log("Atirou a " + this.arma)
    }
}

ninja1 = new Ninja("Naruto", "shuriken");
console.log(ninja1.nome)

ninja1.atiraArma();

let ninja2 =  new Ninja("cleber", "sacola");
console.log(ninja2.nome)

ninja2.atiraArma()
