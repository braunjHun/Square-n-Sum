const { SquareSum } = require('./squareSum');
describe('Test Square(n) Sum functions', () => {
    it('2 square = 4', () => {
      const squareSum = new SquareSum();
      expect(squareSum.squareSum([2])).toBe(4);
    });
  });