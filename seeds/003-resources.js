
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'PT', description: 'Choosing our personal trainer will guide you until your ready'},
        {resource_name: 'Internet', description: 'Easy access to what you need'},
        {resource_name: 'Book', description: 'I\'m a reader myself'}
      ]);
    });
};
