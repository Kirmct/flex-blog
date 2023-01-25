function verificapalindromo2(string) {
  if (!string) return "Declare um valor";
  let i = 0;
  let j = string.length - 1;
  while (j > i) {
    if (string[i] != string[j]) {
      console.log(`${string} nao eh palindrome`);
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(verificapalindromo2("1221"));

length;
