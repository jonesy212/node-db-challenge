
exports.up = function(knex) {
  return knex.schema.createTable('projects', col => {
      col
        .increments('project_id');
      col
        .text('project_name', 128)
        .unique()
          .notNullable();
      col
        .text('description', 300);
    col
        .boolean('is_completed')
        .defaultTo(false)
        .notNullable();

  })
  .createTable('tasks', col => {
    col
        .increments('task_id');
    col
        .integer('task_number')
        .unique();
    col
        .text('task_name', 75)
        .notNullable();
    col
        .text('task_description')
        .notNullable();
    col
        .text('notes')
    })      

  .createTable('resources', col =>{
    col
        .increments('resource_id');
    col
        .text('resource_name', 128)
        .unique()
        .notNullable();
    col.text('description')
    col
        .integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects');
    col
        .integer('task_id')
        .unsigned()
        .references('task_id')
        .inTable('tasks');
  })
  .createTable('project_resources', col =>{
    col
        .increments('proj_resc_id')
    col
        .text('resource_name', 128)
    col
        .text('project_resource_id')
        .unique()
        .unsigned()
    col
    .integer('project_id')
    .unsigned()
    .references('project_id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    col
    .integer('resource_id')
    .unsigned()
    .references('resource_id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
