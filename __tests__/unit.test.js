// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber tests
test('isPhoneNumber test #1 (true): 111-111-1111', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});
test('isPhoneNumber test #2 (true): 222-222-2222', () => {
    expect(functions.isPhoneNumber('222-222-2222')).toBe(true);
});
test('isPhoneNumber test #3 (false): 1111111111', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});
test('isPhoneNumber test #4 (false): I am a valid phone number', () => {
    expect(functions.isPhoneNumber('I am a valid phone number')).toBe(false);
});

// isEmail tests
test('isEmail test #1 (true): abd@def.com', () => {
    expect(functions.isEmail('abd@def.com')).toBe(true);
});
test('isEmail test #2 (true): a_b_c@def.com', () => {
    expect(functions.isEmail('a_b_c@def.com')).toBe(true);
});
test('isEmail test #3 (false): abc.def.com', () => {
    expect(functions.isEmail('abc.def.com')).toBe(false);
});
test('isEmail test #4 (false): I am a valid email address', () => {
    expect(functions.isEmail('I am a valid email address')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword test #1 (true): Password1234', () => {
    expect(functions.isStrongPassword('Password1234')).toBe(true);
});
test('isStrongPassword test #2 (true): A_2_5_a_k_a', () => {
    expect(functions.isStrongPassword('A_2_5_a_k_a')).toBe(true);
});
test('isStrongPassword test #3 (false): qwhjdvbqdwbvjhdwbvjhwbljqbwdjhvjdqjvjdwql', () => {
    expect(functions.isStrongPassword('qwhjdvbqdwbvjhdwbvjhwbljqbwdjhvjdqjvjdwql')).toBe(false);
});
test('isStrongPassword test #4 (false): 12345678', () => {
    expect(functions.isStrongPassword('12345678')).toBe(false);
});

// isDate tests
test('isDate test #1 (true): 01/02/2000', () => {
    expect(functions.isDate('01/02/2000')).toBe(true);
});
test('isDate test #2 (true): 11/11/1111', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
});
test('isDate test #3 (false): 111/111/11111', () => {
    expect(functions.isDate('111/111/11111')).toBe(false);
});
test('isDate test #4 (false): I am a valid date', () => {
    expect(functions.isDate('I am a valid date')).toBe(false);
});

// isHexColor tests
test('isHexColor test #1 (true): #000', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});
test('isHexColor test #2 (true): #FFFFFF', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('isHexColor test #3 (false): Red', () => {
    expect(functions.isHexColor('Red')).toBe(false);
});
test('isHexColor test #4 (false): I am a valid color', () => {
    expect(functions.isHexColor('I am a valid color')).toBe(false);
});