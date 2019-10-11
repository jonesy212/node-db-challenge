
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Bathroom', description:  ' help you better clean bathroom', is_completed:''},
        {id: 2, project_name: 'Bedroom', description:  'Steps to help clean the bedroom', is_completed:''},
        {id: 3, project_name: 'Closet', description:  'Help you to organize your closet', is_completed:''}
      ]);
    });
};
