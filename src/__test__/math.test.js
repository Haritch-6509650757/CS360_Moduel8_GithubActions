const {add, subtract, multiply} = require('/home/ec2-user/module8/src/math.js');

describe('Simple math test', () => {
  it('addition should return 4', async () => {
        expect(add(2,2)).toBe(4);
 });
  it('subtraction should return 1', async () => {
        expect(subtract(4,3)).toBe(1);
});
  it('multiply should return 9', async () => {
        expect(multiply(3,3)).toBe(9);
});
});
