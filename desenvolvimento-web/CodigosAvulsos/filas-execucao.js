console.log("1. Execução Síncrona Inicial");

// Microtask agendada antes das macrotasks
Promise.resolve().then(() => {
  console.log("2. Microtask agendada antes das macrotasks");
});

setTimeout(() => {
  console.log("3. Início da Macrotarefa 1");

  // Esta microtask é agendada dentro da primeira macrotarefa.
  // O runtime só irá executá-la depois que a primeira macrotarefa terminar.
  Promise.resolve().then(() => {
    console.log("4. Microtask agendada dentro da Macrotarefa 1");
  });

  console.log("5. Fim da Macrotarefa 1");
}, 0);

setTimeout(() => {
  console.log("6. Início da Macrotarefa 2");
}, 0);

console.log("7. Execução Síncrona Final");
