let arrayNumber = [2, 4, 5, 1, 3]


for (let i = 0; i < arrayNumber.length; i++) {
    // console.log(i)
    for (let index = 0; index < arrayNumber.length; index++){
    if (arrayNumber[i] < arrayNumber[index]){
        [arrayNumber[i], arrayNumber[index]] = [arrayNumber[index], arrayNumber[i]];
    }
}
}
console.log(arrayNumber)
