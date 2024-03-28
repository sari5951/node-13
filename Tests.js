const { addCusomer, brrowBooks } = require('./Function.test');
const { test, expect } = require('@jest/globals');

//in case of success;
test('add a customer succsefuly', () => {
    expect(addCusomer('sari', 's0556765951@gmail.com')).toEqual(
        {
            name: 'sari',
            email: 's0556765951@gmail.com'
        }
    );

});
//in case of failure -missing parameter;
test('missimg a parameter in the object', () => {
    expect(() => addCusomer(null, 's@gmail.com')).toThrow('missing parametre');
});

//in case of failure-Email in worng format;
test('add a customer with invailde email format', () => {
    expect(() => addCusomer('sari', 'sariInvaildEmail')).toThrow('Email in worng format');
});
// Test books-in case of success;
test('Brrow a books successefuly!',()=>{
    expect(brrowBooks('001','sari')).toBe(true);
});
// in case of failure-the book isnot exist;
test('brrow a bokk that it isnot exist',()=>{
   expect(brrowBooks('005','sari')).toThrow('missing this book');

});
