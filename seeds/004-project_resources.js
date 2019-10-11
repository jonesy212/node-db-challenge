
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {resource_name: 1, projec_id: 'rowValue1', project_id: ''},
        {resource_name: 2, projec_id: 'rowValue2', project_id: ''},
        {resource_name: 3, projec_id: 'rowValue3', project_id: ''}
      ]);
    });
};
