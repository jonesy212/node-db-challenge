
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {resource_name: 'Johnny', description: 'resource descript 1', project_id:'', task_id},
        {resource_name: 'Michael', description: 'resource descript 2', project_id:'', task_id},
        {resource_name: 'Timmy', description: 'resource descript 3', project_id:'', task_id}
      ]);
    });
};
