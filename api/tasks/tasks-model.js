const db = require('../../data/db-config')

module.exports ={
    find,
    add,
    add
};

function find(){
    return db('tasks')
}

// function findById(id){
//     return db('schemes')
//         .where({id})
//         .first();
// }

function add(tasks, id){
    // console.log(tasks);
    return db('tasks')
        .where('project_id', id)
        .insert(tasks)
        .then(t => {
            return t
        });
}

