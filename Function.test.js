
function addCusomer(name, email) {
    if (!name || !email || email.includes('@')) {
        throw new Error('mising a parametes of the customer');
    }
    return {
       name,email
    }
};


function brrowBooks(bookCode, userCode) {

    const books=[{bookCode:'001',status:'avilable'},{bookCode:'002',status:'brrowed'}];
    const users=[{userCode:'214434599',numOfBooks:'2'},{userCode:'214325676',numOfBooks:'1'}];

    const book = books.find(book => book.bookCode == bookCode)
    const user = users.find(user => user.userCode == userCode)
    if (!book) {

        throw new Error('not found this book!')
    }
    if (book.status==='brrowed') {
        throw new Error('this book already brrow')
    }
   
    if (!user) {
        throw new Error('not found this user')
    }
    if(user.numOfBooks >=2){
        throw new Error('user already brows 2 books')
    }

    book.status='brrowed';
    user.numOfBooks=+1;
    return true;

}
test('Example test', () => {
    expect(1 + 2).toBe(3);
  });
  
module.exports=(addCusomer,brrowBooks);
