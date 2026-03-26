// Vamos tentar colocar o 'use strict' bem no início do programa 
'use strict';
// Quando colocamos o programa no modo estrito, o this interno de uma função não estará mais apontando para o objeto global

function teste() {
    console.log(this);
    // Nos casos que estivermos programando em um strict mode e quisermos referenciar
    // o objeto global dentro de uma função
    // fazemos da seguinte forma:
    console.log(global);
}

teste(); 

//'use strict'; // Eu achava que isto poderia vir a funcionar, mas não funciona. O this continua apontando para o objeto global. 

function teste2() {
    console.log(this);
}

teste2();