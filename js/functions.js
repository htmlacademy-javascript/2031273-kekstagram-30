function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 11));


function palindrome(str) {
  str = str.toLowerCase().replace(/ /g, '');
  return str.split('').reverse().join('') === str;
}

console.log(palindrome('топот'));
console.log(palindrome('ДовОд'));
console.log(palindrome('Кекс'));
console.log(palindrome('Лёша на полке клопа нашёл'));

