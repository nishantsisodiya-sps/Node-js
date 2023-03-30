const express = require ('express')
const router = new express.Router();


//create new student  (Post method) using promises ============>

// router.post('/students' , (req , res)=>{                   //adding data using promises
//     const user = new student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err)
//     }) 
// })

//create new student  (Post method)  using async await ============>

router.post('/students' , async(req , res)=>{
    try {
        const user = new student(req.body);
    
        const createUser = await user.save()
        res.status(201).send(createUser)

        if(req.file){
            student.avtar = req.file.path
        }
        
    } catch (err) {
        res.status(400).send(err)
    } 
})


//Read the data of registered students (Get method) ===========>

router.get("/students" , async(req , res)=>{
    
    try {
        const studentsData = await student.find();
        res.send(studentsData)
    } catch (error) {
        res.send(error)
    }
    
})



// Get individual student data using id =============>

router.get("/students/:id" , async(req , res)=>{

    try {
        const _id = req.params.id
        const studentData = await student.findById(_id);
        
        if(!studentData){
            return res.status(400).send()
        }else{
            return res.send(studentData)
        }

        res.send(studentData);
    } catch (error) {
        
    }

})


// Update the student by its id (Put/patch method) ==========>

router.patch("/students/:id" , async(req , res)=>{

    try {
        const _id = req.params.id
        const updateStudents = await student.findByIdAndUpdate(_id , req.body , {
            new : true
        });
        res.send(updateStudents)
    } catch (error) {
        res.status(400).send(error)
    }

})



//Delete the data of a student  (Delete method) ===========>

router.delete("/students/:id" , async(req , res)=>{

    try {
        const _id = req.params.id
        const deleteStudent = await student.findByIdAndRemove(_id , req.body)
        res.send(deleteStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;