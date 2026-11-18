import {Router} from "express";
import Users from "./DataBase.js";
import {logmiddleware, getUserid} from "./middlewares.js";
import {validateUser, validateQuery} from "./check.js";
import {validationResult, checkSchema, matchedData} from "express-validator";

const route = Router();

route.get("/users", checkSchema(validateQuery), (req, res )=>{
if(req.signedCookies.token !== "650799") return res.status(401).json({message: "Unauthorized access"})
if(Object.keys(req.query).length === 0) return res.status(201).json(Users)
const [[key, value]] = Object.entries(req.query);
const data = matchedData(req);
const result = validationResult(data);
    if(!result.isEmpty()){
        return res.status(400).json({ errors: result.array()});
    }
let convertedValue = key === "age" || key === "Userid" ? parseInt(value) : value;
let UserFoundId = Users.findIndex((user) => {
    return user[key] === convertedValue
})

if(UserFoundId === -1) return res.status(400).json({message: "No user found with that query"})

    res.status(200).json(Users[UserFoundId])  
})

route.post("/user",checkSchema(validateUser), (req, res )=>{
   const result = validationResult(req);
   if (!result.isEmpty()) {
     return res.status(400).json({ errors: result.array() });
   }
   const data = matchedData(req);
   const newUser = {
    "Userid": Users[Users.length - 1].Userid + 1,
    ...data 
   }
   Users.push(newUser)
   res.status(201).json(`${newUser.name} and his data has been added`)
 })


route.get("/User/name/:name",(req ,res) => {
   
    let saidName = req.params.name;
   let user = {};
   for( const [key , person] of Users.entries()){
    if(saidName === person.name){
        user[person.name] = person
    }
   }
   console.log(Object.keys(user))
   if (Object.keys(user).length === 0) {
    user = {message: "No user found with that name"}
   }
   return res.json(user)
})

route.get("/user/age/:age", (req ,res) => {
    let age = parseInt(req.params.age);
   let user = {}
   for( const [key , person] of Users.entries()){
    if(age === person.age){
        user[person.name] = person;
    }
}

 if (Object.keys(user).length === 0) {
    user = {message: "No user found with that name"}
   }

    return res.json(user)
})

route.get("/user/id/:id", (req ,res) => {
    let id = parseInt(req.params.id);
   let user = {}

   for( const  person of Users){
    if(id === person.Userid){
        user[person.name] = person;
    }
}

 if (Object.keys(user).length === 0) {
    user = {message: "No user found with that id"}
   }
  res.json(user)
})


route.put("/user/id/:id", getUserid ,(req,res)=>{
   const {body, UserIndex,userId} = req;
   if(UserIndex === -1) return res.sendStatus(400).json("error:1User not found ")
    Users[UserIndex] = {
Userid: userId,
...body
}
res.status(200).json(` ${body.name} has been updated` )
})

route.patch("/user/id/:id",getUserid ,(req,res)=>{
const {body, UserIndex ,formerUser} = req;
  console.log(UserIndex);

   if(UserIndex === -1) return res.sendStatus(400).json("error: User not found ")
    Users[UserIndex] = {
...Users[UserIndex],...body
}
res.status(200).json(` ${formerUser} has been updated to ${body.name}`)
})

route.get("/start", (req,res)=>{
    res.cookie("token","650799",{maxAge: 60000, signed:true})
    res.json({message: "Welcome to the user API"})
})

export default route;