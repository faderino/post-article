"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = require("../MOCK_DATA.json");
    data.forEach((d) => {
      d.createdAt = new Date();
      d.updatedAt = new Date();
      d.status = ["publish", "draft"][Math.floor(Math.random() * 2)];
    });

    await queryInterface.bulkInsert("Posts", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Posts", null);
  },
};
