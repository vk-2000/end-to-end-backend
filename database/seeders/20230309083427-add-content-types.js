'use strict';
const { Content, Collection } = require('../../src/models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const fields = {
      name: 'string',
      email: 'string',
      phone: 'string',
      address: 'string',
    };
    await Content.bulkCreate([
      {id: 1, name: 'Profile', fields: fields, createdAt: new Date(), updatedAt: new Date()},
    ]);

    await Collection.bulkCreate([
      {id: 1, values: {name: 'John Doe', email: 'john@gmail.com', phone: '1234567890', address: '123 Main St'}, contentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, values: {name: 'Jane Doe', email: 'jane@gmail.com', phone: '0987654321', address: '456 Main St'}, contentId: 1, createdAt: new Date(), updatedAt: new Date()},
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Contents', null, {});
  }
};
