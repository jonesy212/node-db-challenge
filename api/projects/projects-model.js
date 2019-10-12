const db = require('../../data/db-config')

module.exports ={
    find,
    add,
    
};

function find(){
    return db('projects')
}

// function findById(id){
//     return db('schemes')
//         .where({id})
//         .first();
// }

function add(projects){
    // console.log(projects);
    return db('projects')
        .insert(projects)
        .then(p => {
            return p
        });
}

