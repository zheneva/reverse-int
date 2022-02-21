module.exports = function reverse (n) {
    
let mas = n.toString().split('');
let newMas =[];
for (let i = mas.length - 1; i >=0; i-- ){ 
    if (mas[i] !== '-') newMas.push(mas[i]);
}

return Number(newMas.join(''));
}
