function makePalindrome(S) {
    let array = S.split('');
    let N = array.length;
    for (let i = 0; i < Math.floor(N /2); i++) {
        let j = N - 1 -i;
        if (array[i] === '?' && array[j] === '?') {
            array[i] = array[j] = 'a';
        }
        else if (array[i] === '?') {
            array[i] = array[j];
        }
        else if (array[j] === '?') {
            array[j] = array[i];
        }
        else if (array[i] !== array[j]) {
            return 'NO';
        }
    } 
    if (N % 2 == 1 && array[Math.floor(N / 2)] === '?')  {
        array[Math.floor(N / 2)] = 'a';
    } 
    return array.join('');
}

console.log(makePalindrome("?ab??a")); 