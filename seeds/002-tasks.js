exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_number: 1, task_description: 'desc 1', notes: 'addl notes 1', task_name: 'clean'},
        {task_number: 2, task_description: 'desc 2', notes: 'addl notes 2', task_name: 'cook'},
        {task_number: 3, task_description: 'desc 3', notes: 'addl notes 3', task_name: 'exercise'}
      ]);
    });
};
