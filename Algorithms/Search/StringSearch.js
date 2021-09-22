const stringSearch = (long, short) => {
    let counter = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // console.log({ short: short[j], long: long[i + j] })
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) counter++;
        }
    }
    return counter
}

stringSearch('womgzomg', 'omg')
