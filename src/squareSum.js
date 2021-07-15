class SquareSum {
    constructor() {

    }
    calcSquare(number){
        return Math.pow(number,2);
    }
    squareSum(inputNumbers) {
        if (inputNumbers.length == 2) {
            return this.calcSquare(inputNumbers[0]) + this.calcSquare(inputNumbers[1]);
        } 
        return this.calcSquare(inputNumbers[0]);
    }


}
  
module.exports = {
    SquareSum,
};