const { SquareSum } = require('./squareSum');
describe('Test Square(n) Sum functions', () => {
    it('Calculate one number square', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([2])).toBe(4);
    });
    it('Sum two numbers square', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([1,2])).toBe(5);
    });
    it('Sum more than two numbers square', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([1,2,2])).toBe(9);
    });
  });