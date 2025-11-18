const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    let nums = [];

    for (let i = 0; i < 5; i++) {
        nums.push(Number(prompt("Digite um número:")));
    }

    console.log(nums.reverse());

}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(prompt("Digite um número:"));
    }

    console.log("Soma =", soma);

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let soma = 0;

    for (let i = 0; i < 7; i++) {
        soma += Number(prompt("Digite um número:"));
    }

    console.log("Média =", soma / 7);

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let pares = 0;

    for (let i = 0; i < 5; i++) {
        if (Number(prompt("Digite um número:")) % 2 === 0) {
            pares++;
        }
    }

    console.log("Quantidade de pares:", pares);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 0; i < 5; i++) {
        let n = Number(prompt("Digite um número:"));
        if (n > maior) maior = n;
        if (n < menor) menor = n;
    }

    console.log("Maior:", maior);
    console.log("Menor:", menor);

}
btnEx05.addEventListener('click', ex05)

function ex06() {
    let nums = [];

    for (let i = 0; i < 10; i++) {
        nums.push(Number(prompt("Digite um número:")));
    }

    console.log(nums.sort((a, b) => a - b));

}
btnEx06.addEventListener('click', ex06)

function ex07() {
    let positivos = 0;

    for (let i = 0; i < 10; i++) {
        if (Number(prompt("Digite um número:")) > 0) {
            positivos++;
        }
    }

    console.log("Positivos:", positivos);

}
btnEx07.addEventListener('click', ex07)

function ex08() {
    let somaPares = 0, contPares = 0;
    let somaImpares = 0, contImpares = 0;

    for (let i = 0; i < 5; i++) {
        let n = Number(prompt("Digite um número:"));

        if (n % 2 === 0) {
            somaPares += n;
            contPares++;
        } else {
            somaImpares += n;
            contImpares++;
        }
    }

    console.log("Média dos pares:", contPares ? somaPares / contPares : 0);
    console.log("Média dos ímpares:", contImpares ? somaImpares / contImpares : 0);

}
btnEx08.addEventListener('click', ex08)

function ex09() {
    let pos = 0, neg = 0;

    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Digite um número:"));
        if (n > 0) pos++;
        if (n < 0) neg++;
    }

    console.log("Positivos:", pos);
    console.log("Negativos:", neg);

}
btnEx09.addEventListener('click', ex09)

function ex10() {
    let temZero = false;

    for (let i = 0; i < 5; i++) {
        if (Number(prompt("Digite um número:")) === 0) {
            temZero = true;
        }
    }

    console.log(temZero ? "Existe zero" : "Não existe zero");

}
btnEx10.addEventListener('click', ex10)

function ex11() {
    let somaPos = 0, somaNeg = 0;

    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Digite um número:"));

        if (n > 0) somaPos += n;
        if (n < 0) somaNeg += n;
    }

    console.log("Soma dos positivos:", somaPos);
    console.log("Soma dos negativos:", somaNeg);

}
btnEx11.addEventListener('click', ex11)

function ex12() {
    let nums = [];

    for (let i = 0; i < 5; i++) {
        nums.push(Number(prompt("Digite um número:")));
    }

    console.log(nums.sort((a, b) => b - a));

}
btnEx12.addEventListener('click', ex12)

function ex13() {
    let cont = 0;

    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Digite um número:"));
        if (n >= 10 && n <= 50) cont++;
    }

    console.log("Quantidade no intervalo 10-50:", cont);

}
btnEx13.addEventListener('click', ex13)

function ex14() {
    for (let i = 0; i < 7; i++) {
        let n = Number(prompt("Digite um número:"));
        if (n % 2 === 0) console.log(n);
    }

}
btnEx14.addEventListener('click', ex14)

function ex15() {
    let nomes = [];

    for (let i = 0; i < 5; i++) {
        nomes.push(prompt("Digite um nome:"));
    }

    console.log(nomes.sort());

}
btnEx15.addEventListener('click', ex15)