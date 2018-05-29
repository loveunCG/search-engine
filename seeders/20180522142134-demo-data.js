'use strict';
var faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. 
    */
    return queryInterface.bulkInsert('Datawares', [
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      },
      {
        url: faker.internet.url(),
        title: faker.name.title(),
        property: faker.lorem.sentences(),
        location: faker.address.country(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Datawares', null, {});
  }
};
