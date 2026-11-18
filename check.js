 const validateUser = {
    name:{
        isString:{
            errorMessage: "Name must be a string"
        },
        notEmpty:{ 
            errorMessage: "Name cannot be empty"
        },
        isLength: {
            options: { min: 2, max: 50 },
            errorMessage: "Name must be between 2 and 50 characters"    
    }
},
age:{
    isInt:{
        options:{
            min : 1,
            max :100
        },
        errorMessage:"make sure the age is betwee 1 - 100"
    },
    notEmpty:{
        errorMessage:"age cannot be empty"
    },


},
"property.car":{
 notEmpty:{ 
            errorMessage: "car cannot be empty"
}

 },

 "property.house":{
 notEmpty:{ 
            errorMessage: "house cannot be empty"
 } 
},

property:{
 isObject:true,
 errorMessage:"property must be an object form",
}
 }

 const validateQuery  = {
    name:{
        in:["query"],
        optional:{checkFalsy:true},
        isString:{
            errorMessage: "Name must be a strnga"
        },
        notEmpty:{
            errorMessage: "Name cannot be empty"
        }
    },
    age:{
        in:["query"],
        optional:{checkFalsy:true},
        isInt:{
            options:{
                min : 1,
                max :100
            },
            errorMessage:"make sure the age is an integer between 1 - 100"
        },
        notEmpty:{
            errorMessage:"age cannot be empty"
        }
    },
    Userid:{
        in:["query"],
        optional:{checkFalsy:true},
        isInt:{
        errorMessage:"Userid must be an integer"},
        notEmpty:{
            errorMessage:"Userid cannot be empty"
        }
    }
 }
 export  {validateUser, validateQuery};