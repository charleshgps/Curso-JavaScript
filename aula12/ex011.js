var idade = 10
if (idade<16){
    console.log(`Você tem ${idade} anos. você não vota`)
}else if (idade < 18 || idade > 65){
        console.log(`Você tem ${idade} anos. seu voto é opicional`)
}else {
    console.log(`Você tem ${idade} anos. seu voto é obrigatório`)
}