let userMap =  new Map() ;

function addUser(name , email ,  age ){

let user =  {name , email ,  age }
 userMap.set(email , user)
 console.log(`User ${name} added succesfully`)


}

function updateUser(email , newName , newAge){

if(userMap.has(email)){
    const user =  userMap.get(email) ; 
    user.name = newName ;
    user.age = newAge
    console.log(`The new name ${newName} is added sucessfully`)
    console.log(`The new age ${newAge} is added sucessfully`)
}
else{
    console.log(`Thee email added is invaild `)
}


}

function deleteUser(email ){
    if(userMap.has(email)){
        const user = userMap.get(email)
        userMap.delete(email)
        console.log(`the ${user.name} is deleted sucessfully`)
    }
    else{console.log(`The email was not found`) }
}

addUser("Rakshit" , "rakshit788@gmail.com" , 18)
updateUser( "rakshit788@gmail.com" , "raki" , 22  )
deleteUser("rakshit788@gmail.com")
deleteUser("ddbeywbwu")