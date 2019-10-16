'use strict'
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'User Demo',
          email: 'test@test.com',
          password_hash: '$2y$08$ocudZBdPb3ezpAVpYF04WOciGIZi1/DaLsivbrRa9H3T0EAIehnRK'
        }
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
