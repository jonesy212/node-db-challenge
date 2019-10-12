const router = require("express").Router()

const Resources = require("./resource-model");


//localhost:5000/api/resources
router.get("/", (req, res) => {
    
  Resources.find()
  .then(resources => {
  if(resources){
    res.status(200).json(resources);
  } else{
      res.status(404).json({message: "No resources found"})
    }
  })

    .catch(err => {
      res.status(500).json({ messages: `failed to find resources, ${err}`  });
    });
});

router.post('/',(req,res)=>{
    Resources.add(req.body)
    .then(resource =>{
        res.status(201).json({newProject : resource})
    })
    .catch(err =>{
        res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
    })
}) 

module.exports = router;

