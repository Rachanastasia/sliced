export class Amount {
    constructor(total, integer, float, fraction){
        this.total = total
        this.integer = integer
        this.decimal = decimal
        this.fraction = new Fraction()
        
    }

    addToAmount(additional){
        this.total = this.total + additional
    }



}

class Fraction {
    constructor(numerator, denominator){
        this.numerator = numerator
        this.denominator = denominator
    }
    
    convertToFloat(){
        //TODO implement logic here that converts fraction into decimal
    }
}

