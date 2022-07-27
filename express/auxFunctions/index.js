
function isPalindrome(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}

function reverseString(str){
    return str.split("").reverse().join("") //hago un array donde cada letra o caracter es un elemento, con .reverse lo invierto y finalmente lo vuelvo a unir con .join
}

module.exports={
    isPalindrome,
    reverseString
}