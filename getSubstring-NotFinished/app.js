/**
 * 
 * @param {string} s
 * @return {number}
 *
 */
'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
 
function getSubstring(s) {
    //iterate over the string
    //to find the unique characters
    //if the letter is unique then add it to array else skip
    //store current length

    //abcabcbb -> abc 3 length
    
    let substring = '', i;
    for (i = 0; i < s.length; i+=1) {
        let substringIndex = substring.indexOf(s[i]);
        if(substring.indexOf(s[i]) === -1){
            substring+=s[i];
        }
        else {
            substring+=s[i];
            substring = substring.slice(substringIndex);
        }
    }
    
    return substring.length;
}

console.log(getSubstring("abcabcbb"));