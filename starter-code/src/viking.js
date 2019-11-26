// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;

    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    battleCry(){
        return (`Odin Owns You All!`);
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        }else{
            return (`${this.name} has died in act of combat`)
        }
    }
}

// Saxon
class Saxon extends Soldier{
    // constructor & super kann man hier weglassen; sollte man aber zum Verständinis der Klasse schreiben
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return (`A Saxon has received ${damage} points of damage`)
        }else{
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack(){
        let saxe = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
        let viki = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)];
        saxe.receiveDamage(viki.attack())
        if(saxe.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxe), 1);
        }
    }
    
    
    saxonAttack(){}
    showStatus(){}

}
