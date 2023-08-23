function areaOfCircle(radius , Diameter){
 if(radius){
    return Math.PI*Math.pow(radius , 2)  ;

 }

 else{
    return Math.PI*Math.pow((Diameter/2) , 2)
 }
 
} 

console.log(areaOfCircle(2,0)) 
console.log(areaOfCircle( 0, 2)) 

