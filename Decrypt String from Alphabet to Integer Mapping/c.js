/* Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

 

Example 1:

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
Example 2:

Input: s = "1326#"
Output: "acz"
Example 3:

Input: s = "25#"
Output: "y"
Example 4:

Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz" */

var freqAlphabets = function(s) {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    for(var i =0;i<s.length;i++){
        if(s.charAt(i+2)!=="#"){
            result = result+ letters.charAt(s.charAt(i)-1)
        }else{
            result += letters.charAt(parseInt(s.charAt(i)+s.charAt(i+1))-1)
            i=i+2
        }
    }
    return result;
};

console.log(freqAlphabets("10#11#12"))