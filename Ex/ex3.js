function Ninja(nome){
    this.nome = nome 
    this.numeroDeShuriken = 10

    this.atiraShurijen = function (){
        console.log("pew pew pew")
    }

    if(this.numeroDeShuriken > 0){
        // Decrementa um se "this.numeroDeShuriken" for mauir que Zero
        this.numeroDeShuriken--;
        console.log("Pew Pew!")
        console.log("Restam", this.numeroDeShuriken, "shurikens")
    }
}

const ninja1 = new Ninja("Cleber")
const ninja2 = new Ninja("jessica")

ninja1.atiraShurijen()