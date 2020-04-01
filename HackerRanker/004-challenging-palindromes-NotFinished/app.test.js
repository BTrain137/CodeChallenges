const expect = require("chai").expect;
const buildPalindrome = require("./app");

//npm run mocha ./HackerRanker/004-challenging-palindromes
describe("buildPalindrome", () => {

    // it(`a = abcdje, b = bac`, () => {
    //     expect(buildPalindrome('abcdje', 'zyejdc')).to.equal('cdjeyejdc');
    // });
    
    it(`a = bac, b = bac`, () => {
        expect(buildPalindrome('bac', 'bac')).to.equal('aba');
    });
    
//     it(`a = abc, b = def`, () => {
//         expect(buildPalindrome('abc', 'def')).to.equal(-1);
//     });

//     it(`a = jdfh, b = fds`, () => {
//         expect(buildPalindrome('jdfh', 'fds')).to.equal('dfhfd');
//     });


//     it(`a = jdfh, b = fds`, () => {
//         expect(buildPalindrome('qquhuwqhdswxxrxuzzfhkplwunfagppcoildagktgdarveusjuqfistulgbglwmfgzrnyxryetwzhlnfewczmnoozlqatugmd',
// 'jwgzcfabbkoxyjxkatjmpprswkdkobdagwdwxsufeesrvncbszcepigpbzuzoootorzfskcwbqorvw')).to.equal('oozlzoo');
//     });
});
