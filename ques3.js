const Student =  {
    Name :"Rakshit" ,
    Age : 18 , 
    Learning : "JavaScript"

} 


function toDisplayAllPropertiesOfStudent (Obj){
    console.log(`  ${Object.keys(Obj).length}`)
}
toDisplayAllPropertiesOfStudent(Student) ;