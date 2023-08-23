function reverseAString(str){
    let Splitstring = str.split("") ;
    let StringReverse = Splitstring.reverse();
    let Stringjoin = StringReverse.join("") ;
    return Stringjoin
}
console.log(reverseAString("Rakshit"))
