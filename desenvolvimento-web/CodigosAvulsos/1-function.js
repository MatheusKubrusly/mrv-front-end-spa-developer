function fn() {
    console.log('flag 1');
}


const controlFnExec = fnParam => {
    console.log('flag 2')
    return allowed => {
        if (allowed) {
            console.log('flag 3');
            return fnParam();
        }
    }
};

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); 
controlFnExec(fn)(true); //ambas estas declarações exibirão as mesmas informações na mesma ordem!

//output: 
//flag 2
//flag 3
//flag 1
