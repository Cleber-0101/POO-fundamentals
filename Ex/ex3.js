function Ninja(nome){
    this.nome = nome 

    this.atiraShurijen = function (){
        console.log("pew pew pew")
    }
}

const ninja1 = new Ninja("Cleber")
const ninja2 = new Ninja("jessica")

ninja1.atiraShurijen()