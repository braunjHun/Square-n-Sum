class SquareSum {
    constructor() {

    }
    calcSquare(number){
        return Math.pow(number,2);
    }
    squareSum(inputNumbers) {
        let sum = 0;
        for (let i=0;i<inputNumbers.length;i++){
          sum += this.calcSquare(inputNumbers[i]);
        }
        return sum;
    }


}
  
module.exports = {
    SquareSum,
};