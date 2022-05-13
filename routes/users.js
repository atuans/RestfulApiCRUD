import express from 'express';
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from '../controller/user.js';


const router = express.Router();


 let users = [
     //{
//     firstName: "Anh",
//     LastName: "Tuan",
//     Age: 19,
// },
// {
//     firstName: "Cong",
//     LastName: "Nguyen",
//     Age: 19
// }
]

// all route in here starting with slash /user
// router.get('/',(req,res)=>{
//     console.log(users);
//     res.send(users)

// })

router.get('/',getUsers);

// router.post('/',(req,res)=>{    
//     // push users into a mock database with request body

//     const user = req.body;
//     // const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' this is a random character

//     //add this id to current user
//     // we get it from req.body

//     // const userWithCurrentID = { ...user, id: userID} // spread operators, added one more value, id to array
//     // we can write it in shorten way
//     // const userWithCurrentID = {...user,id: uuidv4()}; 

//     //or 
//     users.push({...user,id: uuidv4()})

//     //users.push(userWithCurrentID);

//     res.send(`User with name ${user.firstName} added to the database`);
// })

router.post('/',createUser);


// users/id=... store in request.params( req.params) 
// example req.params{ id:2 }



// router.get('/:id',(req,res)=>{
//     //get the id from req.params

//     const {id} = req.params;

//     //send the user data for specific id, we have to find the user in the database with the same id

//     const FoundTheUser = users.find((user) => user.id === id) ; // explore the database

//     // res.send(req.params);
//     // when we try with the url localhost:5000/users/23234 it will automatically store the id: 23234 in req.params

//     res.send(FoundTheUser);
// })

router.get('/:id',getSingleUser);

// route to delete user with specific id

// router.delete('/:id',(req,res) =>{

//     const {id} = req.params;
//     //imagine delete user with id =1
//     // A - id =1
//     // B - id =2

//     users = users.filter((user) => user.id != id) // if the id not match, keep the users inside the array
//     res.send(`User with the id :${id} deleted from the database`)
// })

router.delete('/:id', deleteUser);


//function to update user

// router.patch('/:id',(req,res)=>{
//     const {id} = req.params;
//     const {firstName, lastName, age} = req.body;

//     const user = users.find((user) => user.id === id); // which user we want to update

//     // replace the value
//     if(firstName)user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age)user.age = age;

//     res.send(`User with id: ${id} has been updated`)
    
// })

router.patch('/:id', updateUser);



export default router;