const express = require('express')
require('dotenv').config()
const app = express()
const helloRoutes = require('./routes/hello.route')
app.use('/api/v1/', helloRoutes)
const person = [
    {
        id: 1,
        name: "Prashant",
        email: "prashant@abc.com",
    },
    {
        id: 2,
        name: "ABC",
        email: "prashant@xyz.com",
    },
    {
        id: 3,
        name: "XYZ",
        email: "prashant@pqr.com",
    }
]
// app.get('/hello',(req,res)=>{
//     try{
//         res.send('Hello World!')
//     }catch(err){
//         res.send('SOMETHING WENT WRONG')
//     }
// })

app.get('/alluser', (req,res)=>{
    try{
        res.send(person)
    }catch(err){
        res.send('ERR')
    }
})
app.get('/alluser/:name', (req,res)=>{
    try{
        let name = req.params.name
        // Logic
        //
        res.send(name)
    }catch(err){
        res.send('ERR')
    }
})

// username, email, password, 
// user registration --> username, email, password (user)
// user details --> bio, name, age, gender, phoneNum, enrollmentNum, 
//department, batch, semester, school (school name, percentage marks, city), 
//city, country, hobby, achievements, profilePic  (userdetails)
// 
app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})