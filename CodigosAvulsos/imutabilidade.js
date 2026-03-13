const user = { 
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

Object.freeze(user);

user.fullName = 'Guilherme Cabrini da Silva';

console.log(user);
