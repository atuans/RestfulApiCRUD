import { v4 as uuidv4 } from 'uuid';


export const createUser = (req,res) =>{
    const user = req.body;
    users.push({...user,id: uuidv4()})

    res.send(`User with name ${user.firstName} added to the database`);
}


export const getUsers = (req,res) =>{
    res.send(users)

}

export const getSingleUser = (req,res) =>{
    const {id} = req.params;

    const FoundTheUser = users.find((user) => user.id === id) ; // explore the database
    res.send(req.params);

    res.send(FoundTheUser);
}


export const deleteUser = (req,res) =>{
    const {id} = req.params;
    users = users.filter((user) => user.id != id) // if the id not match, keep the users inside the array
    res.send(`User with the id :${id} deleted from the database`)
}

export const updateUser = (req,res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id); // which user we want to update

    // replace the value
    if(firstName)user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age)user.age = age;

    res.send(`User with id: ${id} has been updated`)
}