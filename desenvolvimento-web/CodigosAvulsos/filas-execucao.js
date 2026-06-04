console.log("1. Execução Síncrona Inicial");

// Agendando uma Macrotarefa (Fila Normal) com tempo ZERO
setTimeout(() => {
  console.log("2. Eu sou uma Macrotarefa (Fila Normal)");
}, 0);

// Quero testar se de fato quando a execução entra na fila de Macrotasks, apenas uma é executada por vez!
setTimeout(() => {
  console.log("3. Eu sou uma Macrotarefa (Fila Normal)");
}, 0);

// Agendando uma Microtarefa (Fila VIP)
Promise.resolve().then(() => {
  console.log("4. Eu sou uma Microtarefa (Fila VIP)");
});

// Quero testar se quando a execução entra na fila de Microtasks, todas elas são executadas de acordo com a ordem de chegada
Promise.resolve().then(() => {
  console.log("5. Eu sou uma Microtarefa (Fila VIP)");
});

console.log("6. Execução Síncrona Final");
