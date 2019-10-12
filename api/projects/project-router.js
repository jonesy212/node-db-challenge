const router = require("express").Router()

const Projects = require("./projects-model");

const Change = (arr) => {
    const Arr = arr.map(e => {
        return {...e, is_completed : !!e.is_completed}
    })
    return Arr
}
//localhost:5000/api/projects
router.get("/", (req, res) => {
    
  Projects.find()
  .then(projects => {
  if(projects){
    res.status(200).json(Change(projects));
  } else{
      res.status(404).json({message: "No projects found"})
    }
  })

    .catch(err => {
      res.status(500).json({ messages: `failed to find projects, ${err}`  });
    });
});

router.post('/',(req,res)=>{
    Projects.add(req.body)
    .then(project =>{
        res.status(201).json({newProject : project})
    })
    .catch(err =>{
        res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
    })
}) 

module.exports = router;

