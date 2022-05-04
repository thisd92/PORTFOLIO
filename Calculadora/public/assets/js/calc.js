//Função que mostra os números no visor
function calcNum(num){ 
    if (typeof gvisor == 'undefined') {
        document.formcalc.visor.value = ' ';
    }
    document.formcalc.visor.value = document.formcalc.visor.value + num;
    gvisor = 1;
}

//Função limpar
function limpar(){ 
    document.formcalc.visor.value = ' ';
    delete gvalor;
    delete goper;
    delete gvisor;
}

//Função das operações
function operacoes(oper, num1, num2){
    if (oper == 'adicao') {
        var valor = parseFloat(num1) + parseFloat(num2);
    }else if (oper == 'subtracao') {
        var valor = num1 - num2;
    }else if (oper == 'multiplicacao'){
        var valor = num1 * num2;
    }else if (oper == 'exponenciacao'){
        var valor = num1 ** num2;
    }else if (oper == 'inversa'){
        var valor = 1 / num1;
    }else if (oper == 'raiz'){
        var valor = Math.sqrt(num1);
    }else if (oper == 'percent'){
        var valor = num1 * num2/100;
    }else {
        var valor = num1 /num2;
    }
    return (valor)
}

//Função passagem
function calculo(oper){
    var valor = document.formcalc.visor.value;
    delete gvisor;

    if(typeof goper != 'undefined' && oper == 'resultado'){
        gvalor = operacoes(goper, gvalor, valor);
        document.formcalc.visor.value = gvalor;
        delete oper;
        delete gvalor;
        return(0);
    }

    if (typeof gvalor != 'undefined') {
        gvalor = operacoes(goper, gvalor, valor);
        goper = oper;
        document.formcalc.visor.value = gvalor;
    }else {
        gvalor = valor;
        goper = oper;
    }
}
//