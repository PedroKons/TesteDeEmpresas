function calculadorIE(ieSemVerificador, p, d) {
    let arrayIE = ieSemVerificador.split('');
    let i = 9;
    let calculo = arrayIE.reduce((acumulador, valor) => {
        i--;
        return parseFloat(acumulador + (valor * i));
    }, );

    const calculoTotal = calculo + p;
    const restoDivisao = calculoTotal % 11;
    const moduloMenosResto = 11 - restoDivisao;
    return moduloMenosResto;

}

function validadorIE(ieAmapa) {
    let digitoVerificador = ieAmapa.charAt(8);
    let ieSemVerificador = ieAmapa.slice(0, 8);
    
    //verificação adicional (ve se o numero inserido nao tem menos de 9 digitos)
    if (ieAmapa.length < 9) {
        return false;
    }
    //Fim da verificação adicional

    //Primeira verificação (se começa com 03)
    if (ieAmapa.charAt(0) !== '0' && ieAmapa.charAt(1) !== '3') {
        return false;
    }
    //Fim da primeira verificação

    //Segunda verificação (define os valores de p e d dependo da faixa de valores)
    let p, d;
    if (ieSemVerificador >= '03000001' && ieSemVerificador <= '03017000') {
        p = 5;
        d = 0;
        console.log('Primeiro caso');
        const moduloMenosResto = calculadorIE(ieSemVerificador, p, d);
        if (moduloMenosResto == digitoVerificador) return true;
        if (moduloMenosResto == 10 && digitoVerificador == 0) return true;
        if (moduloMenosResto == 11 && digitoVerificador == 0) return true;
        return false;
        
    }
    if (ieSemVerificador >= '03017001' && ieSemVerificador <= '03019022') {
        p = 9;
        d = 1;
        console.log('Segundo caso');
        const moduloMenosResto = calculadorIE(ieSemVerificador, p, d);
        if (moduloMenosResto == digitoVerificador) return true;
        if (moduloMenosResto == 10 && digitoVerificador == 0) return true;
        if (moduloMenosResto == 11 && digitoVerificador == 1) return true;
        return false;
    }
    if (ieSemVerificador >= '03019023') {
        p = 0;
        d = 0;
        console.log('Terceiro caso');
        const moduloMenosResto = calculadorIE(ieSemVerificador, p, d);
        if (moduloMenosResto == digitoVerificador) return true;
        if (moduloMenosResto == 10 && digitoVerificador == 0) return true;
        if (moduloMenosResto == 11 && digitoVerificador == 0) return true;
        return false;
    }
    //Fim da segunda verificação
}

let iePrimeiroCaso = '030123459';
let ieSegundoCaso = '030173151';
let ieTerceiroCaso = '030276390';
let ieCasoIncorreto = '030055691';
let ieCasoQualquer = '030244749'; // fique avontade para testar

console.log(validadorIE(ieCasoQualquer));
