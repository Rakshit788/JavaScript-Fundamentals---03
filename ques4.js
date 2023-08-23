const Student =  {
    Name :"Rakshit" ,
    Age : 18 , 
    Learning : "JavaScript"

}  

function toCheckObjectHasProperty(Obj,propertyName ) {
  if(Obj.hasOwnProperty(propertyName)){
    console.log(`Yes ${propertyName} is property .`)

  }
  else{
 console.log(`NO ${propertyName} is not a property`)
  }
}

toCheckObjectHasProperty(Student , "Name")
toCheckObjectHasProperty(Student , "Class") 
toCheckObjectHasProperty(Student , "Salary")





  
  