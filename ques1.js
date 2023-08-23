const car = {
    make:"BMW" , 
    model: "BMW X5" ,
    year: "2023" ,
}

function displayPropertiesOfCars(car){
   for(const property in car){
    console.log(`${property} : ${car[property]}`)
   }
}

displayPropertiesOfCars(car)
