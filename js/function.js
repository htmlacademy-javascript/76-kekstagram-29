// Проверка длины строки
function checkLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;

}

checkLength('приветмир', 10);


// Функция для проверки, является ли строка палиндромом

function isPalindrom(string) {
  const cleanText = string.replaceAll(' ', '').toUpperCase();
  let reverseString = '';
  for (let i = cleanText.length - 1; i >= 0; i = i - 1) {
    reverseString += cleanText.at(i);
  }
  if (reverseString === cleanText) {
    return 'Это палиндром';
  }
  return 'Это не палиндром';
}

isPalindrom('топот');


