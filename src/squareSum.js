class SquareSum {
    
    squareSum(input) {
        if (input.length == 2) {
            return Math.pow(input[0],2) + Math.pow(input[1],2);
        } else {
            return Math.pow(input[0],2);
        }
    }
}
  
module.exports = {
    SquareSum,
};