alert("Hello! Welcome to Random business Name Generator")


let rand = Math.random()
let first, second, third;
//For 1st word
if (rand < 0.33) {
    first = "crazy"
} else if( rand < 0.66 && rand>= 0.33){
    first = "Amazing"
}else{
    first = "Fire"
}
//For 2nd word
rand = Math.random()
if (rand < 0.33) {
    second = "Engine"
} else if( rand < 0.66 && rand > 0.33){
    second = "Foods"
}else{
    second = "Sports"
}
//For 3rd Word
rand = Math.random()
if (rand < 0.33) {
    third = "Limited"
} else if( rand < 0.66 && rand > 0.33){
    third = "Hub"
}else{
    third = "Bros"
}

alert(`${first} ${second} ${third}`)