const str = prompt('Введите строку');
const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

// forEach

const vowelsCount = (str) => {
    const arr = str.toLowerCase().split('');
    let count = 0;

    arr.forEach(elem => {
        if (vowels.indexOf(elem) != -1)
            count++;
    });

    return count;
}

// filter


// const vowelsCount = (str) => {
//     const arr = str.toLowerCase().split('');

//     const filteredVowels = arr.filter(elem => {
//         return vowels.indexOf(elem) != -1;
//     });
//     const count = filteredVowels.length
//     return count;
// }

// reduce

// const vowelsCount = (str) => {
//     const arr = str.toLowerCase().split('');

//     const count = arr.reduce((sum, elem) => {
//         if (vowels.indexOf(elem) != -1) {
//             return sum + 1;
//         } else {
//             return sum + 0;
//         };
//     }, 0);

//     return count;
// };

console.log(`Количество русских гласных букв - ${vowelsCount(str)}`);