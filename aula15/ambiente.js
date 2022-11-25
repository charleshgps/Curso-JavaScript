/*let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Tem ${num.length} posições`)*/

/*let valores = [1, 5, 9, 8, 4, 6, 3,]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

let valores = [1, 5, 9, 8, 4, 6, 3,]

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`o numero 9 esta na ${valores.indexOf(9)}ª posição`)

/*ambas as formas funcionam porem uma é mais simplificada que a outra*/