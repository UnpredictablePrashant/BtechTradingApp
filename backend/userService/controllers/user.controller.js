const User = require('../models/user.model').User


const registerUser = async (req,res) => {
    try{
        console.log('user Details: ', req.body)
        let userData = User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        await userData.save()
        res.send('User registered!!!')
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
}

const getUser = async(req,res) => {
    try{
        User.find({})
            .then(data => res.send(data))
            .catch(err => res.send('something went wrong'))
    }catch(err){
        console.log(err)
        res.send('ERR')
    }
}

const getUserById = async(req,res) => {
    try{
        User.findById(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.send('something went wrong'))
    }catch(err){
        console.log(err)
        res.send('ERR')
    }
}

const updateUserById = async(req,res) => {
    //
}

const deleteUserById = async(req,res) => {

}

module.exports = { registerUser,getUser, getUserById, updateUserById, deleteUserById }