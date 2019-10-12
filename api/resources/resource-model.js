const db = require('../../data/db-config')

module.exports ={
    find,
    add,
    
};

function find(){
    return db('resources')
}

// function findById(id){
//     return db('schemes')
//         .where({id})
//         .first();
// }

function add(resources){
    // console.log(resources);
    return db('resources')
        .insert(resources)
        .then(p => {
            return p
        });
}

