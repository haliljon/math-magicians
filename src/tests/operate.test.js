import operate from '../logic/operate';

describe('Testing dividing "÷"', () => {
  test('when 132 is divided by 11, it should return 12', () => {
    const division = operate('132', '11', '÷');
    expect(division).toBe('12');
  });
  test('when 26 is divided by 0, it should throw error', () => {
    const division = operate('26', '0', '÷');
    expect(division).toEqual("Can't divide by 0.");
  });
  test('when -42 is divided by 6, it should return -7', () => {
    const division = operate('-42', '6', '÷');
    expect(division).toBe('-7');
  });
});

describe('Testing multiply function "x" ', () => {
  test('32 multiplied by 6 should return 192', () => {
    const product = operate('32', '6', '×');
    expect(product).toBe('192');
  });
  test('-9 multiplied by  6 should return -54', () => {
    const product = operate('-9', '6', '×');
    expect(product).toBe('-54');
  });
});

describe('Testing subtraction function "-" ', () => {
  test('67 and 23 should return 44', () => {
    const subtract = operate('67', '23', '−');
    expect(subtract).toBe('44');
  });
  test('-486 and 43 should return 44', () => {
    const subtract = operate('-486', '43', '−');
    expect(subtract).toBe('-529');
  });
});
describe('Testing addition', () => {
  test('sum of 5 and 9 should return 5', () => {
    const sum = operate('5', '9', '+');
    expect(sum).toBe('14');
  });
  test('sum of -93 and -13 should return -8', () => {
    const sum = operate('-93', '-13', '+');
    expect(sum).toBe('-106');
  });
});
