const router = require("express").Router()

const Tasks = require("./tasks-model");

const Change = (arr) => {
    const Arr = arr.map(e => {
        return {...e, is_completed : !!e.is_completed}
    })
    return Arr
}
//localhost:5000/api/tasks
router.get("/:id", (req, res) => {
    
  Tasks.find(req.params.id)
  .then(tasks => {
  if(tasks){
    res.status(200).json(Change(tasks));
  } else{
      res.status(404).json({message: "No tasks found"})
    }
  })
    .catch(err => {
      res.status(500).json({ messages: `failed to find tasks, ${err}`});
    });
});


module.exports = router;

