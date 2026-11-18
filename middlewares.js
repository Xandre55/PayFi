import Users from "./DataBase.js";

const logmiddleware = function (req,res, next){
  console.log(`logging ${req.method}${req.url}....`)
 next()
 }

 const getUserid =  ( req ,res, next) => {
     const { params:{id}}= req
    const userId = parseInt(id);
    if(isNaN(userId)) return res.status(400).json("error: Invalid user id")

const UserIndex = Users.findIndex((user) => {
    return user.Userid === userId
   })
   if(UserIndex === -1) return res.status(400).json("error: User not found ")
   req.UserIndex = UserIndex;
   req.formerUser = Users[UserIndex].name;
   req.userId = userId;

   next();
}

 export  {logmiddleware, getUserid };