const { SquareSum } = require('./squareSum');
describe('Test Square(n) Sum functions', () => {
    it('2 square = 4', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([2])).toBe(4);
    });
    it('1 square + 2 square = 5', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([1,2])).toBe(5);
    });
    it('1 square + 2 square + 2 square = 9', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([1,2,2])).toBe(9);
    });
  });