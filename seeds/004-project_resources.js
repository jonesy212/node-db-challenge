
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {resource_name: 'Cleaning Material'},
        {resource_name: 'Cooking Resources'},
        {resource_name: 'Health Books'}
      ]);
    });
};
