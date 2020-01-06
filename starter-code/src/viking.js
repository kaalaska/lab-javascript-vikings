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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    // constructor & super kann man hier weglassen; sollte man aber zum Verständinis der Klasse schreiben
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0)
            return `A Saxon has received ${damage} points of damage`
        else
            return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];        
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomIndexSax = Math.floor(this.saxonArmy.length * Math.random());
        let randomIndexVik = Math.floor(this.vikingArmy.length * Math.random());
        let saxon = this.saxonArmy[randomIndexSax];
        let viking = this.vikingArmy[randomIndexVik];
        let result = saxon.receiveDamage(viking.strength);
        if(saxon.health < 1)
            this.saxonArmy.splice(randomIndexSax, 1);
        return result;
    }
    saxonAttack(){
        let randomIndexSax = Math.floor(this.saxonArmy.length * Math.random());
        let randomIndexVik = Math.floor(this.vikingArmy.length * Math.random());
        let saxon = this.saxonArmy[randomIndexSax];
        let viking = this.vikingArmy[randomIndexVik];
        let result = viking.receiveDamage(saxon.strength);
        if(viking.health < 1)
            this.vikingArmy.splice(randomIndexVik, 1);
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length === 0)
            return `Vikings have won the war of the century!`;
        if(this.vikingArmy.length === 0)
            return `Saxons have fought for their lives and survived another day...`;
        else
            return `Vikings and Saxons are still in the thick of battle.`;
    }
}