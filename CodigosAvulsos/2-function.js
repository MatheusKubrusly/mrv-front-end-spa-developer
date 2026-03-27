(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name; // Quando referenciamos uma variável nesta função, estamos considerando o contexto onde ela está sendo criada

    function getName() {
        return this.name;
    }

    const user = {
        name: 'nome no objeto de execução',
        getNameArrowFn, //Estamos omitindo o nome da função por ser o mesmo do nome da propriedade, ou seja, na realidade temos 'getNameArrowFn: getNameArrowFn'
        getName //Estamos omitindo o nome da função por ser o mesmo do nome da propriedade, ou seja, na realidade temos 'getName: getName'
    }

    console.log(user.getNameArrowFn()); // 'arrow function'
    console.log(user.getName()); // 'nome no objeto de execução'

})();
