const faker = require('faker')

for (let i=0; i<60; i++)
console.log( faker.name.firstName(), faker.name.lastName(), faker.internet.email())
