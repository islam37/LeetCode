function isPalindrome(str) {{
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

