function segitiga1(baris){
    let pola = '';

    for (let i = 1; i<= baris; i++) {
        for(let j = 1; j <= i; j++) {
            pola += '*';
        }
        pola += '\n';
    }
    return pola;
}
console.log('Output1')
console.log(segitiga1(6));

function segitiga2(baris2){
    let pola2 = '';

    for(let i = 1; i <= baris2; i++) {
        for(let j = baris2 - 1; j >= i; j--){
            pola2 += ' ';
        }
        for (let k = 1; k <= i; k++){
            pola2 += '*';
        }
        pola2 += '\n';
    }
    return pola2;
}
console.log('Output2')
console.log(segitiga2(5))