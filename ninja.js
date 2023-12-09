class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud= 10;
        this.velocidad= 3;
        this.fuerza= 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats() {
        console.log(this.nombre,this.fuerza,this.velocidad,this.salud);
    }
    drinkSake (){
        this.salud+=10; 
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.sabiduria=10;
        this.velocidad=10;
        this.fuerza=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("El pan de ayer es el flan de mañana");
    }
};

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();  
superSensei.showStats();